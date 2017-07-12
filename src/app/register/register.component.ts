import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup ;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      'firstName': [, Validators.required],
      'lastName': [, Validators.required],
      'phone': [, Validators.required]
    });
  }

  public ngOnInit() {
    // Reactive forms
    this.registerForm.valueChanges.subscribe((value: any) => {
      console.log(value);
    });
  }

}
