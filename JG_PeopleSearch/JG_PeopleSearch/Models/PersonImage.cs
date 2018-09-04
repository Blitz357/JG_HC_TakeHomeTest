namespace JG_PeopleSearch.Models
{
    public class PersonImage
    {
        public int Id { get; set; }
        public byte[] Image { get; set; }

        public virtual Person Person { get; set; }
    }
}