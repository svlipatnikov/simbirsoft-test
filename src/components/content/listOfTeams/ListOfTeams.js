import React, { useContext } from 'react'
import { Context } from '../../../context.js'
import { Link, useRouteMatch } from 'react-router-dom'
import './listOfTeams.css'

export default function ListOfTeams({ count, teams }) {
  console.log('---ListOfTeams')
  const { sendRequest, addPath } = useContext(Context)
  let { url } = useRouteMatch()

  if (!count || !teams) {
    count = 0
    teams = []
  }

  return (
    <div className="content">
      <div className="content__count">Найдено: {count}</div>

      {teams.map((team) => (
        <Link
          to={`${url}/${team.id}`}
          key={team.id}
          className="content-item team-item"
          onClick={() => sendRequest(addPath(team.id.toString()))}
        >
          <div className="content-item__inner interactive">
            <div className="team-item__title">
              <img className="team-item__img" src={team.crestUrl} />
              <div className="team-item__name">{team.shortName}</div>
            </div>

            <div className="team-item__info">
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
      ))}
    </div>
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
