using System;

namespace JG_PeopleSearch.Persistence
{
    public interface IUnitOfWork : IDisposable
    {
        IPersonRepository People { get; }
        IPersonImageRepository PeopleImages { get; }
        int Complete();
    }
}