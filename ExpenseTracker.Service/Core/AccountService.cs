using ExpenseTracker.Data;
using ExpenseTracker.Data.Models;
using ExpenseTracker.Service.Dto;
using ExpenseTracker.Service.Interface;

namespace ExpenseTracker.Service.Core
{
    public class AccountService : IAccountService
    {
        private readonly ExpenseTrackerDbContext _context;
        public AccountService(ExpenseTrackerDbContext context)
        {
            _context = context;
        }

        public AccountDto CreateAccount(AccountDto createdAccount)
        {
            Account newAccount = new Account()
            {
                AccountName = createdAccount.AccountName
            };
            _context.Add(newAccount);
            _context.SaveChanges();
            createdAccount.AccountId = newAccount.AccountId;
            return createdAccount;
        }

        public bool DeleteAccount(int deleteCategoryId)
        {
            bool successful = false;
            Account accountToRemove = _context.Accounts.FirstOrDefault(a => a.AccountId == deleteCategoryId);
            _context.Remove(accountToRemove);
            _context.SaveChanges();
            successful = true;
            return successful;
        }

        public List<AccountDto> GetAccounts()
        {
            return (from a in _context.Accounts
                    select new AccountDto
                    {
                        AccountId = a.AccountId,
                        AccountName = a.AccountName
                    }).OrderBy(a => a.AccountName).ToList();
        }

        public AccountDto UpdateAccount(AccountDto updatedAccount)
        {
            if(updatedAccount != null){
                Account currentAccount = _context.Accounts.FirstOrDefault(a => a.AccountId == updatedAccount.AccountId);
                currentAccount.AccountName = updatedAccount.AccountName;
                _context.SaveChanges();
            }
            return updatedAccount;
        }
    }
}