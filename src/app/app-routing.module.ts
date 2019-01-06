import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './comps/home/home.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';
import { SecondPageComponent } from './comps/second-page/second-page.component';
import { GetPersonDataComponent, GetPersonKittenComponent, GetPersonAgeComponent, PersonGuardService } 
    from './comps/get-person-data/get-person-data.component';


const routes: Routes = [
    { path:'home',      component:HomeComponent},
    { path:'second',    component:SecondPageComponent},
    {   path:'person/:id',    
        component:GetPersonDataComponent,
        children:[
            { path:'age',       component:GetPersonAgeComponent},
            { path:'kitten',    component:GetPersonKittenComponent},
            { path:'',          redirectTo:'age', pathMatch: 'full'},
        ],
        //https://angular.io/guide/router#milestone-5-route-guards
        //show deactivated
        canActivate:[PersonGuardService]
        /*
            CanActivate
            CanActivateChild
            CanDeactivate
            CanLoad
            Resolve
        */
    },

    { path:'',          redirectTo:'/home',  pathMatch: 'full'},
    { path:'**',        component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
