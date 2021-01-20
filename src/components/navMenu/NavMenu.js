import React, { useContext } from 'react'
import './navMenu.css'
import { Context } from '../../context.js'
import { Link } from 'react-router-dom'

export default function TopMenu() {
  const { sendRequest, makeUrl } = useContext(Context)

  return (
    <div className="nav-menu">
      <Link
        to="/competitions"
        className="nav-menu__item"
        onClick={() => sendRequest(makeUrl(['competitions']))}
      >
        Competitions
      </Link>

      <Link
        to="/matches"
        className="nav-menu__item"
        onClick={() => sendRequest(makeUrl(['matches']))}
      >
        Matches
      </Link>

      <Link
        to="/teams"
        className="nav-menu__item"
        onClick={() => sendRequest(makeUrl(['teams']))}
      >
        Teams
      </Link>

      <Link
        to="/areas"
        className="nav-menu__item"
        onClick={() => sendRequest(makeUrl(['areas']))}
      >
        Areas
      </Link>
    </div>
  )
}
