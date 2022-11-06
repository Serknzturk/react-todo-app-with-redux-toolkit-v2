import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { toDoAddNew } from './toDoAddSlice.js';
import style from '../../styles/ToDoAdd.module.css';

export default function ToDoAdd() {

	const [isTyping, setTyping] = useState(false);

	const dispatch = useDispatch();

	//Avoid clicking/touching multiple times by mistake
	let isAdding = { status: false };

	const formSubmitEvent = (e) => {
		//Let's avoid page refresh
		e.preventDefault();

		if (isAdding.status) return;

		isAdding.status = true;

		dispatch(toDoAddNew({
			'title': e.target.elements.todoTitle.value,
			'checked': false,
			'isAdding': isAdding
		}));

		//Empty the value
		e.target.elements.todoTitle.value = '';
	}

	const onInputEvent = (e) => {
		if(e.target.value == ''){
			setTyping(false);
		}else{
			setTyping(true);
		}
	}

	return (
		<form onSubmit={formSubmitEvent} className={style.toDoAddHolder+' '+(isTyping ? style.typing : '')}>
			<input className={style.toDoAddText} type="text" name="todoTitle" aria-label='New Task' label="New Task" placeholder="NEW TASK" onInput={onInputEvent} required />
			<button className={style.toDoAddButton} type="submit" name="AddNewToDo" aria-label='Add'></button>
			<span></span>
		</form >
	)
}