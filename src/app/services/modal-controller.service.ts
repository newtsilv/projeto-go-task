import { inject, Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { TaskFormModal } from '../components/task-form-modal/task-form-modal';
import { TaskCommentsModal } from '../components/task-comments-modal/task-comments-modal';

import { ITaskFormControls } from '../interfaces/task-form-controls.interface';

@Injectable({
  providedIn: 'root',
})
export class modalControllerService {
  private readonly modalSizeOptions = {
    maxWidth: '620px',
    width: '95%',
  };
  private readonly _dialog = inject(Dialog);

  openNewTaksModal() {
    return this._dialog.open<string>(TaskFormModal, {
      ...this.modalSizeOptions,
      data: {
        mode: 'create',
      },
    });
  }

  openEditTaksModal(formValues: ITaskFormControls) {
    return this._dialog.open<string>(TaskFormModal, {
      ...this.modalSizeOptions,
      data: {
        mode: 'edit',
        formValues,
      },
    });
  }

  openTaskCommentsModal() {
    return this._dialog.open<string>(TaskCommentsModal, {
      ...this.modalSizeOptions,
    });
  }
  closeTaskCommentsModal() {
    this._dialog.closeAll();
  }
}
