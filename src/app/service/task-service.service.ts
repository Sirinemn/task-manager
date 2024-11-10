import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interface/Task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private tasksSubject = new BehaviorSubject<Task[]>([ { id: 1, title: 'Faire les courses', description: 'Acheter du lait et du pain', prioritaire: false, accompli: false }, 
    { id: 2, title: 'Appeler le docteur', description: 'Prendre rendez-vous', prioritaire: true, accompli:false }
  ]);
  tasks$ = this.tasksSubject.asObservable();

  constructor() { }

  addTask(task: Task){
    const cuurrentTAsks = this.tasksSubject.value;
    this.tasksSubject.next([...cuurrentTAsks, task]);
  }

  getTaskById(id: number): Task{
    return this.tasksSubject.value.find( task => task.id === id)!;
  }

}
