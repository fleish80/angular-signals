import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'df-object-basic',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul *ngFor="let todo of todos()">
      <li>title: {{todo.title}} done: {{todo.done}}</li>
    </ul>
    <button (click)="set()">Set</button>
    <button (click)="update()">Update</button>
    <button (click)="mutate()">Mutate</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ObjectBasicComponent {

  todos = signal([{title: 'Learn signals', done: false}]);

  constructor() {
    effect(() => console.log(this.todos()));
  }

  set() {
    this.todos.set([{title: 'Learn signals', done: false}]);
  }

  update() {
    this.todos.update(todos => todos.map(todo => ({title: `${todo.title}`, done: true})));
  }

  mutate() {
    this.todos.mutate(todos => todos.push({title: 'Learn signals', done: false}));
  }

}
