import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule, MatDialogModule,
    MatButtonModule, MatSelectModule, 
  ],
  exports: [
    MatFormFieldModule, MatInputModule, MatDialogModule, 
    MatButtonModule, MatSelectModule, 
  ]
})
export class MaterialsModule { }
