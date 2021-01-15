import React, { useState, useEffect, useReducer } from 'react'
import FiltersBlock from '../filtersBlock/FiltersBlock.js'
import Content from '../content/Content.js'
import NavMenu from '../navMenu/NavMenu.js'
import UrlBlock from '../urlBlock/UrlBlock.js'

import './dataBlock.css'
import urlReducer from '../../urlReducer.js'
import { Context } from '../../context.js'

import { BrowserRouter, Route } from 'react-router-dom'

export default function DataBlock() {
  const startUrl = new URL('http://api.football-data.org/v2/matches')
  const [url, urlDispatch] = useReducer(urlReducer, startUrl)
  const [jsonData, setJsonData] = useState({})

  function sendRequest(url) {
    console.log('sendRequest:', url.toString())
    setJsonData({ message: 'Waiting server response...' })
    return fetch(url.toString(), {
      headers: { 'X-Auth-Token': '8c4f30d4f4354979ac043901839c7664' },
      dataType: 'json',
      type: 'GET',
    })
      .then((response) => response.json())
      .catch((err) => setJsonData({ message: 'Error in sendRequest:' + err }))
      .then((data) => {
        setJsonData(() => data)
      })
  }

  // function addPath(path) {
  //   const newUrl = new URL(
  //     window.location.pathname + '/' + path,
  //     window.location.origin
  //   )
  //   console.log('addPath url:', newUrl.toString())
  //   return newUrl
  // }

  // function addFilter(filterArr) {
  //   const newUrl = new URL(window.location.pathname, window.location.origin)
  //   filterArr.forEach((p) => {
  //     newUrl.searchParams.set(p.type, p.value)
  //   })
  //   console.log('Filtered url:', newUrl.toString())
  //   return newUrl
  // }

  // componentDidMount
  useEffect(() => {
    console.log('!!! START url:', window.location.pathname)
  }, [])

  // useEffect(() => {
  //   console.log('useEffect url:', url)
  //   // очистка контента, ожидание нового
  //   setJsonData({ message: 'Waiting server response...' })
  //   sendRequest(url)
  //     .catch((err) => setJsonData({ message: 'Error in sendRequest:' + err }))
  //     .then((data) => {
  //       setJsonData(() => data)
  //     })
  // }, [window.location.pathname])

  return (
    <Context.Provider value={{ urlDispatch, sendRequest }}>
      <BrowserRouter>
        <div className="data-block">
          <NavMenu />
          {/* <UrlBlock url={url} /> */}
          <FiltersBlock url={url} />
          <Content data={jsonData} />
        </div>
      </BrowserRouter>
    </Context.Provider>
  )
}
