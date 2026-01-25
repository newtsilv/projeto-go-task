import { Component, inject, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { MainContent } from "./components/main-content/main-content";
import { TaskFormModal } from "./components/task-form-modal/task-form-modal";
import { TaskCommentsModal } from "./components/task-comments-modal/task-comments-modal";
import { modalControllerService } from './services/modal-controller.service';

@Component({
  selector: 'app-root',
  imports: [ Header, MainContent, TaskFormModal, TaskCommentsModal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly _modalControllerService = inject(modalControllerService);
  openModal() {
    this._modalControllerService.openNewTaksModal();
  }
}
