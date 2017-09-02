// import module:
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import component:
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: LandingPageComponent },
    {path: 'Home', component: LandingPageComponent },
    {path: 'revenue', loadChildren:'app/body/revenue/revenue.module#RevenueManagement' },
    {path: 'Revenue', loadChildren:'app/body/revenue/revenue.module#RevenueManagement' },
    
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}