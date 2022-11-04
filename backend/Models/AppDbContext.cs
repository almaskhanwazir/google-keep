using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace KeepBakcend.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options)
          : base(options)
        {
        }
        public DbSet<Notes> Notes { get; set; }
    }
}
