using System.Data.Entity;
using System.Data.Entity.Migrations;
using JG_PeopleSearch.Seed;

namespace JG_PeopleSearch.Persistence
{
    public class CreateDbAndSeedDbInitializer : CreateDatabaseIfNotExists<PeopleSearchContext>
    {
        protected override void Seed(PeopleSearchContext context)
        {
            context.People.AddOrUpdate(p => p.Id, new SeedData().GetAllSeedPeople());
            context.SaveChanges();
        }
    }
}