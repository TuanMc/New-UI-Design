import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// import component
import { AppComponent } from './app.component';
import { BreadscrumbComponent } from './body/revenue/breadscrumb/breadscrumb.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImportDataComponent } from './body/revenue/import-data/import-data.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadscrumbComponent,
    LandingPageComponent,
    ImportDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
