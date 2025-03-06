using System;
using System.ComponentModel.DataAnnotations;

namespace my11
{
    public class Order
    {
        [Key] // Primary Key
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public string Food { get; set; } = string.Empty;

        [Required]
        public string Address { get; set; } = string.Empty;

        [Required, Phone]
        public string Contact { get; set; } = string.Empty;
    }
}
