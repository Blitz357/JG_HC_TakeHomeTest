using System.Data.Entity;
using JG_PeopleSearch.Models;

namespace JG_PeopleSearch.Persistence
{
    public class PersonImageRepository : Repository<PersonImage>, IPersonImageRepository
    {
        public PersonImageRepository(DbContext context) : base(context)
        {
        }
    }
}