using ExpenseTracker.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace ExpenseTracker.Data
{
    public class ExpenseTrackerDbContext : DbContext
    {
        public ExpenseTrackerDbContext(DbContextOptions<ExpenseTrackerDbContext> options) : base(options) {}
        public ExpenseTrackerDbContext() : base() {}
        public DbSet<Category> Categories {get;set;}
        public DbSet<Account> Accounts {get;set;}


    }

}

