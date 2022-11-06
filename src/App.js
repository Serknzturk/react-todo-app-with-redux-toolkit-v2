import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {loadToDos} from './features/toDoList/toDoListSlice.js';
import ToDoList from './features/toDoList/ToDoList.js';
import ToDoAdd from './features/toDoAdd/ToDoAdd.js';
import Header from './components/header/Header.js';
import style from './styles/App.module.css';

//const path = require('path');

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadToDos());
    }, [dispatch]);

    return (
        <main id="main" className={style.mainAppWrapper}>
            <div className={style.containerBox}>
                <Header />
                <ToDoAdd />
                <ToDoList />
            </div>
        </main>

    );
}

export default App;
