import React, { useState, useEffect, useReducer } from 'react'
import FiltersBlock from '../filtersBlock/FiltersBlock.js'
import Content from '../content/Content.js'
import TopMenu from '../topMenu/TopMenu.js'
import UrlBlock from '../urlBlock/UrlBlock.js'

import './dataBlock.css'
import urlReducer from '../../urlReducer.js'
import { Context } from '../../context.js'

export default function DataBlock() {
  const startUrl = new URL('http://api.football-data.org/v2/matches')
  const [url, urlDispatch] = useReducer(urlReducer, startUrl)
  const [jsonData, setJsonData] = useState({})

  function sendRequest(url) {
    console.log('sendRequest:', url.toString())
    return fetch(url.toString(), {
      headers: { 'X-Auth-Token': '8c4f30d4f4354979ac043901839c7664' },
      dataType: 'json',
      type: 'GET',
    }).then((response) => response.json())
  }

  useEffect(() => {
    setJsonData({ message: 'Waiting server response...' }) // очистка контента, ожидание нового
    sendRequest(url)
      .then((data) => setJsonData(data))
      .catch((err) => setJsonData({ message: 'Error in sendRequest:' + err }))
  }, [url])

  return (
    <Context.Provider value={{ urlDispatch }}>
      <div className="data-block">
        <TopMenu />
        <UrlBlock url={url} />
        <FiltersBlock url={url} />
        <Content data={jsonData} resource={url.pathname} />
      </div>
    </Context.Provider>
  )
}
