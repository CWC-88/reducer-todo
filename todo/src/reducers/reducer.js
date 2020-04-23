import React, { useReducer, useState } from "react";
// import initialState from './reducers/reducer'
// import {reducer} from './reducers/reducer'

export const initialState = {
  todos: [
    {
      item: "learn about reducers",
      completed: false,
      id: 3892987589,
    },
  ],
  todoCount: 1,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: action.payload, completed: false, id: Date.now() },
        ],
        todoCount: state.todoCount + 1,
      };
    case "toggle-todo":
      return {
        ...state,
        todos: state.todos.map((t, idx) =>
          idx === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    case "delete-todo":
      return {
        ...state,
        todos:[
            
        ],
        todoCount: 0,
      };
      case "delete-strikes":
          return{
              ...state,
              todos: state.todos.filter((t) => 
              t.completed === false
              
              )
          }

  }
};
