import React from "react";
import style from '../../styles/Welcome.module.css';


export default function Welcome() {

    const now = new Date();
    const LOCALE = 'en-US';

    const localeDay = () => {
        return now.toLocaleDateString(LOCALE, { weekday: 'long' });
    }

    const formatDay = () => {
        const currentDay = parseInt(now.getDate());
        const lastUnit = currentDay % 10;
        let formattedDay = currentDay;

        if (formattedDay < 10) {
            formattedDay = '0' + formattedDay;
        }

        switch (lastUnit) {
            case 0:
                formattedDay += 'th';
                break;

            case 1:
                formattedDay += 'st';
                break;

            case 2:
                formattedDay += 'nd';
                break;

            case 3:
                formattedDay += 'rd';
            break;

            default:
                formattedDay += 'th';
            break;
        }

        return formattedDay;
    }

    return (

        <div className={style.welcomeHeader}>
            <h3><strong>{localeDay()}, </strong> {formatDay()}</h3>
            <span>{now.toLocaleDateString(LOCALE, { month: 'long' })}</span>
        </div>
    )

}