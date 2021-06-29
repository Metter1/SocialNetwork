import React from 'react';
import s from './header.module.css'



export default function Header(props) {
    return (
        <div className={s.head}>
            <div className="container">
                <div className={s.row}>
                <img className={s.logo} src="/images/logo.svg" alt="Logo"/>
                <h2 className={s.title}>My social network</h2>

                </div>

            </div>
        </div>
    );
}

