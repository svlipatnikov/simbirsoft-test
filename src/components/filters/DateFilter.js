import React, { useEffect, useState, useContext, useRef } from 'react'
import { Context } from '../../context.js'
import Calendar from 'react-calendar'
import './dateFilter.css'

export default function DateFilter({ filter, setFilters }) {
  const { params } = useContext(Context)
  const [OpenState, setOpenState] = useState(false)
  const [date, setDate] = useState(undefined)
  const calendarRef = useRef(null)

  // после получения даты
  useEffect(() => {
    // Закрытия календаря с задержкой
    setTimeout(() => setOpenState(false), 300)

    // Применение даты в массив фальтров
    if (date) {
      setFilters((arr) => [
        ...arr.filter((p) => p.type.indexOf('date') === -1),
        { type: 'dateFrom', value: getDateStr(date[0]) },
        { type: 'dateTo', value: getDateStr(date[1]) },
      ])
    }
  }, [date])

  // Очистка поля после применения фильтров
  useEffect(() => {
    setDate(undefined)
  }, [params])

  // ComponentDidMount
  useEffect(() => {
    console.log('addEventListener')
    document.addEventListener('mousedown', mouseHanleClick)
    return () => {
      console.log('removeEventListener')
      document.removeEventListener('mousedown', mouseHanleClick)
    }
  }, [])

  // Обработка клика мыши вне календаря
  const mouseHanleClick = (e) => {
    if (!calendarRef.current.contains(e.target)) {
      setDate(undefined)
      setOpenState(false)
    }
  }

  // Получение строки даты в формате YYYY-MM-DD
  const getDateStr = (objDate) => {
    return (
      objDate.getFullYear() +
      '-' +
      ('0' + (objDate.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + objDate.getDate()).slice(-2)
    )
  }

  return (
    <div className="filters__item" ref={calendarRef}>
      <div className="filter__item__name">{filter.name}</div>

      {OpenState === true ? (
        <Calendar selectRange={true} returnValue="end" onChange={setDate} on />
      ) : (
        <input
          className="filter__item__value"
          pattern={filter.pattern}
          onClick={() => setOpenState(true)}
          value={date ? getDateStr(date[0]) + ', ' + getDateStr(date[1]) : ''}
          readOnly={true}
        />
      )}
    </div>
  )
}
