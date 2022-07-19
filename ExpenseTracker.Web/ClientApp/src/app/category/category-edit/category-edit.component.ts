import { Category } from './../../types/category';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
})
export class CategoryEditComponent implements OnInit {
  action: string;
  category: any;
  constructor(
    public readonly dialogRef: MatDialogRef<CategoryEditComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Category
  ) {
    this.category = { ...data };
    this.action = this.category.action;
  }

  ngOnInit() {}

  isFormVaild(): boolean {
    return (
      this.category.name == null ||
      this.category.name == '' ||
      this.category.name == undefined
    );
  }

  doAction() {
    delete this.category.action;
    this.dialogRef.close({ event: this.action, data: this.category });
  }
}
