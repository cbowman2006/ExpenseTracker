using ExpenseTracker.Service.Dto;
using ExpenseTracker.Service.Interface;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseTracker.Web.Controllers.Api
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private readonly ILogger<CategoryController> _logger;
        private readonly ICategoryService _categoryService;

        public CategoryController(ILogger<CategoryController> logger, ICategoryService categoryService)
        {
            _logger = logger;
            _categoryService = categoryService;
        }

        [HttpGet("all")]
        public IActionResult GetCategories()
        {
            try
            {
                return Ok(_categoryService.GetCategories());

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"GetCategories failed");
                return StatusCode(500, $"GetCategories failed");
            }
        }

        [HttpPost("create")]
        public IActionResult CreateCategory([FromBody] CategoryDto category)
        {
            try
            {
                return Ok(_categoryService.CreateCategory(category));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"CreateCategories failed");
                return StatusCode(500, $"CreateCategories failed");
            }

        }

        [HttpPost("update")]
        public IActionResult UpdateCategory([FromBody] CategoryDto category)
        {
            try
            {
                return Ok(_categoryService.UpdateCategory(category));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"UpdateCategories failed");
                return StatusCode(500, $"UpdateCategories failed");
            }

        }

        [HttpPost("delete")]
        public IActionResult DeleteCategory([FromBody] CategoryDto category)
        {
            try
            {
                return Ok(_categoryService.DeleteCategory(category.CategoryId));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"DeleteCategories failed");
                return StatusCode(500, $"DeleteCategories failed");
            }

        }
    }
}