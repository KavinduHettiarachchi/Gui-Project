using System;
using System.ComponentModel.DataAnnotations;

namespace my11
{
    public class FoodItem
    {
        [Key] // Primary Key
        public int Id { get; set; }

        [Required] // Makes this field mandatory
        public string Name { get; set; } = string.Empty;

        [Required]
        [Range(0.01, 10000)] // Ensures price is valid
        public decimal Price { get; set; }

        public string About { get; set; } = string.Empty; // Description of the food item
    }
}
