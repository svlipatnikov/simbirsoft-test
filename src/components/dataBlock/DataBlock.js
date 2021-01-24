import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Filters from '../filters/Filters.js'
import Content from '../content/Content.js'
import NavMenu from '../navMenu/NavMenu.js'
import Search from '../search/Search.js'
import './dataBlock.css'
import { Context } from '../../context.js'

export default function DataBlock({ path }) {
  const [data, setData] = useState({
    jsonData: undefined,
    status: 'noData',
    type: '',
  })
  const [search, setSearch] = useState('')

  function sendRequest(url) {
    console.log('sendRequest:', url.toString())
    setData({
      jsonData: { message: 'Waiting server response...' },
      status: 'sendRequest',
    })
    // отправка запроса на сервер
    return fetch(url.toString(), {
      headers: { 'X-Auth-Token': '8c4f30d4f4354979ac043901839c7664' },
      dataType: 'json',
      type: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setData({ jsonData: data, status: 'ok' }))
      .catch((err) => setData({ jsonData: { message: err }, status: 'err' }))
  }

  function addPath(pathAdd) {
    const host = 'https://api.football-data.org/'
    const newUrl = new URL(
      'v2' + window.location.pathname + '/' + pathAdd,
      host
    )
    console.log('addPath url:', newUrl.toString())
    return newUrl
  }

  function makeUrl(urlArr) {
    const host = 'https://api.football-data.org/'
    const newUrl = new URL('v2/' + urlArr.join('/'), host)
    console.log('makeUrl:', newUrl.toString())
    return newUrl
  }

  // componentDidMount
  useEffect(() => {
    const host = 'https://api.football-data.org/'
    const startUrl = new URL(
      '/v2' + window.location.pathname + window.location.search,
      host
    )

    if (startUrl.searchParams.has('search'))
      setSearch(startUrl.searchParams.get('search'))

    startUrl.searchParams.delete('search')
    console.log('!!! componentDidMount url:', startUrl.toString())
    sendRequest(startUrl)
  }, [])

  //очистка данных при смене url
  // useEffect(() => {
  //   console.log('!!!!Clear jsonData')
  //   setData({ jsonData: undefined, status: 'sendRequest' })
  // }, [window.location.pathname])

  return (
    <Context.Provider value={{ sendRequest, addPath, makeUrl, search }}>
      <BrowserRouter>
        <div className="data-block">
          <NavMenu />
          <Route path="/:path">
            <div className="filter-search-block">
              <Filters />
              <Search setSearch={setSearch} />
            </div>
            <div className="content">
              <Content data={data} />
            </div>
          </Route>
        </div>
      </BrowserRouter>
    </Context.Provider>
  )
}
