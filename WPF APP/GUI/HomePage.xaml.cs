using System;
using System.Windows;
using System.Windows.Controls;

namespace GUI
{
    /// <summary>
    /// Interaction logic for HomePage.xaml
    /// </summary>
    public partial class HomePage : Window
    {
        public HomePage()
        {
            InitializeComponent();
        }

        // Button Click Event Handlers
        private void menubt(object sender, RoutedEventArgs e)
        {
            Menu menu = new Menu();
            menu.Show();
        }

        private void orderbt(object sender, RoutedEventArgs e)
        {
            Order order = new Order();
            order.Show();
        }

        private void aboutbt(object sender, RoutedEventArgs e)
        {
            About about = new About();
            about.Show();
        }

        private void settingsbt(object sender, RoutedEventArgs e)
        {
            Settings settings = new Settings();
            settings.Show();
        }
    }
}
