using ExpenseTracker.Data;
using ExpenseTracker.Data.Models;
using ExpenseTracker.Service.Dto;
using ExpenseTracker.Service.Interface;

namespace ExpenseTracker.Service.Core
{
public class CategoryService : ICategoryService
{
    private readonly ExpenseTrackerDbContext _context;
    public CategoryService(ExpenseTrackerDbContext context)
    {
        _context = context;
        
    }
    public CategoryDto CreateCategory(CategoryDto createdCategory)
    {
        Category newCategory = new Category()
        {
            Name = createdCategory.Name
        };
        _context.Add(newCategory);
        _context.SaveChanges();
        createdCategory.CategoryId = newCategory.CategoryId;
        return createdCategory;
    }

    public bool DeleteCategory(int deleteCategoryId)
    {
        bool successful = false;
        Category categoryToRemove = _context.Categories.FirstOrDefault(c => c.CategoryId == deleteCategoryId);
        _context.Remove(categoryToRemove);
        _context.SaveChanges();
        successful = true;
        return successful;
    }

    public List<CategoryDto> GetCategories()
    {
        return (from c in _context.Categories
                select new CategoryDto
                {
                    CategoryId = c.CategoryId,
                    Name = c.Name
                }).ToList() ?? new List<CategoryDto>();
    }

    public CategoryDto UpdateCategory(CategoryDto updatedCategory)
    {
        if(updatedCategory != null){
            Category currentCategory = _context.Categories.FirstOrDefault(c => c.CategoryId == updatedCategory.CategoryId);
            currentCategory.Name = updatedCategory.Name;
            _context.SaveChanges();
        }
        return updatedCategory;
    }
}
}

