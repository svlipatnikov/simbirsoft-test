import React, { useState, useEffect, useReducer } from 'react'
import FiltersBlock from '../filtersBlock/FiltersBlock.js'
import Content from '../content/Content.js'
import NavMenu from '../navMenu/NavMenu.js'
import UrlBlock from '../urlBlock/UrlBlock.js'

import './dataBlock.css'
import urlReducer from '../../urlReducer.js'
import { Context } from '../../context.js'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function DataBlock() {
  const startUrl = new URL('http://api.football-data.org/v2/matches')
  const [url, urlDispatch] = useReducer(urlReducer, startUrl)
  const [jsonData, setJsonData] = useState({})
  const [dataType, setDataType] = useState('listOfMatches')

  function sendRequest(url) {
    console.log('sendRequest:', url.toString())
    return fetch(url.toString(), {
      headers: { 'X-Auth-Token': '8c4f30d4f4354979ac043901839c7664' },
      dataType: 'json',
      type: 'GET',
    }).then((response) => response.json())
  }

  useEffect(() => {
    // очистка контента, ожидание нового
    setJsonData({ message: 'Waiting server response...' })
    sendRequest(url)
      .catch((err) => setJsonData({ message: 'Error in sendRequest:' + err }))
      .then((data) => {
        setJsonData(() => data)
      })
  }, [url])

  return (
    <Context.Provider value={{ urlDispatch, setDataType }}>
      <BrowserRouter>
        <div className="data-block">
          <NavMenu />
          <UrlBlock url={url} />
          <FiltersBlock url={url} />
          {/* <Content data={jsonData} dataType={dataType} /> */}
          <Switch>
            <Route
              exact
              path="/:path"
              children={<Content data={jsonData} dataType={dataType} />}
            ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Context.Provider>
  )
}
