import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],

  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  public form!: FormGroup;

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      priority: [false],
      accomplished: [false],
      description: ['', Validators.required]
    })
  }

}
