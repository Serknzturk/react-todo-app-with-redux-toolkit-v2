import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {singleSliceSettings} from '../toDoSingle/toDoSingleSlice.js';
import {addNewSliceSettings} from '../toDoAdd/toDoAddSlice.js';

export const loadToDos = createAsyncThunk(
	'allToDos/loadToDos',
	async () => {
		const data = await fetch('http://localhost:8081/api/todos',{
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json',
			}
		});
		let json = await data.json();
		return json;
	}
);

const sliceSettings = {
	name:'allToDos',
	initialState:{
		todos:[],
		onLoading:false,
		hasError:false,
		errorMessage:false
	},
	extraReducers:(builder) => {
		builder.addCase(loadToDos.pending, (state, action) => {
			state.onLoading = true;
			state.hasError = false;
		}).addCase(loadToDos.rejected, (state, action) => {
			state.onLoading = false;
			state.hasError = true;
			state.errorMessage = action.error.message;
		}).addCase(loadToDos.fulfilled, (state, action) => {
			state.todos = action.payload;
			state.onLoading = false;
			state.hasError = false;
		});

		singleSliceSettings.extraReducers(builder);
		addNewSliceSettings.extraReducers(builder);
	}

	
}

export const toDoListSlice = createSlice(sliceSettings);
export const selectAllToDos = (state) => state.allToDos.todos;
export default toDoListSlice.reducer;