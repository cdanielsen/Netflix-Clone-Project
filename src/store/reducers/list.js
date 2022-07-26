import { ADD_TO_LIST } from '../actions';

export const ListReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_LIST: {
      return [...state, action.payload.id];
    }
    default:
      return state;
  }
};
