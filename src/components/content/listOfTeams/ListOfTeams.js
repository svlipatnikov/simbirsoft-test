import React from 'react'
import './listOfTeams.css'

export default function ListOfTeams({ count, teams }) {
  if (!count || !teams) {
    count = 0
    teams = []
  }

  return (
    <div className="content">
      <div className="content__count">Найдено: {count}</div>

      {teams.map((team, key) => {
        return (
          <div className="team-item" key={key}>
            <div className="team-item__inner">
              <img className="team-item__img" src={team.crestUrl} />
              <div className="team-item__name">{team.shortName}</div>
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
          </div>
        )
      })}
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
