using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using JG_PeopleSearch.Models;
using JG_PeopleSearch.Persistence;
using Moq;
using NUnit.Framework;

namespace JG_PeopleSearch.Tests.Persistence
{
    [TestFixture]
    public class PersonRepositoryTests
    {
        private List<Person> _personList;
        private Mock<DbSet<Person>> _dbSetupMock;
        private Mock<PeopleSearchContext> _contextMock;
        private PersonRepository _personRepository;

        [SetUp]
        public void TestSetup()
        {
            _personList = CreatePersonTestList();
            _dbSetupMock = DbSetMocker.GetQueryableMockDbSet(_personList);
            _contextMock = new Mock<PeopleSearchContext>();
            _contextMock.Setup(c => c.People).Returns(_dbSetupMock.Object);
            _personRepository = new PersonRepository(_contextMock.Object);
        }

        [Test]
        public void FindPersonFilterByEmptyString()
        {
            var results = _personRepository.GetPeopleFilteredBy(string.Empty).ToList();

            Assert.That(results, Is.EquivalentTo(_personList));
        }

        [Test]
        public void FindPersonFilterByNull()
        {
            var results = _personRepository.GetPeopleFilteredBy(null).ToList();

            Assert.That(results, Is.EquivalentTo(_personList));
        }

        [Test]
        public void FindPersonNoMatchFilter()
        {
            var results = _personRepository.GetPeopleFilteredBy(Any.String()).ToList();

            Assert.That(results.Count, Is.EqualTo(0));
        }

        [Test]
        public void FindPersonByFirstName()
        {
            var results = _personRepository.GetPeopleFilteredBy("Walter").ToList();

            Assert.That(results, Is.EquivalentTo(new[] { _personList[1] }));
        }

        [Test]
        public void FindPersonByLastName()
        {
            var results = _personRepository.GetPeopleFilteredBy("Lebowski").ToList();

            Assert.That(results, Is.EquivalentTo(new []{ _personList[3], _personList[6] }));
        }

        [Test]
        public void FindPersonFilterAppearsInFirstAndLastName()
        {
            var results = _personRepository.GetPeopleFilteredBy("Mark").ToList();

            Assert.That(results, Is.EquivalentTo(new[] { _personList[5] }));
        }

        [Test]
        public void FindPersonFilterSpansFirstLastName()
        {
            var results = _personRepository.GetPeopleFilteredBy("The Dude").ToList();

            Assert.That(results, Is.EquivalentTo(new[] { _personList[0] }));
        }

        [Test]
        public void FindPersonCaseInsensitive()
        {
            var results = _personRepository.GetPeopleFilteredBy("dOnNy").ToList();

            Assert.That(results, Is.EquivalentTo(new[] { _personList[2] }));
        }

        private static List<Person> CreatePersonTestList()
        {
            return new List<Person>
            {
                new Person {FirstName = "The", LastName = "Dude"},          //0
                new Person {FirstName = "Walter", LastName = "Sobchak"},    //1
                new Person {FirstName = "Donny", LastName = "Kerabatsos"},  //2
                new Person {FirstName = "Maude", LastName = "Lebowski"},    //3
                new Person {FirstName = "Jackie", LastName = "Treehorn"},   //4
                new Person {FirstName = "Marky", LastName = "Mark"},        //5
                new Person {FirstName = "Jeffery", LastName = "Lebowski"},  //6
                new Person {FirstName = "The", LastName = "Rock"},          //7
            };
        }
    }
}