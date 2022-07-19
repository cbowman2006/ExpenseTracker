using ExpenseTracker.Data;
using ExpenseTracker.Service.Dto;
using ExpenseTracker.Service.Interface;

namespace ExpenseTracker.Service.Core
{
    public class AccountService:IAccountService
    {
        private readonly ExpenseTrackerDbContext _context;
        public AccountService(ExpenseTrackerDbContext context)
        {
            _context = context;
        }

        public AccountDto CreateAccount(AccountDto createdAccount)
        {
            throw new NotImplementedException();
        }

        public bool DeleteAccount(int deleteCategoryId)
        {
            throw new NotImplementedException();
        }

        public List<AccountDto> GetAccounts()
        {
            throw new NotImplementedException();
        }

        public AccountDto UpdateAccount(AccountDto updatedAccount)
        {
            throw new NotImplementedException();
        }
    }
}