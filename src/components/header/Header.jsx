import React from 'react';
import s from './header.module.css'
import logo from '../../assets/images/logo.svg'


export default function Header({profile, logout, isAuth, login, UserAuthPhoto}) {
    return (
        <div className={s.head}>
            <div className="container">
                <div className={s.row}>
                    <img className={s.logo} src={logo} alt="Logo" />
                    <h2 className={s.title}>Social</h2>
                </div>
                <div className={s.loginBlock}>
                    {isAuth && <div><span className={s.link}>{login}</span>
                            <button className={s.login_button} onClick={logout}>Выйти</button>
                          </div>
                    }
                    <img src={UserAuthPhoto} alt="" />
                </div>
            </div>
        </div>
    );
}

