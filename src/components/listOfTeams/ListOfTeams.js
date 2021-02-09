import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sendRequest } from '../const'
import { Context } from '../../context.js'
import './listOfTeams.css'

export default function ListOfTeams() {
  const [data, setData] = useState(undefined)
  const { params } = useContext(Context)
  const location = useLocation()

  // Обновление контента при смене url
  useEffect(() => {
    sendRequest(setData)
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

  // считаем count
  const searchCount = () => {
    let count = 0
    data.teams.forEach((team) => {
      if (team.name.toLocaleLowerCase().indexOf(search) !== -1) ++count
    })
    return count
  }

  return (
    <>
      <div className="content__count">
        Найдено: {search ? searchCount() : data.count}
      </div>
      {data.teams.map((team) => {
        if (team.name.toLocaleLowerCase().indexOf(search) !== -1)
          return (
            <Link
              to={`/teams/${team.id}`}
              key={team.id}
              className="content-item team-item"
            >
              <div className="content-item__inner content-item__link">
                <div className="team-item__title">
                  <img
                    className="team-item__img"
                    src={team.crestUrl}
                    alt={`${team.name} img`}
                  />
                  <div className="content-item__name">{team.shortName}</div>
                </div>

                <div className="content-item__info content-item__info--small">
                  <div>
                    <b>Name: </b>
                    {team.name}
                  </div>
                  <div>
                    <b>Area: </b>
                    {team.area.name}
                  </div>
                  <div>
                    <b>tla: </b>
                    {team.tla}
                  </div>
                  <div>
                    <b>Address: </b>
                    {team.address}
                  </div>
                  <div>
                    <b>Phone: </b>
                    {team.phone}
                  </div>
                  <div>
                    <b>Website: </b>
                    {team.website}
                  </div>
                  <div>
                    <b>email: </b>
                    {team.email}
                  </div>
                  <div>
                    <b>Founded: </b>
                    {team.founded}
                  </div>
                  <div>
                    <b>ClubColors: </b>
                    {team.clubColors}
                  </div>
                  <div>
                    <b>Venue: </b>
                    {team.venue}
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

// {
//   "id": 57,
//   "area": {
//       "id": 2072,
//       "name": "England"
//   },
//   "name": "Arsenal FC",
//   "shortName": "Arsenal",
//   "tla": "ARS",
//   "crestUrl": "https://crests.football-data.org/57.svg",
//   "address": "75 Drayton Park London N5 1BU",
//   "phone": "+44 (020) 76195003",
//   "website": "http://www.arsenal.com",
//   "email": "info@arsenal.co.uk",
//   "founded": 1886,
//   "clubColors": "Red / White",
//   "venue": "Emirates Stadium",
//   "lastUpdated": "2020-11-26T02:15:20Z"
// }
