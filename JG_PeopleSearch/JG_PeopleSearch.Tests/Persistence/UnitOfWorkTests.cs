using JG_PeopleSearch.Persistence;
using Moq;
using NUnit.Framework;

namespace JG_PeopleSearch.Tests.Persistence
{
    [TestFixture]
    public class UnitOfWorkTests
    {
        private Mock<PeopleSearchContext> _contextMock;
        private Mock<IPersonRepository> _personRepositoryMock;
        private Mock<IPersonImageRepository> _personImageRepositoryMock;
        private UnitOfWork _unitOfWork;

        [SetUp]
        public void TestSetup()
        {
            _contextMock = new Mock<PeopleSearchContext>();
            _personRepositoryMock = new Mock<IPersonRepository>();
            _personImageRepositoryMock = new Mock<IPersonImageRepository>();
            _unitOfWork = new UnitOfWork(_contextMock.Object, _personRepositoryMock.Object, _personImageRepositoryMock.Object);
        }

        [Test]
        public void PeopleReturnsPersonRepository()
        {
            Assert.That(_unitOfWork.People, Is.SameAs(_personRepositoryMock.Object));
        }

        [Test]
        public void PeopleImageseReturnsPersonImageRepository()
        {
            Assert.That(_unitOfWork.PeopleImages, Is.SameAs(_personImageRepositoryMock.Object));
        }

        [Test]
        public void CompleteSavesChangesOnContext()
        {
            _unitOfWork.Complete();

            _contextMock.Verify(c => c.SaveChanges(), Times.Once);
        }
    }
}
