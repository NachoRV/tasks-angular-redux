import { Action } from '@ngrx/store';
import { Todo } from './todo.model';

export const TODO_ADD = '[todos] add';
export const TODO_REMOVE = '[todos] remove';
export const TODO_TOGGLE = '[todos] toggle';
export const TODO_UPDATE = '[todos] update';

export class todoAddAction implements Action {
    readonly type = TODO_ADD;

    constructor(
        public payload: Todo
    ) { }

}
export class todoRemoveAction implements Action {
    readonly type = TODO_REMOVE;

    constructor(
        public id: string
    ) { }
}
export class todoToggleAction implements Action {
    readonly type = TODO_TOGGLE;

    constructor(
        public id: string
    ) { }
}
export class todoUpdateAction implements Action {
    readonly type = TODO_UPDATE;

    constructor(
        public id: string,
        public newTitle: string
    ) { }
}

export type AllActions = 
    todoAddAction |
    todoRemoveAction | 
    todoToggleAction |
    todoUpdateAction;