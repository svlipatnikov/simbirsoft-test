import React, { useContext } from 'react'
import './topMenu.css'
import { Context } from '../../context.js'

export default function TopMenu() {
  const { urlDispatch, setDataType } = useContext(Context)

  return (
    <div className="top-menu">
      <div
        className="top-menu__item"
        onClick={() => {
          urlDispatch({ type: 'makeUrl', payload: ['competitions'] })
          setDataType('listOfCompetitions')
        }}
      >
        Competitions
      </div>
      <div
        className="top-menu__item"
        onClick={() => {
          urlDispatch({ type: 'makeUrl', payload: ['matches'] })
          setDataType('listOfMatches')
        }}
      >
        Matches
      </div>
      <div
        className="top-menu__item"
        onClick={() => {
          urlDispatch({ type: 'makeUrl', payload: ['teams'] })
          setDataType('listOfTeams')
        }}
      >
        Teams
      </div>
      <div
        className="top-menu__item"
        onClick={() => {
          urlDispatch({ type: 'makeUrl', payload: ['areas'] })
          setDataType('listOfAreas')
        }}
      >
        Areas
      </div>
    </div>
  )
}
