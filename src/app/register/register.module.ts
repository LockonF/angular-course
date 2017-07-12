import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MdInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MdButtonModule} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    ReactiveFormsModule,
    MdButtonModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegisterModule { }
