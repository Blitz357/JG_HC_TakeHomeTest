using System.Collections.Generic;
using JG_PeopleSearch.Controllers;
using JG_PeopleSearch.Models;
using JG_PeopleSearch.Persistence;
using Moq;
using NUnit.Framework;

namespace JG_PeopleSearch.Tests.Controllers
{
    [TestFixture]
    public class PeopleControllerTests
    {
        private Mock<IUnitOfWork> _unitOfWorkMock;
        private PeopleController _controller;
        private Mock<IPersonRepository> _peopleRepositoryMock;

        [SetUp]
        public void TestSetup()
        {
            _peopleRepositoryMock = new Mock<IPersonRepository>();
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _unitOfWorkMock.Setup(u => u.People).Returns(_peopleRepositoryMock.Object);
            _controller = new PeopleController(_unitOfWorkMock.Object);
        }

        [Test]
        public void ControllerDisposesUnitOfWork()
        {
            _controller.Dispose();

            _unitOfWorkMock.Verify(u => u.Dispose(), Times.Once);
        }

        [Test]
        public void GetNoParmsGetsAllPeople()
        {
            var expected = new List<Person>();
            _peopleRepositoryMock.Setup(p => p.GetAll()).Returns(expected);

            var actual = _controller.Get();

            Assert.That(actual, Is.SameAs(expected));
        }

        [Test]
        public void GetWithFilterByGetsPeopleFilteredBySearchTerm()
        {
            var searchTerm = Any.String();
            var expected = new List<Person>();
            _peopleRepositoryMock.Setup(p => p.GetPeopleFilteredBy(searchTerm)).Returns(expected);

            var actual = _controller.Get(searchTerm);

            Assert.That(actual, Is.SameAs(expected));
        }

        [Test]
        public void GetWithIdGetsPersonWithThatId()
        {
            var id = Any.PositiveIntTo(100);
            var expected = new Person();
            _peopleRepositoryMock.Setup(p => p.Get(id)).Returns(expected);
            
            var actual = _controller.Get(id);

            Assert.That(actual, Is.SameAs(expected));
        }

        [Test]
        public void PostAddsPerson()
        {
            var person = new Person();

            _controller.Post(person);

            _peopleRepositoryMock.Verify(r => r.Add(person), Times.Once);
        }

        [Test]
        public void PostCompletesWork()
        {
            _controller.Post(new Person());

            _unitOfWorkMock.Verify(u => u.Complete(), Times.Once);
        }

        [Test]
        public void PutFindsAndModifiesPerson()
        {
            var id = Any.PositiveIntTo(100);
            var incoming = new Person {FirstName = Any.String(), LastName = Any.String()};
            var original = new Person();
            _peopleRepositoryMock.Setup(p => p.Get(id)).Returns(original);

            _controller.Put(id, incoming);

            Assert.That(original.IsEquivalentTo(incoming));
        }

        [Test]
        public void PutCompletesWork()
        {
            var id = Any.PositiveIntTo(100);
            _peopleRepositoryMock.Setup(p => p.Get(id)).Returns(new Person());

            _controller.Put(id, new Person());

            _unitOfWorkMock.Verify(u => u.Complete(), Times.Once);
        }

        [Test]
        public void DeleteRemovesPerson()
        {
            var id = Any.PositiveIntTo(100);
            var person = new Person();
            _peopleRepositoryMock.Setup(p => p.Get(id)).Returns(person);

            _controller.Delete(id);

            _peopleRepositoryMock.Verify(r => r.Remove(person), Times.Once);
        }

        [Test]
        public void DeleteCompletesWork()
        {
            var id = Any.PositiveIntTo(100);
            _peopleRepositoryMock.Setup(p => p.Get(id)).Returns(new Person());

            _controller.Delete(id);

            _unitOfWorkMock.Verify(u => u.Complete(), Times.Once);
        }
    }
}
