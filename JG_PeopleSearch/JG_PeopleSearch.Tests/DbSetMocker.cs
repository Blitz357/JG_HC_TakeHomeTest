using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Moq;

namespace JG_PeopleSearch.Tests
{
    internal class DbSetMocker
    {
        public static Mock<DbSet<T>> GetQueryableMockDbSet<T>(IEnumerable<T> sourceList) where T : class
        {
            var queryableList = sourceList.AsQueryable();

            var dbSetMock = new Mock<DbSet<T>>();
            var queryableMock = dbSetMock.As<IQueryable<T>>();
            queryableMock.Setup(m => m.Provider).Returns(queryableList.Provider);
            queryableMock.Setup(m => m.Expression).Returns(queryableList.Expression);
            queryableMock.Setup(m => m.ElementType).Returns(queryableList.ElementType);
            queryableMock.Setup(m => m.GetEnumerator()).Returns(() => queryableList.GetEnumerator());

            return dbSetMock;
        }
    }
}