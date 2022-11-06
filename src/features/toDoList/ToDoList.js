import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToDoSingle from '../toDoSingle/ToDoSingle.js';
import { loadToDos } from './toDoListSlice.js';
import { selectAllToDos } from './toDoListSlice.js';
import ToDoListSkeleton from '../../components/skeleton/ToDoListSkeleton.js';
import ListLoadingError from '../../components/errors/ListLoadingError.js';
import style from '../../styles/ToDoList.module.css';

export default function ToDoList() {
	const allToDos = useSelector(selectAllToDos);
	const [currentTab, setCurrentTab] = useState('active');
	const dispatch = useDispatch();
	const { onLoading, hasError, errorMessage } = useSelector((state) => state.allToDos);

	if (onLoading) {
		return (
			<div className={style.loadingListErrors}>
				<span>Loading...</span>
			</div>
		)
		//Add skeleton
	}

	if (hasError) {
		return (
			<div className={style.loadingListErrors}>
				<ListLoadingError>{errorMessage}</ListLoadingError>
				<button variant="contained" onClick={() => dispatch(loadToDos())}>Load Tasks Again</button>
			</div>
		)
	}

	let activeToDoLength = 0;
	let completedToDoLength = 0;

	const getTabToDos = () => {
		const checkFor = currentTab == 'active' ? false : true;
		return allToDos.filter(item => item.checked === checkFor);
	}

	const currentToDoList = getTabToDos();

	if (currentTab == 'active') {
		activeToDoLength = currentToDoList.length;
		completedToDoLength = allToDos.length - currentToDoList.length;
	} else {
		completedToDoLength = currentToDoList.length;
		activeToDoLength = allToDos.length - currentToDoList.length;
	}

	return (
		<div>
			<div className='tab-labels' className={style.tabHeaders} style={{ display: 'flex' }}>
				<span className={'display-active ' + (currentTab == 'active' ? style.active : '')} onClick={() => setCurrentTab('active')}>
					ACTIVE
					<span className={style.baloon}>{activeToDoLength}</span>
				</span>
				<span className={'display-completed ' + (currentTab == 'completed' ? style.active : '')} onClick={() => setCurrentTab('completed')}>
					COMPLETED
					<span className={style.baloon + ' ' + style.baloonCompleted}>{completedToDoLength}</span>
				</span>
			</div>
			<ul className={style.listHolder}>
				{
					currentToDoList.map(
						(item) => (
							<ToDoSingle key={item.id} itemData={item} />
						)
					)
				}
			</ul>
		</div>
	);
}