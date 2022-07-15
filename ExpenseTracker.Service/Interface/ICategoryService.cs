using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExpenseTracker.Service.Dto;

namespace ExpenseTracker.Service.Interface
{   
    public interface ICategoryService
    {
        public List<CategoryDto> GetCategories();
        public CategoryDto CreateCategory(CategoryDto createdCategory);
        public CategoryDto UpdateCategory(CategoryDto updatedCategory);
        public bool DeleteCategory(int deleteCategoryId);       
    }
}