import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './search.css'

export default function Search({ setSearch }) {
  const [inputText, setInputText] = useState('')

  const setSearchParam = () => {
    console.log('setSearchParam')
    let curentUrl = new URL(window.location)
    curentUrl.searchParams.set('search', inputText)
    setSearch(inputText)
    return curentUrl.search
  }

  return (
    <form className="search">
      <h2 className="search__header">Поиск</h2>
      <input
        className="search__input"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      ></input>
      <Link
        to={{
          pathname: window.location.pathname,
          search: inputText ? setSearchParam() : window.location.search,
        }}
        className="search__button"
        onClick={() => setInputText('')}
      >
        Найти
      </Link>
    </form>
  )
}
