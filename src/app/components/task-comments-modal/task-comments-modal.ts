import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { modalControllerService } from '../../services/modal-controller.service';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IComment } from '../../interfaces/comment.interface';
import { generateUniqueIdWithTimestamp } from '../../utils/generate-unique-id-with-timestamp';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-comments-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-comments-modal.html',
  styleUrl: './task-comments-modal.css',
})
export class TaskCommentsModal {
  taskCommentsChanged = false;
  commentControl = new FormControl('', [Validators.required]);
  readonly _task: ITask = inject(DIALOG_DATA);
  readonly _dialogRef: DialogRef<boolean> = inject(DialogRef);

  @ViewChild('commentInput') commentInputRef!: ElementRef<HTMLInputElement>;

  closeModal() {
    this._dialogRef.close(this.taskCommentsChanged);
  }

  onAddComment() {
    console.log('comentário: ', this.commentControl.value);

    const newComment: IComment = {
      id: generateUniqueIdWithTimestamp(),
      description: this.commentControl.value ? this.commentControl.value : '',
    };

    this._task.comments.unshift(newComment);

    this.commentControl.reset();

    this.taskCommentsChanged = true;

    this.commentInputRef.nativeElement.focus();
  }

  onRemoveModal(commentId: string) {
    this._task.comments = this._task.comments.filter((comment) => comment.id !== commentId)
    this.taskCommentsChanged = true

  }
}
