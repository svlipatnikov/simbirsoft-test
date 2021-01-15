import React, { useContext } from 'react'
import './navMenu.css'
import { Context } from '../../context.js'
import { Link } from 'react-router-dom'

export default function TopMenu() {
  const { urlDispatch, sendRequest } = useContext(Context)
  const host = 'https://api.football-data.org/'

  function makeUrl(urlArr) {
    const newUrl = new URL('v2/' + urlArr.join('/'), host)
    console.log('makeUrl:', newUrl.toString())
    return newUrl
  }

  return (
    <div className="nav-menu">
      <Link
        to="/competitions"
        className="nav-menu__item"
        onClick={() => {
          // urlDispatch({ type: 'makeUrl', payload: ['competitions'] })
          sendRequest(makeUrl(['competitions']))
        }}
      >
        Competitions
      </Link>

      <Link
        to="/matches"
        className="nav-menu__item"
        onClick={() => {
          // urlDispatch({ type: 'makeUrl', payload: ['matches'] })
          sendRequest(makeUrl(['matches']))
        }}
      >
        Matches
      </Link>

      <Link
        to="/teams"
        className="nav-menu__item"
        onClick={() => {
          // urlDispatch({ type: 'makeUrl', payload: ['teams'] })
          sendRequest(makeUrl(['teams']))
        }}
      >
        Teams
      </Link>

      <Link
        to="/areas"
        className="nav-menu__item"
        onClick={() => {
          // urlDispatch({ type: 'makeUrl', payload: ['areas'] })
          sendRequest(makeUrl(['areas']))
        }}
      >
        Areas
      </Link>
    </div>
  )
}
