import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PersonFormComponent } from './person-form.component';
import { MaterialsModule } from '../material/material.module';



@NgModule({
  declarations: [
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialsModule,
    
  ],
  exports: [PersonFormComponent]
})
export class PersonFormModule { }
