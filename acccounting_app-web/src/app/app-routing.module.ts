import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrisisListComponent }  from './crisis-list.component';
import { HeroListComponent }    from './hero-list.component';
import { AccountManagementComponent }    from './account_management/account-management.component';
import {BalanceComponent} from "./balance/balance.component";
import {AccountingComponent} from "./accounting/accounting.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'accounting', component: AccountingComponent },
            { path: 'balance', component: BalanceComponent },
            { path: 'account-management', component: AccountManagementComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}