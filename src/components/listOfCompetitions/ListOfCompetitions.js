import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { sendRequest } from '../const'
import { Context } from '../../context.js'
import './listOfCompetitions.css'

export default function ListOfCompetitions() {
  const [data, setData] = useState(undefined)
  const { params } = useContext(Context)

  // Component Did Mount
  useEffect(() => {
    console.log('---ListOfCompetitions--- params:', params)
    sendRequest(setData)
  }, [params])

  // Проверка на undefined
  if (data === undefined) return null
  if (data.message)
    return <div className="content__message">{data.message}</div>

  // Получаем значение search
  let search = ''
  params.forEach((p) => {
    if (p.type === 'search') search = p.value.toLocaleLowerCase()
  })

  // Cчитаем count
  const searchCount = () => {
    let count = 0
    data.competitions.forEach((competition) => {
      if (competition.name.toLocaleLowerCase().indexOf(search) !== -1) ++count
    })
    return count
  }

  return (
    <>
      <div className="content__count">
        Найдено: {search ? searchCount() : data.count}
      </div>
      {data.competitions.map((competition) => {
        if (competition.name.toLocaleLowerCase().indexOf(search) !== -1)
          return (
            <Link
              to={`competitions/${competition.id}`}
              key={competition.id}
              className="content-item competition-item"
            >
              <div className="content-item__inner content-item__link">
                <div className="content-item__name content-item__name--small">
                  {competition.name}
                </div>
                <div className="content-item__info">
                  <div>
                    Area: {competition.area.countryCode} (
                    {competition.area.name})
                  </div>
                </div>
              </div>
            </Link>
          )
        else return null
      })}
    </>
  )
}
