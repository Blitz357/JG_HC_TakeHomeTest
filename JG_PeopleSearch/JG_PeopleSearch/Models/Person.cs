using System;

namespace JG_PeopleSearch.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Interests { get; set; }

        public virtual PersonAddress PersonAddress { get; set; }
        public PersonImage PersonImage { get; set; }
    }

    public static class PersonExtensions
    {
        public static void UpdateDataFrom(this Person target, Person source)
        {
            target.FirstName = source.FirstName;
            target.LastName = source.LastName;
            target.DateOfBirth = source.DateOfBirth;
            target.Interests = source.Interests;
            target.PersonAddress = source.PersonAddress;
            target.PersonImage = target.PersonImage;
        }

        public static bool IsEquivalentTo(this Person curent, Person compared)
        {
            return curent.Id == compared.Id &&
                   curent.FirstName == compared.FirstName &&
                   curent.LastName == compared.LastName &&
                   curent.Interests == compared.Interests &&
                   curent.DateOfBirth == compared.DateOfBirth;

        }
    }
}