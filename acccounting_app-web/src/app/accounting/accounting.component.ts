/**
 * Created by Hacont on 22.07.2016.
 */
import { Component, OnInit } from '@angular/core';
import { AccountingEntry } from './accounting-entry';
import { AccountingEntryService } from './accounting-entry-service';
import { Account } from '../account_management/account';
import { AccountService } from '../account_management/account-service';



@Component({
    selector: 'accounting',
    templateUrl: './accounting.component.html'
})

export class AccountingComponent implements OnInit {
    displayDialog: boolean;

    accountingEntry: AccountingEntry = new PrimeAccountingEntry();

    selectedAccountingEntry: AccountingEntry;

    newAccountingEntry: boolean;

    accountingEntries: AccountingEntry[];

    accounts: Account[];

    filteredAccounts: Account[];

    constructor(private accountingEntryService: AccountingEntryService, private accountService: AccountService) { }

    ngOnInit() {
        this.accountingEntryService.getAccountingEntries().subscribe(accountingEntries => {
            this.accountingEntries = accountingEntries;
        });
        this.accountService.getAccounts().subscribe(accounts => {
            this.accounts = accounts;
        });
    }

    showDialogToAdd() {
        this.newAccountingEntry = true;
        this.accountingEntry = new PrimeAccountingEntry();
        this.displayDialog = true;
    }

    save() {
        if (this.newAccountingEntry) {
            this.accountingEntryService.addAccountingEntry(this.accountingEntry).subscribe(accountingEntry => {
                this.accountingEntries.push(accountingEntry);
            });
        } else {
            this.accountingEntries[this.findSelectedAccountingEntryIndex()] = this.accountingEntry;
        }

        this.accountingEntry = null;
        this.displayDialog = false;
    }

    delete() {
        this.accountingEntries.splice(this.findSelectedAccountingEntryIndex(), 1);
        this.accountingEntry = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newAccountingEntry = false;
        this.accountingEntry = this.cloneAccountingEntry(event.data);
        this.displayDialog = true;
    }

    cloneAccountingEntry(c: AccountingEntry): AccountingEntry {
        let accountingEntry = new PrimeAccountingEntry();
        for (let prop in c) {
            accountingEntry[prop] = c[prop];
        }
        return accountingEntry;
    }

    findSelectedAccountingEntryIndex(): number {
        return this.accountingEntries.indexOf(this.selectedAccountingEntry);
    }

    filterAccounts(event) {
        this.filteredAccounts = [];
        for (let i = 0; i < this.accounts.length; i++) {
            let account = this.accounts[i];
            if (account.accountNumber.indexOf(event.query) === 0) {
                this.filteredAccounts.push(account);
            }
        }
    }

    handleDropdownClick() {
        this.filteredAccounts = [];

        // mimic remote call
        setTimeout(() => {
            this.filteredAccounts = this.accounts;
        }, 100);
    }
}

class PrimeAccountingEntry implements AccountingEntry {

    constructor(public id?,
                public voucher?,
                public clearingDate?,
                public description?,
                public debit?,
                public credit?,
                public amount?) {
    }
}




