import { inject, Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { TaskFormModal } from '../components/task-form-modal/task-form-modal';
import { TaskCommentsModal } from '../components/task-comments-modal/task-comments-modal';

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

  openEditTaksModal() {
    return this._dialog.open<string>(TaskFormModal, {
      ...this.modalSizeOptions,
      data: {
        mode: 'edit',
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
