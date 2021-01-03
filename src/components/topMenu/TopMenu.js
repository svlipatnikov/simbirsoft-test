import React, { useContext } from 'react'
import './topMenu.css'
import { Context } from '../../context.js'

export default function TopMenu() {
  const { urlDispatch } = useContext(Context)

  return (
    <div className="top-menu">
      <div
        className="top-menu__item"
        onClick={() => {
          urlDispatch({ type: 'makeUrl', payload: ['competitions'] })
        }}
      >
        Competitions
      </div>
      <div
        className="top-menu__item"
        onClick={() => {
          urlDispatch({ type: 'makeUrl', payload: ['matches'] })
        }}
      >
        Matches
      </div>
      <div
        className="top-menu__item"
        onClick={() => {
          urlDispatch({ type: 'makeUrl', payload: ['teams'] })
        }}
      >
        Teams
      </div>
      <div
        className="top-menu__item"
        onClick={() => {
          urlDispatch({ type: 'makeUrl', payload: ['areas'] })
        }}
      >
        Areas
      </div>
    </div>
  )
}
