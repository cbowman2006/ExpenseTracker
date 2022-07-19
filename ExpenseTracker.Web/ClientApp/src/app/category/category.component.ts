import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryService } from './../services/category.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../types/category';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['name', 'action'];
  public categories = new MatTableDataSource<Category>();
  public category: Category = new Category();
  public isLoading: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  ngAfterViewInit() {
    this.categories.paginator = this.paginator;
  }

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      width: '650px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((results) => {
      if (results.event == 'Create') {
        this.createCategory(results.data);
      } else if (results.event == 'Update') {
        this.updateCategory(results.data);
      } else if (results.event == 'Delete') {
        this.deleteCategory(results.data);
      }
    });
  }

  getCategories() {
    this.isLoading = true;
    this.categoryService
      .getCategories()
      .subscribe((categories) => {
        if (categories) {
          this.categories.data = categories;
        }
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  createCategory(newCategory: Category) {
    this.categoryService.createCategory(newCategory).subscribe((response) => {
      if (response) {
        this.getCategories();
      }
    });
  }

  updateCategory(updatedCategory: Category) {
    this.categoryService
      .UpdateCategory(updatedCategory)
      .subscribe((response) => {
        if (response) {
          this.getCategories();
        }
      });
  }

  deleteCategory(deletedCategory: Category) {
    this.categoryService
      .deleteCategory(deletedCategory)
      .subscribe((response) => {
        if (response) {
          this.getCategories();
        }
      });
  }
}
