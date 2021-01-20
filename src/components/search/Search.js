import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './search.css'

export default function Search({ setSearch }) {
  // console.log('--Search')
  const [inputText, setInputText] = useState('')

  const setSearchParam = () => {
    let curentUrl = new URL(window.location)
    curentUrl.searchParams.set('search', inputText)
    return curentUrl.search
  }

  const submit = () => {
    console.log('submit')
    setSearch(inputText)
    setInputText('')
  }

  return (
    <form className="search">
      <h2 className="search__header">Поиск</h2>
      <input
        value={inputText}
        className="search__input"
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <Link
        to={{
          pathname: window.location.pathname,
          search: inputText ? setSearchParam() : window.location.search,
        }}
        className="search__button"
        onClick={submit}
      >
        Найти
      </Link>
    </form>
  )
}
