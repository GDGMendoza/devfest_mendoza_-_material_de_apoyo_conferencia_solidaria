using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Server.Models;

namespace Server.Controllers
{
    public class CommentController : Controller
    {
        private Comment comment = new Comment();
        // GET: Comment
        public ActionResult Index()
        {
            return View();
        }

        [Route("post/{PostID}/comment")]
        [HttpPost]
        public JsonResult create(string CommentText, int PostID)
        {
            string status = string.Empty;
            status = comment.createComment(CommentText, PostID);
            return Json(new { status = status });
        }

        [Route("post/{PostID}/comment/{CommentID}")]
        [HttpDelete]
        public JsonResult delete(int CommentID)
        {
            string status = string.Empty;
            status = comment.deleteComment(CommentID);
            return Json(new { status = status });
        }

        [Route("post/{PostID}/comment/{CommentID}")]
        [HttpPost]
        public JsonResult update(int CommentID, string CommentText)
        {
            string status = string.Empty;
            status = comment.updateComment(CommentID,CommentText);
            return Json(new { status = status });
        }
        /*
         * Validación de PostID no vacio y Comment vacio
         */
    }
}