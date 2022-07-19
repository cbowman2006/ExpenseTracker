import { Account } from './../../types/account';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  action: string;
  account: any;
  constructor(
    public readonly dialogRef: MatDialogRef<AccountEditComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Account
  ) {
    this.account = { ...data };
    this.action = this.account.action;
  }

  ngOnInit() {}

  isFormVaild(): boolean {
    return (
      this.account.accountName == null ||
      this.account.accountName == '' ||
      this.account.accountName == undefined
    );
  }

  doAction() {
    delete this.account.action;
    this.dialogRef.close({ event: this.action, data: this.account });
  }

}
