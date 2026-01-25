import { Component, inject, Input } from '@angular/core';
import { modalControllerService } from '../../services/modal-controller.service';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input({required: true }) task!: ITask;

  private readonly _modalControllerService = inject(modalControllerService);
  openModal() {
    this._modalControllerService.openTaskCommentsModal();
  }
  openEditModal() {
   const dialogRef = this._modalControllerService.openEditTaksModal({
      name: 'Nome Tarefa',
      description: 'Descrição da Tarefa',
    });
    dialogRef.closed.subscribe((taskForm) => {
      console.log('Tarefa Editada:', taskForm);
    })
  }
}
