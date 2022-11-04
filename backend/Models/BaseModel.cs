using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeepBakcend.Models
{
    public class BaseModel
    {
        public bool success { get; set; }
        public object items { get; set; }
        public string message { get; set; }
        public int total { get; set; }

        public static BaseModel E(string message)
        {
            return new BaseModel { message = message };
        }

        public static BaseModel S(object items = null, int total = 0, string message = "")
        {
            return new BaseModel { items = items, success = true, message = message, total = total };
        }
    }
}
