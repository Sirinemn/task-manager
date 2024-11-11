import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TaskServiceService } from '../service/task-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Task } from '../interface/Task.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [HeaderComponent,
    NgIf,
    RouterModule
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  task!: Task;

  constructor(private taskService: TaskServiceService, private activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    this.task = this.taskService.getTaskById(id);
  }

}
