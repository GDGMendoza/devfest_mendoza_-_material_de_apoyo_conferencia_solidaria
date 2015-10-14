using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Server
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            /*
            routes.MapRoute(
                "post",                                           // Route name
                "post/{postID}/{action}",                            // URL with parameters
                new { controller = "post", action = "Index" }  // Parameter defaults
            );
            */
            /*
            routes.MapRoute(
                "Post",                                           // Route name
                "post/{postID:int}",                            // URL with parameters
                new { controller = "Post", action = "Index", postID = UrlParameter.Optional }
            );
            */
            routes.MapMvcAttributeRoutes();

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
