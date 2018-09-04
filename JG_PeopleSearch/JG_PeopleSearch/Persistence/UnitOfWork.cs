using System.Data.Entity;

namespace JG_PeopleSearch.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbContext _context;

        public UnitOfWork() : this(new PeopleSearchContext())
        {
        }

        internal UnitOfWork(PeopleSearchContext context) : this(context, new PersonRepository(context), new PersonImageRepository(context))
        {
        }

        internal UnitOfWork(DbContext context, IPersonRepository personRepository, IPersonImageRepository personImageRepository)
        {
            _context = context;
            People = personRepository;
            PeopleImages = personImageRepository;
        }

        public IPersonRepository People { get; }
        public IPersonImageRepository PeopleImages { get; }

        public void Dispose()
        {
            _context.Dispose();
        }

        public int Complete()
        {
            return _context.SaveChanges();
        }
    }
}