import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { modalControllerService } from '../../services/modal-controller.service';

export interface ITaskFormModalData {
  mode: 'create' | 'edit';
}
@Component({
  selector: 'app-task-form-modal',
  imports: [],
  templateUrl: './task-form-modal.html',
  styleUrl: './task-form-modal.css',
})
export class TaskFormModal {
  readonly _data: ITaskFormModalData = inject(DIALOG_DATA);
  private readonly _modalControllerService = inject(modalControllerService);
  closeModal() {
    this._modalControllerService.closeTaskCommentsModal();
  }
}
