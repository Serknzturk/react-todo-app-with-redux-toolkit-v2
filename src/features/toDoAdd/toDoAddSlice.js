import {createAsyncThunk} from '@reduxjs/toolkit';

export const toDoAddNew = createAsyncThunk(
	'allToDos/addNewToDo',
	async (from, thunkAPI) => {
		const {isAdding, ...sendData} = from; 
		const data = await fetch('http://localhost:8081/api/todo-add',{
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body:JSON.stringify(sendData)
		});
		let json = await data.json();
		isAdding.status = false;
		return json;
	}
);

export const addNewSliceSettings = {
	extraReducers: (builder) => {
		builder.addCase(toDoAddNew.fulfilled, (state, action) => {
			state.todos = [...state.todos, action.payload];
		});
	}
};