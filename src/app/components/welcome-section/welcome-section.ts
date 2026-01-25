import { Component, inject } from '@angular/core';
import { CdkObserveContent } from '@angular/cdk/observers';
import { modalControllerService } from '../../services/modal-controller.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-welcome-section',
  imports: [CdkObserveContent],
  templateUrl: './welcome-section.html',
  styleUrl: './welcome-section.css',
})
export class WelcomeSection {
  private readonly _modalControllerService = inject(modalControllerService);
  private readonly _taskService = inject(TaskService);
  openModal() {
    const dialogRef = this._modalControllerService.openNewTaksModal();
    dialogRef.closed.subscribe((taskForm) => {
      console.log('Tarefa Criada:', taskForm);
      if (taskForm) {
        this._taskService.addTask(taskForm);
      }
    });
  }
}
