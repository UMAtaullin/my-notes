import React from 'react'
import cls from './Header.module.css'

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.logo}>UMA Конспекты по Верстке и JS</div>
    </header>
  )
}

export default Header
