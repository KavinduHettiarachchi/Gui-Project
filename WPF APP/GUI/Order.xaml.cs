using System;
using System.Linq;
using System.Windows;
using Microsoft.EntityFrameworkCore;
using my11;

namespace GUI
{
    public partial class Order : Window
    {
        private OrderDbContext _context;

        public Order()
        {
            InitializeComponent();
            _context = new OrderDbContext();
            LoadOrders();
        }

        private void LoadOrders()
        {
            OrderDataGrid.ItemsSource = _context.Orders.ToList();
        }

        private void AddOrder_Click(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtName.Text) || string.IsNullOrWhiteSpace(txtFood.Text) ||
                string.IsNullOrWhiteSpace(txtAddress.Text) || string.IsNullOrWhiteSpace(txtContact.Text))
            {
                MessageBox.Show("All fields are required.");
                return;
            }

            var newOrder = new my11.Order
            {
                Name = txtName.Text,
                Food = txtFood.Text,
                Address = txtAddress.Text,
                Contact = txtContact.Text
            };

            _context.Orders.Add(newOrder);
            _context.SaveChanges();
            LoadOrders();
            ClearInputs();
        }

        private void EditOrder_Click(object sender, RoutedEventArgs e)
        {
            if (OrderDataGrid.SelectedItem is my11.Order selectedOrder)
            {
                selectedOrder.Name = txtName.Text;
                selectedOrder.Food = txtFood.Text;
                selectedOrder.Address = txtAddress.Text;
                selectedOrder.Contact = txtContact.Text;

                _context.Orders.Update(selectedOrder);
                _context.SaveChanges();
                LoadOrders();
                ClearInputs();
            }
            else
            {
                MessageBox.Show("Select an order to edit.");
            }
        }

        private void DeleteOrder_Click(object sender, RoutedEventArgs e)
        {
            if (OrderDataGrid.SelectedItem is my11.Order selectedOrder)
            {
                _context.Orders.Remove(selectedOrder);
                _context.SaveChanges();
                LoadOrders();
            }
            else
            {
                MessageBox.Show("Select an order to delete.");
            }
        }

        private void ClearInputs()
        {
            txtName.Clear();
            txtFood.Clear();
            txtAddress.Clear();
            txtContact.Clear();
        }
    }
}

