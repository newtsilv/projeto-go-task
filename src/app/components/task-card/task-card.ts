import { Component, inject } from '@angular/core';
import { modalControllerService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  private readonly _modalControllerService = inject(modalControllerService);
  openModal() {
    this._modalControllerService.openTaskCommentsModal();
  }
  openEditModal() {
    this._modalControllerService.openEditTaksModal();
  }

}
