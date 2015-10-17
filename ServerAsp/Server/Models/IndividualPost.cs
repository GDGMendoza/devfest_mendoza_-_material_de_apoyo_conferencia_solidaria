using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNet.Identity;
using Server.Context;
using System.Data.Entity.Infrastructure;

namespace Server.Models
{
    public class ResumedPost
    {
        public int PostID { get; set; }
        [Required, DataType(DataType.Text)]
        public string PostTitle { get; set; }
        [Required, DataType(DataType.DateTime)]
        public DateTime PostDate { get; set; }
        [DataType(DataType.DateTime)]
        public Nullable<DateTime> PostDeletedDate { get; set; }
        [Required, DataType(DataType.Text)]
        public string PostDescription { get; set; }
    }
}
