import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sendRequest } from '../../fetch.js'
import { Context } from '../../context.js'
import './listOfCompetitions.css'

export default function ListOfCompetitions() {
  const [data, setData] = useState(undefined)
  const { params } = useContext(Context)
  const location = useLocation()

  // Обновление контента при смене url
  useEffect(() => {
    sendRequest(setData, location)
  }, [location])

  // Проверка на undefined
  if (data === undefined) return null

  // Ошибка
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

/*
{
  count: 152,
  filters: {},
  competitions: [
    {
      id: 2006,
      area: { id: 2001, name: 'Africa', countryCode: 'AFR', ensignUrl: null },
      name: 'WC Qualification',
      code: null,
      emblemUrl: null,
      plan: 'TIER_FOUR',
      currentSeason: {
        id: 555,
        startDate: '2019-09-04',
        endDate: '2021-11-16',
        currentMatchday: null,
        winner: null,
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: '2018-06-04T23:54:04Z',
    },
    
    ...

    {
      id: 2020,
      area: {
        id: 2016,
        name: 'Austria',
        countryCode: 'AUT',
        ensignUrl:
          'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg',
      },
      name: 'Erste Liga',
      code: null,
      emblemUrl: null,
      plan: 'TIER_FOUR',
      currentSeason: {
        id: 626,
        startDate: '2020-09-11',
        endDate: '2021-05-21',
        currentMatchday: 14,
        winner: null,
      },
      numberOfAvailableSeasons: 4,
      lastUpdated: '2021-02-12T00:00:07Z',
    },    
  ],
}
*/
