namespace JG_PeopleSearch.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class AddDOBAndInterestsToPerson : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.People", "DateOfBirth", c => c.DateTime(nullable: false));
            AddColumn("dbo.People", "Interests", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.People", "Interests");
            DropColumn("dbo.People", "DateOfBirth");
        }
    }
}
