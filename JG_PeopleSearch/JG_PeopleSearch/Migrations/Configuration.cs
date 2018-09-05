namespace JG_PeopleSearch.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<Persistence.PeopleSearchContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(Persistence.PeopleSearchContext context)
        {
            //Note: Seeding in CreateDbAndSeedDbInitializer.
        }
    }
}
