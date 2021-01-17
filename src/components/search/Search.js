import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './search.css'

export default function Search() {
  const [input, setInput] = useState('')

  function submit(event) {
    // event.preventDefault()
  }

  return (
    <form className="search" onSubmit={submit}>
      <h2 className="search__header">Поиск</h2>
      <input
        className="search__input"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
      <Link
        to={{
          pathname: window.location.pathname,
          search: window.location.search
            ? window.location.search + '&search=' + input
            : '?search=' + input,
        }}
        className="search__button"
        onClick={submit}
      >
        Найти
      </Link>
    </form>
  )
}
