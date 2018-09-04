using System.Collections.Generic;
using JG_PeopleSearch.Models;

namespace JG_PeopleSearch.Persistence
{
    public interface IPersonRepository : IRepository<Person>
    {
        IEnumerable<Person> GetPeopleFilteredBy(string filter);
    }
}