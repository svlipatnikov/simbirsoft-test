import React, { useState, useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import { Context } from './context'

import Filters from './components/filters/Filters.js'
import Content from './components/content/Content.js'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import BreadCrumbs from './components/breadСrumbs/BreadCrumbs'

export default function App() {
  const [params, setParams] = useState([])
  const [token, setToken] = useState('8c4f30d4f4354979ac043901839c7664')

  // Установка токена из localStorage после перезагрузки
  useEffect(() => {
    const curentToken = localStorage.getItem('token')
    if (curentToken) setToken(curentToken)
  }, [])

  return (
    <Context.Provider value={{ params, setParams, token, setToken }}>
      <HashRouter>
        <Header />
        <BreadCrumbs />

        <div className="data-block">
          <Filters />
          <Content />
        </div>

        <Footer />
      </HashRouter>
    </Context.Provider>
  )
}
