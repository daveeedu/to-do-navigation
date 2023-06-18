
// import taskSlice from './taskSlice';
// import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore({
//     reducer: {
//         tasks: taskSlice
//     },
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       immutableCheck: false,
//       serializableCheck: false
//     })
//   });

//   export default store;

import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import { taskReducer } from './taskReducer';


const rootReducer = combineReducers({
  tasks: taskReducer
});

const store = createStore(rootReducer);

export default store;
