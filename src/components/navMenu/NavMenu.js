import React from 'react'
import { Link } from 'react-router-dom'
import './navMenu.css'

export default function TopMenu() {
  return (
    <div className="nav-menu">
      <Link to="/competitions" className="nav-menu__item">
        Competitions
      </Link>

      <Link to="/matches" className="nav-menu__item">
        Matches
      </Link>

      <Link to="/teams" className="nav-menu__item">
        Teams
      </Link>

      <Link to="/areas" className="nav-menu__item">
        Areas
      </Link>
    </div>
  )
}
