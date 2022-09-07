import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonFormCanDeactivateGuardService } from './Guards/person-form-canDeactivate-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonFormComponent } from './person-form/person-form.component';

const routes: Routes = [
  {path:'person-form', component:PersonFormComponent, canDeactivate:[PersonFormCanDeactivateGuardService]},
  {path:'', redirectTo: 'person-form', pathMatch: 'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
