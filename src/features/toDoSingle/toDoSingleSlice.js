import {createAsyncThunk} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {selectAllToDos} from '../toDoList/toDoListSlice.js';

export const singleToDoUpdate = createAsyncThunk(
	'allToDos/singleToDoUpdate',
	async (from, thunkAPI) => {
		const {isChecking, ...sendData} = from;
		const data = await fetch('http://localhost:8081/api/todo-check',{
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body:JSON.stringify(sendData)
		});
		let json = await data.json();
		isChecking.status = false;
		return json;
	}
);

export const singleToDoRemove = createAsyncThunk(
	'allToDos/singleToDoRemove',
	async (from, thunkAPI) => {
		const isRemoving = from.isRemoving;
		const data = await fetch('http://localhost:8081/api/todo-remove',{
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body:JSON.stringify({id:from.id})
		});
		let json = await data.json();
		isRemoving.status = false;
		return json;
	}
);

export const singleSliceSettings = {
	extraReducers: (builder) => {
		builder.addCase(singleToDoUpdate.fulfilled, (state, action) => {
			const singleState = state.todos.filter(todo=>todo.id === action.payload.id)[0];
			singleState.checked = action.payload.checked;
		});

		builder.addCase(singleToDoRemove.fulfilled, (state, action) => {
			try{
				state.todos = state.todos.filter(todo=>todo.id !== action.payload.id);
			}catch(e){
				//Do nothing for now
				return state.todos;
			}
		});
	}
};

export const selectSingleToDo = id => (state) => {
	const todos = useSelector(selectAllToDos);
	return todos.filter(todo=>todo.id === id)[0];
}