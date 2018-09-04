using JG_PeopleSearch.Seed;

namespace JG_PeopleSearch.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<Persistence.PeopleSearchContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Persistence.PeopleSearchContext context)
        {
            context.People.AddOrUpdate(p => p.Id, new SeedData().GetAllSeedPeople());
        }
    }
}
