using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Server.Models;

namespace Server.Controllers
{
    //[Route("post")]
    [RoutePrefix("post")]
    public class PostController : Controller
    {
        private Post post = new Post();

        // GET: Post
        //public ActionResult Index()
        //{
        //    return View();
        //}

        // Posibilidad de marcar post activo / inactivo?

        [Route]
        [HttpGet]
        public JsonResult getall(int Limit = 0, int From = 0)
        {
            /*if (postID != null)
            {

            }*/
            List<Post> posts = new List<Post>();
            posts = post.getPosts(Limit,From);
            return Json(new { posts = posts }, JsonRequestBehavior.AllowGet);
        }

        [Route("{PostID:int}")]
        [HttpGet]
        public JsonResult get(int PostID)
        {
            Post result = new Post();
            result = post.getPost(PostID);
            return Json(new { post = result }, JsonRequestBehavior.AllowGet);
        }

        [Route("{PostID:int}")]
        [HttpDelete]
        public JsonResult delete(int PostID)
        {
            string status = string.Empty;
            status = post.deletePost(PostID);
            return Json(new { status = status }, JsonRequestBehavior.AllowGet);
        }

        [Route]
        [HttpPost]
        public JsonResult create(string PostTitle, string PostText)
        {
            string status = string.Empty;
            status = post.createPost(PostTitle, PostText);
            return Json(new { status = status }, JsonRequestBehavior.AllowGet);
        }

        [Route("{PostID:int}")]
        [HttpPut]
        public JsonResult update(int PostID, string PostTitle, string PostText)
        {
            string status = string.Empty;
            status = post.updatePost(PostID, PostTitle, PostText);
            return Json(new { status = status }, JsonRequestBehavior.AllowGet);
        }

        [Route("testConnection")]
        [HttpPost]
        public JsonResult testConnection()
        {
            return Json(new { connection = "ok" }, JsonRequestBehavior.AllowGet);
        }
    }
}