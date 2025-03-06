using System;
using System.Linq;
using System.Windows;
using Microsoft.EntityFrameworkCore;
using my11;

namespace GUI
{
    public partial class Menu : Window
    {
        private MenuDbContext _context;

        public Menu()
        {
            InitializeComponent();
            _context = new MenuDbContext();
            LoadData();
        }

        private void LoadData()
        {
            FoodDataGrid.ItemsSource = _context.FoodItems.ToList();
        }

        private void AddFood_Click(object sender, RoutedEventArgs e)
        {
            if (!decimal.TryParse(txtPrice.Text, out decimal price))
            {
                MessageBox.Show("Invalid price format.");
                return;
            }

            var newFood = new FoodItem
            {
                Name = txtName.Text,
                Price = price,
                About = txtAbout.Text
            };

            _context.FoodItems.Add(newFood);
            _context.SaveChanges();
            LoadData();
            ClearFields();
        }

        private void EditFood_Click(object sender, RoutedEventArgs e)
        {
            if (FoodDataGrid.SelectedItem is FoodItem selectedFood)
            {
                txtName.Text = selectedFood.Name;
                txtPrice.Text = selectedFood.Price.ToString();
                txtAbout.Text = selectedFood.About;

                _context.FoodItems.Remove(selectedFood);
                _context.SaveChanges();
            }
        }

        private void DeleteFood_Click(object sender, RoutedEventArgs e)
        {
            if (FoodDataGrid.SelectedItem is FoodItem selectedFood)
            {
                _context.FoodItems.Remove(selectedFood);
                _context.SaveChanges();
                LoadData();
            }
            else
            {
                MessageBox.Show("Please select an item to delete.");
            }
        }

        private void ClearFields()
        {
            txtName.Clear();
            txtPrice.Clear();
            txtAbout.Clear();
        }
    }
}
