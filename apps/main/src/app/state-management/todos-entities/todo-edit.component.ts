import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TodoStore } from './todo.store';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { Todo } from './todo.model';

@Component({
  selector: 'df-todo-edit',
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
    MatCheckbox
  ],
  template: `
    <h2 mat-dialog-title>Edit Todo</h2>
    <form [formGroup]="form" class="form" (ngSubmit)="submit()">
      <mat-dialog-content class="mat-typography" [formGroup]="form">
        <input type="hidden" formControlName="id">
        <input type="hidden" formControlName="userId">
        <mat-form-field>
          <mat-label>Fill form field</mat-label>
          <input matInput placeholder="Placeholder" formControlName="title">
        </mat-form-field>
        <mat-checkbox formControlName="completed">title</mat-checkbox>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button mat-dialog-close>Cancel</button>
        <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Edit</button>
      </mat-dialog-actions>
    </form>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoEditComponent {

  #formBuilder = inject(FormBuilder);
  #todoId: number = inject(MAT_DIALOG_DATA);
  #todoStore = inject(TodoStore);

  #todo: Signal<Todo> = computed(() => this.#todoStore.todoEntityMap()[this.#todoId])

  form = this.#formBuilder.group({
    id: this.#formBuilder.control(this.#todo().id),
    userId: this.#formBuilder.control(this.#todo().userId),
    title: this.#formBuilder.control(this.#todo().title),
    completed: this.#formBuilder.control(this.#todo().completed),
  });

  submit() {
    this.#todoStore.updateTodo(this.form.value as Todo);
  }
}
