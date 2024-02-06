import { Component, inject } from '@angular/core';
import { TodoStore } from './todo.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'df-todo',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `<pre>{{todos() | json}}</pre>`,
  styles: ``,
})
export default class TodoComponent {

  #todoStore = inject(TodoStore);
  todos = this.#todoStore.todos;
}
