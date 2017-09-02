import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RevenueComponent } from './revenue.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { CompleteImportComponent } from './import-data/complete-import-data/complete-import-data.component';
import { MatchDataComponent } from './match-data/match-data.component'
import { CompleteMatchComponent } from './match-data/complete-match-data/complete-match-data.component';

const childRouters: Routes = [
    {
        path: '',
        redirectTo: 'import-data'
    },

    {
        path:'import-data',
        component: ImportDataComponent
    },

    {
        path:'complete-import-data',
        component: CompleteImportComponent
    },

    {
        path:'match-data',
        component: MatchDataComponent
    },

    {
        path:'complete-match-data',
        component: CompleteMatchComponent
    },
]

const revenueRoutes:Routes = [
    {   
        path: '', 
        component: RevenueComponent, 
        data: { preload: true }, 
        children: childRouters 
    },
]



@NgModule({
    imports: [ RouterModule.forChild(revenueRoutes) ],
    exports: [ RouterModule ]
})

export class RevenueRoutingModule{}