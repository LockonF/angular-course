import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MdInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MdButtonModule} from '@angular/material';
import { RegisterService } from 'app/register/register.service';
import { RegisterRoutingModule } from './register.routing.module';


@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    ReactiveFormsModule,
    MdButtonModule,
    RegisterRoutingModule

  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  providers: [RegisterService ]
})
export class RegisterModule { }
