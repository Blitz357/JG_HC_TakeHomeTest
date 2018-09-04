using System.Web.Mvc;
using System.Web.Routing;
using JG_PeopleSearch.App_Start;

namespace JG_PeopleSearch
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                constraints:new
                {
                    serverRoute = new ServerRouteConstraint(url => false)
                }
            );

            routes.MapRoute(
                name: "angular",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" }
            );
        }
    }
}
