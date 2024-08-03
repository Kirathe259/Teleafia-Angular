import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [CommonModule, ReactiveFormsModule] // Import necessary modules directly
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  passwordMismatch: boolean = false;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    if (this.signUpForm.value.password !== this.signUpForm.value.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    this.passwordMismatch = false;
    console.log('Form Submitted', this.signUpForm.value);

    // Handle form submission
  }
}
