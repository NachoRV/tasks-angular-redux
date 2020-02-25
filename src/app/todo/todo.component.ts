import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/redux/todo/todo.model';
import {FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { todoRemoveAction, todoToggleAction, todoUpdateAction } from '../../redux/todo/todo.actions';

@Component({
  selector: 'atd-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  checkFile: FormControl;
  textField: FormControl;
  editing: boolean;

  
  constructor(
    private store: Store<AppState>
  ) { 
    this.checkFile = new FormControl(false);
    this.checkFile.valueChanges
      .subscribe((value) => {
        const action = new todoToggleAction(this.todo.id)
        this.store.dispatch(action)
        console.log(value, 'check')
      })
      this.textField = new FormControl('', Validators.required)
  }

  ngOnInit() {
  }
  deleteTodo() {
    const action = new todoRemoveAction(this.todo.id)
    this.store.dispatch(action)
  }
  updateText() {
    const action = new todoUpdateAction(this.todo.id, this.textField.value)
    this.store.dispatch(action)

  }
  activeEditMode() {
    this.editing = true;
  }
}
