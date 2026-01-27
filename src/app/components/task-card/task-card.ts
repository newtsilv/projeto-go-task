import { Component, inject, Input } from '@angular/core';
import { modalControllerService } from '../../services/modal-controller.service';
import { ITask } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-task-card',
  imports: [SlicePipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input({required: true }) task!: ITask;

  private readonly _modalControllerService = inject(modalControllerService);
  private readonly _taskService = inject(TaskService)

  openModal() {
    const dialogRef = this._modalControllerService.openTaskCommentsModal(this.task);

    dialogRef.closed.subscribe((taskCommentsChanged)=>{
      if(taskCommentsChanged){
        console.log("tarefa atualizada: ", this.task )
        this._taskService.updateTaskComments(this.task.id, this.task.status, this.task.comments)
      }
    })
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
  deleteTask(){
    this._taskService.deleteTask(this.task.id, this.task.status)
  }
}
