using System.Collections.Generic;
using System.Linq;
using JG_PeopleSearch.Models;

namespace JG_PeopleSearch.Persistence
{
    public class PersonRepository : Repository<Person>, IPersonRepository
    {
        private readonly PeopleSearchContext _peopleSearchContext;

        public PersonRepository(PeopleSearchContext context) : base(context)
        {
            _peopleSearchContext = context;
        }

        public IEnumerable<Person> GetPeopleFilteredBy(string filter)
        {
            var search = filter?.ToLower() ?? string.Empty;
            return _peopleSearchContext.People.
                Where(p => (p.FirstName + " " + p.LastName).ToLower().Contains(search))
                .ToList();
        }
    }
}