import { Component, inject } from '@angular/core';
import { modalControllerService } from '../../services/modal-controller.service';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-comments-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-comments-modal.html',
  styleUrl: './task-comments-modal.css',
})
export class TaskCommentsModal {
  private readonly _modalControllerService = inject(modalControllerService);
  commentControl = new FormControl('',[Validators.required])
  readonly _task = inject(DIALOG_DATA);

  readonly _dialogRef = inject(DialogRef);
  closeModal() {
    this._dialogRef.close();
  }

  onAddComment(){
    console.log('comentário: ', this.commentControl.value)
  }
}
