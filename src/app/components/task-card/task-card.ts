import { Component, inject, Input } from '@angular/core';
import { modalControllerService } from '../../services/modal-controller.service';
import { ITask } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input({required: true }) task!: ITask;

  private readonly _modalControllerService = inject(modalControllerService);
  private readonly _taskService = inject(TaskService)

  openModal() {
    this.task.comments = [
      {id: '123', description: 'meu comentário 1'},
      {id: '456', description: 'meu comentário 2'},
    ]
    this._modalControllerService.openTaskCommentsModal(this.task);
  }
  openEditModal() {
   const dialogRef = this._modalControllerService.openEditTaksModal({
      name: this.task.name,
      description: this.task.description,
    });
    dialogRef.closed.subscribe((taskForm) => {
      console.log('Tarefa Editada:', taskForm);

      if(taskForm) {
        this._taskService.updateTaskNameAndDescription(this.task.id, this.task.status, taskForm.name, taskForm.description)
      }
    })
  }
}
