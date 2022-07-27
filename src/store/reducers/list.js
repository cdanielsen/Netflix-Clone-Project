import { ADD_TO_LIST, REMOVE_FROM_LIST } from '../actions';

export const ListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_LIST: {
      const { id } = action.payload;
      return [...state, id];
    }
    case REMOVE_FROM_LIST: {
      const { id } = action.payload;
      const editedList = state.filter((currentId) => currentId !== id);
      return editedList;
    }
    default:
      return state;
  }
};
