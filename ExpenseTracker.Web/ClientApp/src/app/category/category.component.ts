import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../types/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'action'];
  public categories = new Array<Category>();
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(response => console.log(response))
  }

}
