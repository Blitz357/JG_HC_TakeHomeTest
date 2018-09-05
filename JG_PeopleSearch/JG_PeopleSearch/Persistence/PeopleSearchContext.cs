using JG_PeopleSearch.Models;

namespace JG_PeopleSearch.Persistence
{
    using System.Data.Entity;

    public class PeopleSearchContext : DbContext
    {
        public PeopleSearchContext() : base("name=PeopleSearchContext")
        {
        }

        public virtual DbSet<Person> People { get; set; }
        public virtual DbSet<PersonImage> PeopleImages { get; set; }
        public virtual DbSet<PersonAddress> PeopleAddresses { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
             //Define one to (zero or one) relationships
            modelBuilder.Entity<Person>()
                .HasOptional(p => p.PersonImage)
                .WithRequired(pi => pi.Person);

            modelBuilder.Entity<Person>()
                .HasOptional(p => p.PersonAddress)
                .WithRequired(pa => pa.Person);
        }
    }
}