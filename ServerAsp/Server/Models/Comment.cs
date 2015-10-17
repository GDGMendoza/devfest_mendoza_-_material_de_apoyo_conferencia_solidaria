using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNet.Identity;
using Server.Context;

namespace Server.Models
{
    public class Comment
    {
        public int CommentID { get; set; }
        [Required]
        [DataType(DataType.Text)]
        public string CommentText { get; set; }
        [Required]
        [DataType(DataType.Text)]
        public DateTime CommentDate { get; set; }
        [Required]
        [DataType(DataType.Text)]
        public int PostID { get; set; }

        public string createComment(string Comment, int PostID)
        {
            try
            {
                using (var ctx = new CommentContext())
                {
                    Comment comment = new Comment()
                    {

                        CommentText = Comment,
                        PostID = PostID,
                        CommentDate = new DateTime()
                    };
                    ctx.Comments.Add(comment);
                    ctx.SaveChanges();
                }
                return "ok";
            }
            catch (Exception)
            {
                return "fail";
            }
        }

        public string deleteComment(int CommentID)
        {
            try
            {
                using (var ctx = new CommentContext())
                {
                    Comment oldComment = ctx.Comments.Find(CommentID);
                    if (oldComment != null)
                    {
                        ctx.Comments.Remove(oldComment);
                        ctx.SaveChanges();
                    }
                }
                return "ok";
            }
            catch (Exception)
            {
                return "fail";
            }
        }

        public string updateComment(int CommentID, string CommentText)
        {
            try
            {
                using (var ctx = new CommentContext())
                {
                    Comment oldComment = ctx.Comments.Find(CommentID);
                    if (oldComment != null)
                    {
                        oldComment.CommentText = CommentText;
                        ctx.SaveChanges();
                    }
                }
                return "ok";
            }
            catch (Exception)
            {
                return "fail";
            }
        }
    }

    
}
