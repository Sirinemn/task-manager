import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    HeaderComponent,
    RouterModule
],

  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  public form!: FormGroup;

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      priority: [false],
      accomplished: [false],
      description: ['', Validators.required]
    })
  }

  onSubmit() {
    throw new Error('Method not implemented.');
    }

}
