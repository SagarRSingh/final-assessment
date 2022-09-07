import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'
import { MaterialsModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonFormModule } from './person-form/person-form.module';
import { PersonFormCanDeactivateGuardService } from './Guards/person-form-canDeactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PersonFormModule,
  ],
  providers: [PersonFormCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
