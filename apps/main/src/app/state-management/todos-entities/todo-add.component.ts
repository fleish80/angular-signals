import { ChangeDetectionStrategy, Component, inject, Injector } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TodoStore } from './todo.store';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { Todo } from './todo.model';

@Component({
  selector: 'df-todo-add',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatCheckbox,
    MatLabel
  ],
  template: `
    <h2 mat-dialog-title>Edit Todo</h2>
    <form [formGroup]="form" class="form" (ngSubmit)="submit()">
      <mat-dialog-content class="mat-typography" [formGroup]="form">
        <input type="hidden" formControlName="id">
        <input type="hidden" formControlName="userId">
        <mat-form-field>
          <mat-label>Title</mat-label>
          <input matInput placeholder="Placeholder" formControlName="title">
        </mat-form-field>
        <mat-checkbox formControlName="completed">Completed</mat-checkbox>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button color="warn" type="button" [mat-dialog-close]="true">Cancel</button>
        <button mat-button color="primary" type="submit" cdkFocusInitial>Update</button>
      </mat-dialog-actions>
    </form>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAddComponent {

  #formBuilder = inject(FormBuilder);
  #injector: Injector = inject(MAT_DIALOG_DATA).injector;
  #todoStore = this.#injector.get(TodoStore);
  #dialogRef=  inject(MatDialogRef<TodoAddComponent>);

  form = this.#formBuilder.group({
    id: Number(this.#todoStore.todoIds().at(-1) ?? 0) + 1,
    userId: this.#todoStore.todoEntities()[Math.floor(Math.random() * this.#todoStore.todoIds().length)].userId,
    title: this.#formBuilder.control(''),
    completed: this.#formBuilder.control(false),
  });

  submit() {
    this.#todoStore.addTodo(this.form.value as Todo);
    this.#dialogRef.close();
  }
}
