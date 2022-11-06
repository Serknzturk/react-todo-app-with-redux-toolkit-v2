import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectSingleToDo, singleToDoUpdate, singleToDoRemove } from './toDoSingleSlice.js';
import style from '../../styles/ToDoSingle.module.css';

export default function ToDoSingle(props) {

	const dispatch = useDispatch();
	const singleToDo = useSelector(selectSingleToDo(props.itemData.id));

	//Avoid clicking/touching multiple times by mistake
	const isChecking = { status: false };
	const isRemoving = { status: false };

	if (typeof singleToDo == 'undefined' || !singleToDo.hasOwnProperty('id')) {
		return (<></>);
	}

	const completeClickEvent = (e) => {
		if (isChecking.status) return;

		isChecking.status = true;

		dispatch(singleToDoUpdate({ ...singleToDo, isChecking: isChecking }));
	}

	const removeClickEvent = (e) => {
		if (isRemoving.status) return;

		isRemoving.status = true;

		dispatch(singleToDoRemove({ id: singleToDo.id, isRemoving: isRemoving }));
	}

	const formatDateForRender = () => {
		return singleToDo.date.m + '/' + singleToDo.date.d + '/' + singleToDo.date.y;
	}

	return (
		<li id={'todo-' + singleToDo.id} className={style.toDoSingle}>
			<input type="checkbox" aria-label="Completed"
				id={'complete-check-' + singleToDo.id}
				onChange={(e) => { completeClickEvent(e) }}
				checked={singleToDo.checked} />
			<span onClick={(e) => { completeClickEvent(e) }}></span>

			<span className={'title '+style.singleTitle}>
				{singleToDo.title}
				<span className={style.singleDate}>{formatDateForRender()}</span>
			</span>
			<button className={style.singleRemove} aria-label="delete" onClick={(e) => removeClickEvent(e)}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
					<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
					<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
				</svg>
			</button>
		</li>

	)

}