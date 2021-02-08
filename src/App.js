import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Context } from './context'

import Filters from './components/filters/Filters.js'
import Content from './components/content/Content.js'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

export default function App() {
  const [params, setParams] = useState([])

  return (
    <Context.Provider value={{ params, setParams }}>
      <BrowserRouter>
        <Header />

        <div className="data-block">
          <Filters />
          <Content />
        </div>

        <Footer />
      </BrowserRouter>
    </Context.Provider>
  )
}
