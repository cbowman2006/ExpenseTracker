using ExpenseTracker.Service.Dto;
using ExpenseTracker.Service.Interface;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseTracker.Web.Controllers.Api
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly ILogger<AccountController> _logger;
        private readonly IAccountService _accountService;

        public AccountController(ILogger<AccountController> logger, IAccountService accountService)
        {
            _logger = logger;
            _accountService = accountService;
        }

        [HttpGet("all")]
        public IActionResult GetAccounts()
        {
            try
            {
                return Ok(_accountService.GetAccounts());

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"GetAccounts failed");
                return StatusCode(500, $"GetAccounts failed");
            }
        }

        [HttpPost("create")]
        public IActionResult CreateAccount([FromBody] AccountDto account)
        {
            try
            {
                return Ok(_accountService.CreateAccount(account));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"CreateAccount failed");
                return StatusCode(500, $"CreateAccount failed");
            }

        }

        [HttpPost("update")]
        public IActionResult UpdateAccount([FromBody] AccountDto account)
        {
            try
            {
                return Ok(_accountService.UpdateAccount(account));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"UpdateAccount failed");
                return StatusCode(500, $"UpdateAccount failed");
            }

        }

        [HttpPost("delete")]
        public IActionResult DeleteAccount([FromBody] AccountDto account)
        {
            try
            {
                return Ok(_accountService.DeleteAccount(account.AccountId));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"DeleteAccount failed");
                return StatusCode(500, $"DeleteAccount failed");
            }

        }
    }
}