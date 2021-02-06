import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__text">Football leagues statistics</h1>
      <div className="header__nav-menu">
        <Link to="/competitions" className="header__nav-menu__item">
          Competitions
        </Link>

        <Link to="/matches" className="header__nav-menu__item">
          Matches
        </Link>

        <Link to="/teams" className="header__nav-menu__item">
          Teams
        </Link>

        <Link to="/areas" className="header__nav-menu__item">
          Areas
        </Link>
      </div>
    </header>
  )
}
