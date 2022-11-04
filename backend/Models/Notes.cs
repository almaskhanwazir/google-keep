using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KeepBakcend.Models
{
    public class Notes
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key, Column(Order = 0)]
        public int id { get; set; }
        public int Arrangement { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string bgColor { get; set; }
        public bool IsPinned { get; set; }
    }
}
