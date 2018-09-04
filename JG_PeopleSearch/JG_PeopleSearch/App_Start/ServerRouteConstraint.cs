using System;
using System.Web;
using System.Web.Routing;

namespace JG_PeopleSearch.App_Start
{
    public class ServerRouteConstraint : IRouteConstraint
    {
        private readonly Func<Uri, bool> _predicate;

        public ServerRouteConstraint(Func<Uri, bool> predicate)
        {
            _predicate = predicate;
        }

        public bool Match(HttpContextBase httpContext, Route route, string parameterName, RouteValueDictionary values,
            RouteDirection routeDirection)
        {
            return _predicate(httpContext.Request.Url);
        }
    }
}