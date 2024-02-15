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
import { ReactiveFormsModule } from '@angular/forms';
import { TodoStore } from './todo.store';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'df-todo-remove',
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
    <h2 mat-dialog-title>Remove Todo</h2>
    <mat-dialog-content class="mat-typography">
      Are you sure you want te remove this todo
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button color="warn" type="button" [mat-dialog-close]="true">Cancel</button>
      <button mat-button color="primary" type="button" (click)="remove()" cdkFocusInitial>Remove</button>
    </mat-dialog-actions>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoRemoveComponent {

  #todoId: number = inject(MAT_DIALOG_DATA).todoId;
  #injector: Injector = inject(MAT_DIALOG_DATA).injector;
  #todoStore = this.#injector.get(TodoStore);
  #dialogRef=  inject(MatDialogRef<TodoRemoveComponent>);



  remove() {
    this.#todoStore.removeTodo(this.#todoId);
    this.#dialogRef.close();
  }
}
