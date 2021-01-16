import React, { useState, useEffect, useReducer } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Filters from '../filters/Filters.js'
import Content from '../content/Content.js'
import NavMenu from '../navMenu/NavMenu.js'
import './dataBlock.css'
import { Context } from '../../context.js'

export default function DataBlock() {
  // const [url, urlDispatch] = useReducer(urlReducer, startUrl)
  const [jsonData, setJsonData] = useState({})

  function sendRequest(url) {
    console.log('sendRequest:', url.toString())
    // очистка контента, ожидание нового
    setJsonData({ message: 'Waiting server response...' })
    // отправка запроса на сервер
    return fetch(url.toString(), {
      headers: { 'X-Auth-Token': '8c4f30d4f4354979ac043901839c7664' },
      dataType: 'json',
      type: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((err) => setJsonData({ message: err.toString() }))
  }

  // function addPath(path) {
  //   const host = 'https://api.football-data.org/'
  //   const newUrl = new URL(window.location.pathname + '/' + path, host)
  //   console.log('addPath url:', newUrl.toString())
  //   return newUrl
  // }

  // componentDidMount
  useEffect(() => {
    const host = 'https://api.football-data.org/'
    const startUrl = new URL(
      '/v2' + window.location.pathname + window.location.search,
      host
    )
    console.log('!!! componentDidMount url:', startUrl.toString())
    sendRequest(startUrl)
  }, [])

  return (
    <Context.Provider value={{ sendRequest }}>
      <BrowserRouter>
        <div className="data-block">
          <NavMenu />
          <Route path="/:path">
            <Filters />
            <Content data={jsonData} />
          </Route>
        </div>
      </BrowserRouter>
    </Context.Provider>
  )
}
