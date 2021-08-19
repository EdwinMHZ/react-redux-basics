import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import counterSlice from './counter-slice';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

/* const counterReducer = (state = initalState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return { 
                counter: state.counter + 1,
                showCounter: state.showCounter 
            };
        case 'DECREMENT':
            return { 
                counter: state.counter - 1,
                showCounter: state.showCounter 
            };
        case 'INCREASE':
            return { 
                counter: state.counter + action.value,
                showCounter: state.showCounter 
            };
        case 'TOGGLE':
            return {
                counter: state.counter,
                showCounter: !state.showCounter
            }
        default:
            break;
    }
    return state;
} */