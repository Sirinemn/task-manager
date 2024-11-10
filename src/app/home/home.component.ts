import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TaskServiceService } from '../service/task-service.service';
import { Observable } from 'rxjs';
import { Task } from '../interface/Task.interface'
import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
    NgFor,
    AsyncPipe, 
    RouterModule,
    NgClass,
    FormsModule  ],
  providers: [
    NgModel,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  task$!: Observable<Task[]>;

  constructor(private taskService: TaskServiceService, private router: Router){}

  ngOnInit(): void {
    this.task$ = this.taskService.tasks$;
  }

  view(id: number) {
    this.router.navigate([`detail/${id}`]);
  }

}
