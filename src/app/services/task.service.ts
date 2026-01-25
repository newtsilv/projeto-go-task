import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ITask } from '../interfaces/task.interface';
import { TaskStatusEnum } from '../enums/task-status.enum';
import { generateUniqueIdWithTimestamp } from '../utils/generate-unique-id-with-timestamp';
import { ITaskFormControls } from '../interfaces/task-form-controls.interface';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // Tarefas em a fazer
  private todoTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly todoTasks = this.todoTasks$.asObservable().pipe(map((tasks) => structuredClone(tasks)));

  // Tarefas em andamento
  private doingTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly doingTasks = this.doingTasks$
    .asObservable()
    .pipe(map((tasks) => structuredClone(tasks)));

  // Tarefas em concluído
  private doneTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly doneTasks = this.doneTasks$.asObservable().pipe(map((tasks) => structuredClone(tasks)));

  addTask(taskInfos: ITaskFormControls) {
    const newTask: ITask = {
      ...taskInfos,
      status: TaskStatusEnum.TODO,
      id: generateUniqueIdWithTimestamp(),
      comments: [],
    };
    const currentList = this.todoTasks$.value;
    this.todoTasks$.next([...currentList, newTask]);
  }

  carregarListaAtualDeTodo() {
    console.log('Lista Atual de Todo:', this.todoTasks$.value);
  }
}
