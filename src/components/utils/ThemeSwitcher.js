import React, { useContext } from 'react';
import style from '../../styles/theme-switcher.module.css';

const ThemeSwitcher = () => {

    let currentTheme = 'light';

    const changeThemeEvent = (e) => {
        currentTheme = currentTheme == 'light' ? 'dark' : 'light';
        window.loadTheme(currentTheme);
    }


    return (
        <label className={style.switch} style={{textAlign:'right'}}>
            <input type="checkbox" />
            <span className={style.slider+' '+style.round} onClick={changeThemeEvent}></span>
        </label>
    );
}

export default ThemeSwitcher;