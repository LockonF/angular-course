import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Contact } from "../contacts/contact.dto";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup ;
  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      'firstName': [, Validators.required],
      'lastName': [, Validators.required],
      'phone': [, Validators.required]
    });
  }

  public ngOnInit() {

  }

  public postForm() {
    let myRegister = new Contact();
    myRegister = this.registerForm.value;
    this.registerService.postForm(this.registerForm.value).subscribe((data: any) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

}
