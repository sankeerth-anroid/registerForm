import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registrationForm: FormGroup;
  validForm = true;
  submitted = false;
  constructor(private builder: FormBuilder){}
  ngOnInit(){
    this.registrationForm = this.builder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    })
  }
  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  onSubmit(){
    this.submitted = true;
    console.log(JSON.stringify(this.registrationForm.value));
    setTimeout(() => {
      this.submitted = false;
    }, 2000);
    this.registrationForm.reset()
  }
}
