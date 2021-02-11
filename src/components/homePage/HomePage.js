import React, { useState, useContext } from 'react'
import { Context } from '../../context.js'
import './homePage.css'

export default function HomePage() {
  //8c4f30d4f4354979ac043901839c7664
  const [text, setText] = useState('')
  const { token, setToken } = useContext(Context)

  const submitToken = (e) => {
    e.preventDefault()
    setToken(text)
    localStorage.setItem('token', text)
    setText('')
  }

  return (
    <div className="content-item">
      <div className="content-item__inner home-page">
        <h2 className="home-page__text">
          Данный сайт предоставляет информацию о статистике футбольных лиг с
          помощью стороннего API
          <div>
            <a
              href="https://www.football-data.org/"
              target="blank"
              // className="button button__name"
            >
              https://www.football-data.org/
            </a>
          </div>
        </h2>

        <h3 className="home-page__text">
          Введите X-Auth-Token, полученный при регистрации на вышеуказанном
          сайте
        </h3>

        <form>
          <input
            className="home-page__input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="home-page__button" onClick={submitToken}>
            Ввести
          </button>
        </form>

        <h4>
          Текущий токен:{' '}
          <span className="home-page__curent-token">{token}</span>
        </h4>

        <h4 className="home-page__text">
          По умолчанию (если ничего не вводить) сайт использует токен,
          полученный автором данного сайта:{' '}
          <div
            className="home-page__autor-token"
            onClick={() => setText('8c4f30d4f4354979ac043901839c7664')}
          >
            8c4f30d4f4354979ac043901839c7664
          </div>
        </h4>
      </div>
    </div>
  )
}
