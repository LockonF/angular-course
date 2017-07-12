import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MdInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MdButtonModule} from '@angular/material';
import { FileUploadModule } from 'ng2-file-upload';
import { RegisterService } from "app/register/register.service";


@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    ReactiveFormsModule,
    MdButtonModule,
    FileUploadModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  providers: [RegisterService ]
})
export class RegisterModule { }
