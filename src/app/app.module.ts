import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comps/home/home.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';
import { SecondPageComponent } from './comps/second-page/second-page.component';
import { MatNavComponent } from './comps/mat-nav/mat-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { GetPersonDataComponent, GetPersonAgeComponent, GetPersonKittenComponent } from './comps/get-person-data/get-person-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SecondPageComponent,
    MatNavComponent,
    GetPersonDataComponent, GetPersonAgeComponent, GetPersonKittenComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,

    AppRoutingModule,
    LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
