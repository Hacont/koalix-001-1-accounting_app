/**
 * Created by Hacont on 22.07.2016.
 */
import { Component, OnInit } from '@angular/core';
import { Account } from './account';
import { AccountService } from './accountService';

@Component({
    selector: 'account-administration',
    templateUrl: './account-management.component.html'
})


export class AccountManagement implements OnInit {

    displayDialog: boolean;

    account: Account = new PrimeAccount();

    selectedAccount: Account;

    newAccount: boolean;

    accounts: Account[];

    constructor(private accountService: AccountService) { }

    ngOnInit() {
        this.accountService.getAccounts().subscribe(accounts => {
            this.accounts = accounts;
        });
    }

    showDialogToAdd() {
        this.newAccount = true;
        this.account = new PrimeAccount();
        this.displayDialog = true;
    }

    save() {
        if(this.newAccount)
            this.accountService.addAccount(this.account).subscribe(account => {
                this.accounts.push(account);
            })
        else
            this.accounts[this.findSelectedAccountIndex()] = this.account;

        this.account = null;
        this.displayDialog = false;
    }

    delete() {
        this.accounts.splice(this.findSelectedAccountIndex(), 1);
        this.account = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newAccount = false;
        this.account = this.cloneAccount(event.data);
        this.displayDialog = true;
    }

    cloneAccount(c: Account): Account {
        let account = new PrimeAccount();
        for(let prop in c) {
            account[prop] = c[prop];
        }
        return account;
    }

    findSelectedAccountIndex(): number {
        return this.accounts.indexOf(this.selectedAccount);
    }
}

class PrimeAccount implements Account {

    constructor(public id?, public accountNumber?, public accountName?) {}
}
