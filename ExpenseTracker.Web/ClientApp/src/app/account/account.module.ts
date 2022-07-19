import { AccountEditComponent } from './account-edit/account-edit.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path:'', component: AccountComponent}
    ])
  ],
  declarations: [AccountComponent, AccountEditComponent]
})
export class AccountModule { }
