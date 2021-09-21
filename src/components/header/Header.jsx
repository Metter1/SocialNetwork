import React from 'react';
import s from './header.module.css'
import logo from '../../assets/images/logo.svg'
import menu from '../../assets/images/menu.svg'

export default function Header({ authPhoto, authName, logout, isAuth, login, menuActive, setMenuActive }) {
    return (
        <div className={s.head}>
            <div className="container">
                <div className={s.row}>
                    <img className={s.logo} src={logo} alt="Logo" />
                    <h2 className={s.title}>Social</h2>
                </div>
                <div className={s.loginBlock}>
                    {isAuth && <div >
                        <div className={s.profileRow}
                            onClick={() => setMenuActive(!menuActive)}>
                            <span className={s.link}>{login}</span>
                            <img className={s.profileImg} src={authPhoto} alt={authName} />
                            <img className={s.menuImg} src={menu} alt="menu" />

                        </div>
                        <div className={s.menuBlock}>
                            <div className={menuActive ? `${s.menu} ${s.active}` : `${s.menu}`}>
                                <p className={s.login_button} onBlur={() => setMenuActive(false)}
                                    tabIndex="1" onClick={() => { logout(); setMenuActive(false) }}>Выйти</p>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}
