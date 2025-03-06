using Microsoft.EntityFrameworkCore;

namespace my11
{
    public class OrderDbContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=D:\database\order_database.db")
                          .LogTo(Console.WriteLine, Microsoft.Extensions.Logging.LogLevel.Information); // Enable SQL logging
        }
    }
}
