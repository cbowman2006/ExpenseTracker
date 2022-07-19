using ExpenseTracker.Service.Dto;

namespace ExpenseTracker.Service.Interface
{
    public interface IAccountService
    {
        public List<AccountDto> GetAccounts();
        public AccountDto CreateAccount(AccountDto createdAccount);
        public AccountDto UpdateAccount(AccountDto updatedAccount);
        public bool DeleteAccount(int deleteCategoryId);
    }
}