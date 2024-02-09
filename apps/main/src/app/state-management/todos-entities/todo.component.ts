import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { TodoTableComponent } from './todo-table.component';
import { TodoStore } from './todo.store';

@Component({
  selector: 'df-todo',
  standalone: true,
  imports: [
    JsonPipe,
    TodoTableComponent
  ],
  template: `<pre>{{ todoEntities()[1] | json }}</pre>`,
  providers: [TodoStore]
})
export default class TodoComponent {
  #todoStore = inject(TodoStore);
  todoEntities = this.#todoStore.todoEntityMap;

}

