using System.Web.Mvc;

namespace JG_PeopleSearch.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "People Search Test App";

            return View();
        }
    }
}
