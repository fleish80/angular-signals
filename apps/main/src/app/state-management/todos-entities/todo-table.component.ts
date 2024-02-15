import { Component, inject, Injector } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { TodoStore } from './todo.store';
import { MatDialog } from '@angular/material/dialog';
import { TodoEditComponent } from './todo-edit.component';
import { MatButton, MatFabButton, MatIconButton } from '@angular/material/button';
import { TodoAddComponent } from './todo-add.component';
import { TodoRemoveComponent } from './todo-remove.component';

@Component({
  selector: 'df-todo-table',
  template: `
    <button mat-fab color="primary" (click)="add()">
      <mat-icon>add</mat-icon>
    </button>
    <table mat-table [dataSource]="todoEntities()" class="mat-elevation-z8">
      <!-- Id Column -->
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef>Id</th>
        <td mat-cell *matCellDef="let row">{{ row.id }}</td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="userId">
        <th mat-header-cell *matHeaderCellDef>User Id</th>
        <td mat-cell *matCellDef="let row">{{ row.userId }}</td>
      </ng-container>

      <ng-container matColumnDef="title">
        <th mat-header-cell *matHeaderCellDef>Title</th>
        <td mat-cell *matCellDef="let row">{{ row.title }}</td>
      </ng-container>

      <ng-container matColumnDef="completed">
        <th mat-header-cell *matHeaderCellDef>Completed</th>
        <td mat-cell *matCellDef="let row">
          @if (row.completed) {
            <mat-icon class="yes">done</mat-icon>
          } @else {
            <mat-icon class="no">close</mat-icon>
          }
        </td>
      </ng-container>

      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let row">
          <button mat-icon-button (click)="edit(row.id)">
            <mat-icon>edit</mat-icon>
          </button>
          <button mat-icon-button (click)="remove(row.id)">
            <mat-icon>remove</mat-icon>
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>

  `,
  styles: `

    :host {
      display: flex;
      width: 100%;
      flex-direction: column;
    }

    .yes {
      color: green;
    }

    .no {
      color: red;
    }
  `,
  standalone: true,
  imports: [MatTable, MatColumnDef, MatHeaderCell, MatCell, MatHeaderCellDef, MatCellDef, MatHeaderRow, MatHeaderRowDef, MatRowDef, MatRow, MatIcon, MatIconButton, MatButton, MatFabButton]
})
export class TodoTableComponent {
  #todoStore = inject(TodoStore);
  #dialog = inject(MatDialog);
  #injector = inject(Injector);
  todoEntities = this.#todoStore.todoEntities;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'userId', 'title', 'completed', 'actions'];

  edit(todoId: number): void {
    this.#dialog.open(TodoEditComponent, {
      data: { todoId, injector: this.#injector }
    });
  }


  add() {
    this.#dialog.open(TodoAddComponent, {
      data: { injector: this.#injector }
    });
  }

  remove(todoId: number) {
    this.#dialog.open(TodoRemoveComponent, {
      data: { todoId, injector: this.#injector }
    });
  }
}
