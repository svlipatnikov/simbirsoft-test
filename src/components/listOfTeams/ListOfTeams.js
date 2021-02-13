import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sendRequest } from '../../fetch.js'
import { Context } from '../../context.js'
import './listOfTeams.css'

export default function ListOfTeams() {
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

/*
{
  count: 50,
  filters: { areas: [2072], permission: 'TIER_ONE' },
  teams: [
    {
      id: 57,
      area: { id: 2072, name: 'England' },
      name: 'Arsenal FC',
      shortName: 'Arsenal',
      tla: 'ARS',
      crestUrl: 'https://crests.football-data.org/57.svg',
      address: '75 Drayton Park London N5 1BU',
      phone: '+44 (020) 76195003',
      website: 'http://www.arsenal.com',
      email: 'info@arsenal.co.uk',
      founded: 1886,
      clubColors: 'Red / White',
      venue: 'Emirates Stadium',
      lastUpdated: '2020-11-26T02:15:20Z',
    },
    {
      id: 58,
      area: { id: 2072, name: 'England' },
      name: 'Aston Villa FC',
      shortName: 'Aston Villa',
      tla: 'AST',
      crestUrl: 'https://crests.football-data.org/58.svg',
      address: 'Villa Park Birmingham B6 6HE',
      phone: '+44 (0121) 3272299',
      website: 'http://www.avfc.co.uk',
      email: null,
      founded: 1872,
      clubColors: 'Claret / Sky Blue',
      venue: 'Villa Park',
      lastUpdated: '2020-11-26T02:20:23Z',
    },
    {
      id: 59,
      area: { id: 2072, name: 'England' },
      name: 'Blackburn Rovers FC',
      shortName: 'Blackburn',
      tla: 'BBR',
      crestUrl: 'https://crests.football-data.org/59.svg',
      address: 'Ewood Park Blackburn BB2 4JF',
      phone: '+44 (0871) 7021875',
      website: 'http://www.rovers.co.uk',
      email: null,
      founded: 1874,
      clubColors: 'Blue / White',
      venue: 'Ewood Park',
      lastUpdated: '2020-11-26T02:16:34Z',
    },
    {
      id: 60,
      area: { id: 2072, name: 'England' },
      name: 'Bolton Wanderers FC',
      shortName: 'Bolton',
      tla: 'BOL',
      crestUrl: 'https://crests.football-data.org/60.svg',
      address: 'Burnden Way Bolton BL6 6JW',
      phone: '+44 (0844) 8712932',
      website: 'http://www.bwfc.co.uk',
      email: 'reception@bwfc.co.uk',
      founded: 1874,
      clubColors: 'White / Navy Blue',
      venue: 'University of Bolton Stadium',
      lastUpdated: '2020-11-26T02:16:54Z',
    },
  ],
}
*/
