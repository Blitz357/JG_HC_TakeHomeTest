using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using JG_PeopleSearch.Persistence;
using Moq;
using NUnit.Framework;

namespace JG_PeopleSearch.Tests.Persistence
{
    [TestFixture]
    public class RepositoryTests
    {
        private Mock<DbContext> _contextMock;
        private Repository<TestEntity> _repository;
        private Mock<DbSet<TestEntity>> _dbSetMock;
        private List<TestEntity> _testEntities;

        [SetUp]
        public void TestSetup()
        {
            _testEntities = new List<TestEntity>();
            _dbSetMock = DbSetMocker.GetQueryableMockDbSet(_testEntities);
            _contextMock = new Mock<DbContext>();
            _contextMock.Setup(c => c.Set<TestEntity>()).Returns(_dbSetMock.Object);
            _repository = new Repository<TestEntity>(_contextMock.Object);
        }

        [Test]
        public void GetByIdReturnsEntityFoundInDbSet()
        {
            var id = Any.PositiveIntTo(100);
            var expected = new TestEntity();
            _dbSetMock.Setup(s => s.Find(id)).Returns(expected);

            var actual = _repository.Get(id);

            Assert.That(actual, Is.SameAs(expected));
        }
        
        [Test]
        public void GetAllReturnsAllDbSetEntities()
        {
            var expected = new []{new TestEntity(), new TestEntity(), new TestEntity()};
            _testEntities.AddRange(expected);

            var actual = _repository.GetAll();

            Assert.That(actual, Is.EquivalentTo(expected));
        }

        [Test]
        public void FindSearchesThroughDbSetToFindEntry()
        {
            var id = Any.PositiveIntTo(100);
            _testEntities.AddRange(new[]
            {
                new TestEntity {Id = 101},
                new TestEntity {Id = id},
                new TestEntity {Id = 103},
            });

            var entities = _repository.Find(e => e.Id == id).ToList();

            Assert.That(entities.Count, Is.EqualTo(1));
            Assert.That(entities[0], Is.SameAs(_testEntities[1]));
        }

        [Test]
        public void AddEntryAddsEntryToDbSet()
        {
            var testEntity = new TestEntity();

            _repository.Add(testEntity);

            _dbSetMock.Verify(s => s.Add(testEntity), Times.Once);
        }

        [Test]
        public void RemoveEntryRemovesEntryFromDbSet()
        {
            var toRemove = new TestEntity();

            _repository.Remove(toRemove);

            _dbSetMock.Verify(s => s.Remove(toRemove), Times.Once);
        }
    }

    internal class TestEntity
    {
        public int Id { get; set; }
    }
}
