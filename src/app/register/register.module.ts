import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {MdInputModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MdInputModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegisterModule { }
