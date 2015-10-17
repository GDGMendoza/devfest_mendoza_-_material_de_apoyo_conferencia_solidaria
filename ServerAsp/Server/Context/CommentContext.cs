using Server.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Context
{
    class CommentContext : DbContext
    {
        public CommentContext()
            : base("DefaultConnection")
        {
        }

        public DbSet<Comment> Comments { get; set; }
    }
}
