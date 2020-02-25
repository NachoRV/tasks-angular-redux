import {Todo } from './todo.model';
import { Action } from '@ngrx/store';

import { AllActions, TODO_ADD, TODO_REMOVE, TODO_TOGGLE, TODO_UPDATE} from './todo.actions'

export function todosReducer( oldState: Todo[]= [], action: AllActions): Todo[]{
    switch (action.type) {
        case TODO_ADD: {
            return [
                ...oldState,
                action.payload
            ];
        }
        case TODO_REMOVE: {
            return oldState.filter((todo)=> todo.id !== action.id)
        }
        case TODO_TOGGLE: {
            return oldState.map((todo) => {
                if(todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo
                }
            });
        }
        case TODO_UPDATE: {
            return oldState.map((todo) => {
                if(todo.id === action.id) {
                    return {
                        ...todo,
                        title: action.newTitle
                    }
                } else {
                    return todo
                }
            });
        }
        default: {
            return oldState
        }
    }
}