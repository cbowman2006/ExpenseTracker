import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';


@NgModule({
  declarations: [CategoryComponent,CategoryEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path:'', component: CategoryComponent}
    ])
  ]
  
})
export class CategoryModule { }
