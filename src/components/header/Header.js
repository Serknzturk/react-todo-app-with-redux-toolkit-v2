import React from "react";
import Welcome from "../welcome/Welcome";
import ThemeSwitcher from "../utils/ThemeSwitcher";

export default function Header() {

    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignContent: 'center'
            }}>  
            <Welcome />
            <ThemeSwitcher />
        </header >
        

    );
}