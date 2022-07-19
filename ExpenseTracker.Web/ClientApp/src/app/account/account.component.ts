import { AccountEditComponent } from './account-edit/account-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from './../services/account.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Account } from '../types/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['name', 'action'];
  public accounts = new MatTableDataSource<Account>();
  public account: Account = new Account();
  public isLoading: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private accountService: AccountService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAccounts();
  }

  ngAfterViewInit() {
    this.accounts.paginator = this.paginator;
  }

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(AccountEditComponent, {
      width: '650px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((results) => {
      if (results.event == 'Create') {
        this.createAccount(results.data);
      } else if (results.evennt == 'Update') {
        this.updateAccount(results.data);
      } else if (results.event == 'Delete') {
        this.deleteAccount(results.data);
      }
    });
  }

  getAccounts() {
    this.isLoading = true;
    this.accountService.getAccounts().subscribe((accounts) => {
        if (accounts) {
          this.accounts.data = accounts;
        }
      })
      .add(() => {this.isLoading = false;});
  }

  createAccount(newAccount: Account) {
    this.accountService.createAccount(newAccount).subscribe((response) => {
      if (response) {
        this.getAccounts();
      }
    });
  }

  updateAccount(updateAccount: Account) {
    this.accountService.UpdateAccount(updateAccount).subscribe((response) => {
      if (response) {
        this.getAccounts();
      }
    });
  }

  deleteAccount(deletedAccount: Account) {
    this.accountService.deleteAccount(deletedAccount).subscribe((response) => {
      if (response) {
        this.getAccounts();
      }
    });
  }
}
