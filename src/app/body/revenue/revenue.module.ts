import { NgModule } from '@angular/core';
import { RevenueRoutingModule } from './revenue-routing.module';    // for revenue routing

import { RevenueComponent } from './revenue.component';
import { BreadscrumbComponent } from './breadscrumb/breadscrumb.component';
import { CompleteImportComponent } from './import-data/complete-import-data/complete-import-data.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { MatchDataComponent } from './match-data/match-data.component';
import { CompleteMatchComponent } from  './match-data/complete-match-data/complete-match-data.component';

@NgModule({
    imports:[
        RevenueRoutingModule
    ],
    declarations: [
        RevenueComponent,
        BreadscrumbComponent,
        ImportDataComponent,
        CompleteImportComponent,
        MatchDataComponent,
        CompleteMatchComponent
    ],
    providers: [],
})

export class RevenueManagement { }
