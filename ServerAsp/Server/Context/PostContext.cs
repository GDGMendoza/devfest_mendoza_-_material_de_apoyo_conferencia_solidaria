using Server.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Context
{
    class PostContext : DbContext
    {
        public PostContext()
            : base("DefaultConnection")
        {
        }

        public DbSet<Post> Posts { get; set; }
    }
}
