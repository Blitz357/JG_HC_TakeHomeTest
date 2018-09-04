using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using JG_PeopleSearch.Controllers;

namespace JG_PeopleSearch.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual("People Search Test App", result.ViewBag.Title);
        }
    }
}
