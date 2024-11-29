// store.js
import { createStore } from 'redux';

// Step 1: Create a Reducer
const initialState = { count: 0 }; // Initial state

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': // Increase count
      return { ...state, count: state.count + 1 };
    case 'DECREMENT': // Decrease count
      return { ...state, count: state.count - 1 };
    default:
      return state; // Default: Return the existing state
  }
};

// Step 2: Create Store
const store = createStore(counterReducer);

export default store;
