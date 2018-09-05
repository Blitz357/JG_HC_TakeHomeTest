using System.Data.Entity;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using JG_PeopleSearch.Persistence;

namespace JG_PeopleSearch
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            InitializeDatabase();
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        private void InitializeDatabase()
        {
            Database.SetInitializer(new CreateDbAndSeedDbInitializer());
            using (var dbContext = new PeopleSearchContext())
            {
                dbContext.Database.Initialize(false);
            }
        }
    }
}
