using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Http;
using Thinktecture.IdentityModel.Http.Cors.Mvc;

namespace Server
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            //DependencyResolver();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            RegisterCors(MvcCorsConfiguration.Configuration);
        }
        private void RegisterCors(MvcCorsConfiguration corsConfig)
        {
            //corsConfig.ForAllResources().AllowAllOriginsAllMethodsAndAllRequestHeaders();
            corsConfig.ForAllOrigins().AllowCookies().AllowAll();
        }
    }
}
