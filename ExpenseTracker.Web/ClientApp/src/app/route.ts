import { CategoryComponent } from './category/category.component';
import { ExpenseComponent } from './expense/expense.component';
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'category', component: CategoryComponent, loadChildren: () => import('./category/category.module').then(m=> m.CategoryModule)},
    {path: 'expense', component: ExpenseComponent},
    {path:'**', redirectTo:'/'}

];