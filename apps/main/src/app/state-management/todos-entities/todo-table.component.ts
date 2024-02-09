import { Component, inject } from '@angular/core';
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

@Component({
  selector: 'df-todo-table',
  template: `
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

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>

  `,
  styles: `

    :host {
      display: flex;
      width: 100%;
    }

    .yes {
      color: green;
    }

    .no {
      color: red;
    }
  `,
  standalone: true,
  imports: [MatTable, MatColumnDef, MatHeaderCell, MatCell, MatHeaderCellDef, MatCellDef, MatHeaderRow, MatHeaderRowDef, MatRowDef, MatRow, MatIcon]
})
export class TodoTableComponent {
  #todoStore = inject(TodoStore);
  todoEntities = this.#todoStore.todoEntities;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'userId', 'title', 'completed'];


}
