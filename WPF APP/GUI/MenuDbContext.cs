using Microsoft.EntityFrameworkCore;
using System;

namespace my11
{
    public class MenuDbContext : DbContext
    {
        public DbSet<FoodItem> FoodItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=D:\database\menu_database.db")
                .LogTo(Console.WriteLine, Microsoft.Extensions.Logging.LogLevel.Information);
        }
    }
}
