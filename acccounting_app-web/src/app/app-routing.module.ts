import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrisisListComponent }  from './crisis-list.component';
import { HeroListComponent }    from './hero-list.component';
import { AccountManagement } from './account_management/account-management.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'account-management', component: AccountManagement },
            { path: 'test1', component: AccountManagement },
            { path: 'test2', component: AccountManagement }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}