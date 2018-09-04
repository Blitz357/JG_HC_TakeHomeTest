using System;
using System.Drawing;
using System.IO;
using JG_PeopleSearch.Models;

namespace JG_PeopleSearch.Seed
{
    public class SeedData
    {
        public Person[] GetAllSeedPeople()
        {
            return new[]
            {
                FDR(1),
                Abe(2),
                Ronnie(3),
                George(4),
                JFK(5),
                JAdams(6),
                Teddy(7)
            };
        }

        private static Person FDR(int id)
        {
            return new Person
            {
                Id = id,
                FirstName = "Franklin",
                LastName = "Roosevelt",
                DateOfBirth = new DateTime(1882, 1, 30),
                Interests = "Sky diving, Running, Chess",
                PersonAddress = new PersonAddress
                {
                    Id = id,
                    Address1 = "203 NW Bond St",
                    Address2 = "",
                    City = "Hyde Park",
                    State = "NY",
                    ZipCode = "77874"
                },
                PersonImage = new PersonImage
                {
                    Id = id,
                    Image = GetImageBytes(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Seed\\Images\\FDR.jpg"))
                }
            };
        }

        private static Person Abe(int id)
        {
            return new Person
            {
                Id = id,
                FirstName = "Abraham",
                LastName = "Lincoln",
                DateOfBirth = new DateTime(1809, 2, 12),
                Interests = "Wrestling, Basketball",
                PersonAddress = new PersonAddress
                {
                    Id = id,
                    Address1 = "2665 NE Front St",
                    Address2 = "Appt 54",
                    City = "Hodgenville",
                    State = "KY",
                    ZipCode = "47156"
                },
                PersonImage = new PersonImage
                {
                    Id = id,
                    Image = GetImageBytes(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Seed\\Images\\HonestAbe.jpg"))
                }
            };
        }

        private static Person George(int id)
        {
            return new Person
            {
                Id = id,
                FirstName = "George",
                LastName = "Washington",
                DateOfBirth = new DateTime(1754, 4, 23),
                Interests = "Pickleball, Badminton, Volleyball",
                PersonAddress = new PersonAddress
                {
                    Id = id,
                    Address1 = "344 W Newport Ave",
                    Address2 = "",
                    City = "Westmoreland County",
                    State = "VA",
                    ZipCode = "87147"
                },
                PersonImage = new PersonImage
                {
                    Id = id,
                    Image = GetImageBytes(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Seed\\Images\\George.jpg"))
                }
            };
        }

        private static Person Ronnie(int id)
        {
            return new Person
            {
                Id = id,
                FirstName = "Ronald",
                LastName = "Regan",
                DateOfBirth = new DateTime(1911, 2, 6),
                Interests = "Acting, Standup Paddle Boarding, Fishing, Horseback Riding, Drag Racing",
                PersonAddress = new PersonAddress
                {
                    Id = id,
                    Address1 = "20971 NE Broadway Ave",
                    Address2 = "",
                    City = "Tampico",
                    State = "IL",
                    ZipCode = "97547"
                },
                PersonImage = new PersonImage
                {
                    Id = id,
                    Image = GetImageBytes(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Seed\\Images\\Ronnie.jpg"))
                }
            };
        }

        private static Person JFK(int id)
        {
            return new Person
            {
                Id = id,
                FirstName = "John",
                LastName = "Kennedy",
                DateOfBirth = new DateTime(1917, 5, 29),
                Interests = "Soccer, Welding, Social Media",
                PersonAddress = new PersonAddress
                {
                    Id = id,
                    Address1 = "7853 NW Grassy Knoll St",
                    Address2 = "Suite 3400",
                    City = "Brookline",
                    State = "MA",
                    ZipCode = "13458"
                },
                PersonImage = new PersonImage
                {
                    Id = id,
                    Image = GetImageBytes(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Seed\\Images\\jfk.jpg"))
                }
            };
        }

        private static Person JAdams(int id)
        {
            return new Person
            {
                Id = id,
                FirstName = "John",
                LastName = "Adams",
                DateOfBirth = new DateTime(1755, 9, 5),
                Interests = "Skeet, Traveling, Wood-working",
                PersonAddress = new PersonAddress
                {
                    Id = id,
                    Address1 = "7853 NW Division Blvd",
                    Address2 = "",
                    City = "Braintree",
                    State = "MA",
                    ZipCode = "88574"
                },
                PersonImage = new PersonImage
                {
                    Id = id,
                    Image = GetImageBytes(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Seed\\Images\\JAdams.jpg"))
                }
            };
        }

        private static Person Teddy(int id)
        {
            return new Person
            {
                Id = id,
                FirstName = "Theodore",
                LastName = "Roosevelt",
                DateOfBirth = new DateTime(1858, 10, 27),
                Interests = "Horse-back Riding, Shooting, Public Speaking",
                PersonAddress = new PersonAddress
                {
                    Id = id,
                    Address1 = "7853 NW Rough Rider Way",
                    Address2 = "",
                    City = "New York City",
                    State = "NY",
                    ZipCode = "97441"
                },
                PersonImage = new PersonImage
                {
                    Id = id,
                    Image = GetImageBytes(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Seed\\Images\\teddy.jpg"))
                }
            };
        }

        private static byte[] GetImageBytes(string path)
        {
            byte[] bytes;

            using (var img = Image.FromFile(path))
            using (var ms = new MemoryStream())
            {
                img.Save(ms, System.Drawing.Imaging.ImageFormat.Jpeg);
                bytes = ms.ToArray();
            }

            return bytes;
        }
    }
}