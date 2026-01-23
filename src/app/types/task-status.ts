import { TaskStatusForm } from "../enums/task-status.enum";

export type TaskStatus = TaskStatusForm.TODO | TaskStatusForm.DOING | TaskStatusForm.DONE;
