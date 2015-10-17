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
    public class Post
    {
        public int PostID { get; set; }
        [Required, DataType(DataType.Text)]
        public string PostTitle { get; set; }
        [Required, DataType(DataType.DateTime)]
        public DateTime PostDate { get; set; }
        [DataType(DataType.DateTime)]
        public Nullable<DateTime> PostDeletedDate { get; set; }
        [Required, DataType(DataType.Text)]
        public string PostText { get; set; }

        public Post getPost(int PostID)
        {
            try
            {
                using (var ctx = new PostContext())
                {
                    Post oldPost = ctx.Posts.Find(PostID);
                    return oldPost;
                }
            }
            catch (Exception)
            {
                return null;
            }
        }

        public List<Post> getPosts(int Limit, int From)
        {
            if (Limit > 0)
            {
                if (From > 0)
                {
                    //posts = post.getPosts(Limit, From);
                    using (var ctx = new PostContext())
                    {
                        string postGetPostQueryCustom =
                            "SELECT * " + 
                            "FROM POSTS  " + 
                            "where postid < " + From.ToString() + " " + 
                            "ORDER BY PostDate desc  " + 
                            "OFFSET  0 ROWS  " + 
                            "FETCH NEXT " + Limit.ToString() + " ROWS ONLY";
                        List<Post> postlist = ctx.Posts.SqlQuery(postGetPostQueryCustom).ToList();
                        return postlist;
                    }
                }
                else
                {
                    //posts = post.getPosts(Limit, 0);
                    using (var ctx = new PostContext())
                    {
                        string postGetPostQueryCustom =
                            "SELECT * " +
                            "FROM POSTS  " +
                            "ORDER BY PostDate desc  " +
                            "OFFSET  0 ROWS  " +
                            "FETCH NEXT " + Limit.ToString() + " ROWS ONLY";
                        List<Post> postlist = ctx.Posts.SqlQuery(postGetPostQueryCustom).ToList();
                        return postlist;
                    }
                }
            }
            else
            {
                using (var ctx = new PostContext())
                {
                    string postGetPostQueryCustom =
                                "SELECT * " +
                                "FROM POSTS  " +
                                "ORDER BY PostDate desc";
                    List<Post> postlist = ctx.Posts.SqlQuery(postGetPostQueryCustom).ToList();
                    return postlist;
                }
            }
        }

        public string createPost(string PostTitle, string PostText)
        {
            try
            {
                using (var ctx = new PostContext())
                {
                    //if (!ctx.Database.Exists())
                    //{
                    //    ((IObjectContextAdapter)ctx).ObjectContext.CreateDatabase();
                    //}
                    Post post = new Post()
                    {

                        PostTitle = PostTitle,
                        PostText = PostText,
                        PostDate = DateTime.Now,
                        PostDeletedDate = null
                    };

                    ctx.Posts.Add(post);
                    ctx.SaveChanges();
                }
                return "ok";
            }
            catch (Exception)
            {
                return "fail";
            }
        }

        public string updatePost(int PostID, string PostTitle, string PostText)
        {
            try
            {
                using (var ctx = new PostContext())
                {
                    Post oldPost = ctx.Posts.Find(PostID);
                    if (oldPost != null)
                    {
                        oldPost.PostTitle = PostTitle;
                        oldPost.PostText = PostText;
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
        
        public string deletePost(int PostID)
        {
            try
            {
                using (var ctx = new PostContext())
                {
                    Post oldPost = ctx.Posts.Find(PostID);
                    if (oldPost != null)
                    {
                        if(oldPost.PostDeletedDate != null)
                        {
                            return "already deleted";
                        }
                        else
                        {
                            oldPost.PostDeletedDate = DateTime.Now;
                            ctx.SaveChanges();
                        }
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
