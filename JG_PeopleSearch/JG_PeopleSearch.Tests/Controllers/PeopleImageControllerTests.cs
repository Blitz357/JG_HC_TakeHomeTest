using System;
using JG_PeopleSearch.Controllers;
using JG_PeopleSearch.Models;
using JG_PeopleSearch.Persistence;
using Moq;
using NUnit.Framework;

namespace JG_PeopleSearch.Tests.Controllers
{
    [TestFixture]
    public class PeopleImageControllerTests
    {
        private Mock<IUnitOfWork> _unitOfWorkMock;
        private PeopleImageController _controller;
        private Mock<IPersonImageRepository> _peopleImageRepositoryMock;

        [SetUp]
        public void TestSetup()
        {
            _peopleImageRepositoryMock = new Mock<IPersonImageRepository>();
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _unitOfWorkMock.Setup(u => u.PeopleImages).Returns(_peopleImageRepositoryMock.Object);
            _controller = new PeopleImageController(_unitOfWorkMock.Object);
        }

        [Test]
        public void ControllerDisposesUnitOfWork()
        {
            _controller.Dispose();

            _unitOfWorkMock.Verify(u => u.Dispose(), Times.Once);
        }

        [Test]
        public void GetWithIdGetsPersonWithThatId()
        {
            var id = Any.PositiveIntTo(100);
            var bytes = new byte[0];
            var personImage = new PersonImage { Image = bytes };
            _peopleImageRepositoryMock.Setup(p => p.Get(id)).Returns(personImage);

            var actual = _controller.Get(id);

            Assert.That(actual, Is.EqualTo("data:image/jpeg;base64," + Convert.ToBase64String(bytes)));
        }
    }
}