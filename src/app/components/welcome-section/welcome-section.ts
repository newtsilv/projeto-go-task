import { Component, inject } from '@angular/core';
import { CdkObserveContent } from '@angular/cdk/observers';
import { modalControllerService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-welcome-section',
  imports: [CdkObserveContent],
  templateUrl: './welcome-section.html',
  styleUrl: './welcome-section.css',
})
export class WelcomeSection {
  private readonly _modalControllerService = inject(modalControllerService);
  openModal() {
    const dialogRef = this._modalControllerService.openNewTaksModal();
    dialogRef.closed.subscribe((taskForm) => {
      console.log('Tarefa Criada:', taskForm);
    })
  }
}
