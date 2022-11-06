import {configureStore} from '@reduxjs/toolkit';
import allToDosReducer from './features/toDoList/toDoListSlice.js';



export const setupStore = preloadedState => {
  return configureStore({
    reducer: {
    	'allToDos':allToDosReducer
    },
    preloadedState
  })
}
/*
export default configureStore({
	reducer:{
		'allToDos':allToDosReducer
	}
})
*/