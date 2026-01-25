import { Component, inject } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { TaskService } from '../../services/task.service';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask } from '../../interfaces/task.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task-list-section',
  imports: [TaskCard, CdkDropList, CdkDrag, AsyncPipe],
  templateUrl: './task-list-section.html',
  styleUrl: './task-list-section.css',
})
export class TaskListSection {

  public readonly _taskService = inject(TaskService);


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
