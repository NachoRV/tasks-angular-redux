import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../redux/app.state';
import { Todo } from 'src/redux/todo/todo.model';

import { getVisibleTodos } from '../../redux/todo/todo.selector';

@Component({
  selector: 'atd-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []
  constructor(
    private store: Store<AppState>
  ) {
    this.readTodosState();
   }

  ngOnInit() {
  }

  private readTodosState() {
    this.store.select(getVisibleTodos)
      .subscribe((todos) =>{
        this.todos = todos
      });
  }

}
