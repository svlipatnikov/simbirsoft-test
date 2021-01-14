import React, { useContext } from 'react'
import './navMenu.css'
import { Context } from '../../context.js'
import { Link } from 'react-router-dom'

export default function TopMenu() {
  const { urlDispatch, setDataType } = useContext(Context)

  return (
    <div className="top-menu">
      <Link
        to="/competitions"
        className="top-menu__item"
        onClick={() => {
          urlDispatch({ type: 'makeUrl', payload: ['competitions'] })
          setDataType('listOfCompetitions')
        }}
      >
        Competitions
      </Link>

      <Link
        to="/matches"
        className="top-menu__item"
        onClick={() => {
          urlDispatch({ type: 'makeUrl', payload: ['matches'] })
          setDataType('listOfMatches')
        }}
      >
        Matches
      </Link>

      <Link
        to="/teams"
        className="top-menu__item"
        onClick={() => {
          urlDispatch({ type: 'makeUrl', payload: ['teams'] })
          setDataType('listOfTeams')
        }}
      >
        Teams
      </Link>

      <Link
        to="/areas"
        className="top-menu__item"
        onClick={() => {
          urlDispatch({ type: 'makeUrl', payload: ['areas'] })
          setDataType('listOfAreas')
        }}
      >
        Areas
      </Link>
    </div>
  )
}
