import React, { useState, useEffect, useReducer } from 'react'
import FiltersBlock from '../filtersBlock/FiltersBlock.js'
import Content from '../content/Content.js'
import TopMenu from '../topMenu/TopMenu.js'
import UrlBlock from '../urlBlock/UrlBlock.js'

import './dataBlock.css'
import urlReducer from '../../urlReducer.js'
import { Context } from '../../context.js'

export default function DataBlock() {
  const startUrl = 'http://api.football-data.org/v2/matches'

  const [url, urlDispatch] = useReducer(urlReducer, startUrl)
  const [jsonData, setJsonData] = useState({})

  function sendRequest(url) {
    console.log('sendRequest:', url)
    return fetch(url, {
      headers: { 'X-Auth-Token': '8c4f30d4f4354979ac043901839c7664' },
      dataType: 'json',
      type: 'GET',
    }).then((response) => {
      if (response.ok) {
        return response.json()
      }
      return response.json().then((error) => {
        const e = new Error('Что-то пошло не так')
        e.data = console.error
        throw e
      })
    })
  }

  // ComponentDidMount
  useEffect(() => {
    urlDispatch({
      type: 'makeUrl',
      payload: ['teams', '86', 'matches'],
    })

    // urlDispatch({
    //   type: 'addFilter',
    //   payload: [{ type: 'status', value: 'SCHEDULED' }],
    // })

    // sendRequest(startUrl)
    //   .then((data) => {
    //     setJsonData(data)
    //   })
    //   .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    console.log('useEffect')
    sendRequest(url)
      .then((data) => {
        setJsonData(data)
      })
      .catch((err) => console.log(err))
  }, [url])

  return (
    <Context.Provider value={{ urlDispatch }}>
      <div className="data-block">
        {console.log('reder')}
        <TopMenu />
        <UrlBlock url={url} />
        <FiltersBlock url={url} />
        <Content data={jsonData} />
      </div>
    </Context.Provider>
  )
}
