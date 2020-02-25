import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';

export const selectTodos = (state: AppState) => state.todos;
export const selectFilter = ( state: AppState ) => state.filter;

export const getVisibleTodos = createSelector(
    selectTodos,
    selectFilter,
    (todo, filter)=>{
        if (filter === 'SHOW_ACTIVE'){
            return todo.filter(todo => !todo.completed )
        }
        if (filter === 'SHOW_DONE'){
            return todo.filter(todo => todo.completed )
        }
        return todo
    }
);