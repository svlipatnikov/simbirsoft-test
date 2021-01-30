import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context.js'
import './search.css'

export default function Search() {
  // console.log('--Search')
  const { setParams } = useContext(Context)
  const [inputText, setInputText] = useState('')

  const submit = () => {
    if (inputText) {
      console.log('submit search')
      setParams((curentParams) => {
        return [...curentParams]
          .filter((p) => p.type !== 'search')
          .concat({
            type: 'search',
            value: inputText.trim(),
          })
      })
      setInputText('')
    }
  }

  const setSearchParam = () => {
    let curentUrl = new URL(window.location)
    curentUrl.searchParams.set('search', inputText)
    return curentUrl.search
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
