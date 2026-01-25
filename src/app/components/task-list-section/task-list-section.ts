import { Component, inject } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { TaskService } from '../../services/task.service';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-list-section',
  imports: [TaskCard, CdkDropList, CdkDrag],
  templateUrl: './task-list-section.html',
  styleUrl: './task-list-section.css',
})
export class TaskListSection {
  todoTasks:ITask[] = []
  doingTasks:ITask[] = []
  doneTasks:ITask[] = []

  private readonly _taskService = inject(TaskService);
  ngOnInit() {
    this._taskService.todoTasks.subscribe((tasks) => {
      this.todoTasks = tasks;
    });
    this._taskService.doingTasks.subscribe((tasks) => {
      this.doingTasks = tasks;
    });
    this._taskService.doneTasks.subscribe((tasks) => {
      this.doneTasks = tasks;
    });
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }
}
