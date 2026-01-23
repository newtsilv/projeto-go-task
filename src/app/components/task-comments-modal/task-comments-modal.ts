import { Component, inject } from '@angular/core';
import { modalControllerService } from '../../services/modal-controller.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-task-comments-modal',
  imports: [],
  templateUrl: './task-comments-modal.html',
  styleUrl: './task-comments-modal.css',
})
export class TaskCommentsModal {
  private readonly _modalControllerService = inject(modalControllerService)
  readonly _dialogRef = inject(DialogRef);
  closeModal() {
    this._dialogRef.close();
  }
}
