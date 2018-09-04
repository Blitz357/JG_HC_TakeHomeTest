using System;

namespace JG_PeopleSearch.Tests
{
    internal static class Any
    {
        private static readonly Random Random = new Random();

        public static bool BooleanValue()
        {
            return Random.Next(2) == 1;
        }

        public static int PositiveIntTo(int exclusiveMax)
        {
            return Random.Next(1, exclusiveMax);
        }

        public static string String()
        {
            return Guid.NewGuid().ToString("N");
        }
    }
}