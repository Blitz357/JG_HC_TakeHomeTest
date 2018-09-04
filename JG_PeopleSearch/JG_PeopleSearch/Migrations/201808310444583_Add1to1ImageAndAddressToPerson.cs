namespace JG_PeopleSearch.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class Add1to1ImageAndAddressToPerson : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.PersonAddresses",
                c => new
                    {
                        Id = c.Int(nullable: false),
                        Address1 = c.String(),
                        Address2 = c.String(),
                        City = c.String(),
                        State = c.String(),
                        ZipCode = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.People", t => t.Id)
                .Index(t => t.Id);
            
            CreateTable(
                "dbo.PersonImages",
                c => new
                    {
                        Id = c.Int(nullable: false),
                        Image = c.Binary(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.People", t => t.Id)
                .Index(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PersonImages", "Id", "dbo.People");
            DropForeignKey("dbo.PersonAddresses", "Id", "dbo.People");
            DropIndex("dbo.PersonImages", new[] { "Id" });
            DropIndex("dbo.PersonAddresses", new[] { "Id" });
            DropTable("dbo.PersonImages");
            DropTable("dbo.PersonAddresses");
        }
    }
}
