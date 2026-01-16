import { Component, inject } from '@angular/core';
import { modalControllerService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-task-comments-modal',
  imports: [],
  templateUrl: './task-comments-modal.html',
  styleUrl: './task-comments-modal.css',
})
export class TaskCommentsModal {
  private readonly _modalControllerService = inject(modalControllerService)
  closeModal() {
    this._modalControllerService.closeTaskCommentsModal()
  }
}
