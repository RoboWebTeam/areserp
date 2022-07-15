import React from 'react'

import './Header.css'
import logo from '../../images/Header/Logo.svg'

const Header = () => {
  return (
    <div className='header'><img src={logo} className='header__logo' alt='Logo'/>
    <input className='header__search' placeholder='Найти'/>
        <div className='header__button-group' >
            <button className='header__button-group_button'>Войти</button>
            <button className='header__button-group_button'>Регистрация</button>
        </div> 
    </div>
  )
}

export default Header