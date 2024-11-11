import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { Router, RouterModule } from '@angular/router';
import { Task } from '../interface/Task.interface';
import { TaskServiceService } from '../service/task-service.service';

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

  constructor(private fb:FormBuilder, private taskService: TaskServiceService, private router: Router){
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      priority: [false],
      accomplished: [false],
      description: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.form.valid) { 
      const newTask: Task = { 
        id: Date.now(), 
        title: this.form.get('title')?.value, 
        description: this.form.get('description')?.value, 
        prioritaire: this.form.get('priority')?.value, 
       accompli: this.form.get('accomplished')?.value
      };
      this.taskService.addTask(newTask);
      this.form.reset();
      this.router.navigate(["/"]);
    }
  }
}
