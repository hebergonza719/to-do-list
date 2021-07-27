import { FETCH_DATA } from '../actions';
import { MOD_COMPLETED } from '../actions';
import { DELETE_TASK } from '../actions';
import { ADD_TASK } from '../actions';

const initialState = {
  tasks: []
}

export const tasksReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        tasks: action.payload
      };
    }
    case MOD_COMPLETED: {
      return {
        ...state,
        tasks: action.payload
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: action.payload
      };
    }
    case ADD_TASK: {
      return {
        ...state,
        tasks: action.payload
      };
    }
    default:
      return state;
  }
};