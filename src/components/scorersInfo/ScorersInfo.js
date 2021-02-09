import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sendRequest } from '../const'
import './scorersInfo.css'
import Scorer from './Scorer'

export default function ScorersInfo() {
  const [data, setData] = useState(undefined)
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

  return (
    <div className="content-item scorers">
      <div className="content-item__inner">
        <div className="scorers__container">
          <div className="content-item__name content-item__name--small">
            Competition:
          </div>
          <Link
            to={`/competitions/${data.competition.id}`}
            // className="button button__name"
          >
            {data.competition.name}
          </Link>
        </div>

        <div className="scorers__container">
          <div className="content-item__name content-item__name--small">
            Season:
          </div>
          <div>{new Date(data.season.startDate).getFullYear()}</div>
        </div>

        <div className="content-item__name content-item__name--small">
          Scorers:
        </div>
        <table className="scorers__table">
          <tr className="scorers__table-header">
            <th>Goals</th>
            <th>Player</th>
            <th>Player info</th>
            <th>Player team</th>
          </tr>

          {data.scorers.map((player) => (
            <Scorer info={player} key={player.id} />
          ))}
        </table>
      </div>
    </div>
  )
}

/*
{
    "count": 10,
    "filters": {
        "limit": 10
    },
    "competition": {
        "id": 2000,
        "area": {
            "id": 2267,
            "name": "World"
        },
        "name": "FIFA World Cup",
        "code": "WC",
        "plan": "TIER_ONE",
        "lastUpdated": "2020-09-10T13:58:14Z"
    },
    "season": {
        "id": 1,
        "startDate": "2018-06-14",
        "endDate": "2018-07-15",
        "currentMatchday": 3,
        "winner": {
            "id": 773,
            "name": "France",
            "shortName": "France",
            "tla": "FRA",
            "crestUrl": "https://crests.football-data.org/773.svg"
        }
    },
    "scorers": [
        {
            "player": {
                "id": 8004,
                "name": "Harry Kane",
                "firstName": "Harry",
                "lastName": null,
                "dateOfBirth": "1993-07-28",
                "countryOfBirth": "England",
                "nationality": "England",
                "position": "Attacker",
                "shirtNumber": null,
                "lastUpdated": "2020-11-26T02:25:00Z"
            },
            "team": {
                "id": 770,
                "name": "England"
            },
            "numberOfGoals": 6
        },
        {
            "player": {
                "id": 3690,
                "name": "Denis Cheryshev",
                "firstName": "Denis",
                "lastName": null,
                "dateOfBirth": "1990-12-26",
                "countryOfBirth": "Russia",
                "nationality": "Russia",
                "position": "Attacker",
                "shirtNumber": null,
                "lastUpdated": "2020-09-07T21:26:08Z"
            },
            "team": {
                "id": 808,
                "name": "Russia"
            },
            "numberOfGoals": 4
        },
        {
            "player": {
                "id": 44,
                "name": "Cristiano Ronaldo",
                "firstName": "Cristiano Ronaldo",
                "lastName": null,
                "dateOfBirth": "1985-02-05",
                "countryOfBirth": "Portugal",
                "nationality": "Portugal",
                "position": "Attacker",
                "shirtNumber": null,
                "lastUpdated": "2020-11-26T02:19:40Z"
            },
            "team": {
                "id": 765,
                "name": "Portugal"
            },
            "numberOfGoals": 4
        },
        {
            "player": {
                "id": 114,
                "name": "Antoine Griezmann",
                "firstName": "Antoine",
                "lastName": null,
                "dateOfBirth": "1991-03-21",
                "countryOfBirth": "France",
                "nationality": "France",
                "position": "Attacker",
                "shirtNumber": null,
                "lastUpdated": "2020-11-26T02:18:24Z"
            },
            "team": {
                "id": 773,
                "name": "France"
            },
            "numberOfGoals": 4
        },
        {
            "player": {
                "id": 3662,
                "name": "Romelu Lukaku",
                "firstName": "Romelu",
                "lastName": null,
                "dateOfBirth": "1993-05-13",
                "countryOfBirth": "Belgium",
                "nationality": "Belgium",
                "position": "Attacker",
                "shirtNumber": null,
                "lastUpdated": "2020-11-26T02:19:38Z"
            },
            "team": {
                "id": 805,
                "name": "Belgium"
            },
            "numberOfGoals": 4
        },
        {
            "player": {
                "id": 3374,
                "name": "Kylian Mbappé",
                "firstName": "Kylian Sanmi",
                "lastName": null,
                "dateOfBirth": "1998-12-20",
                "countryOfBirth": "France",
                "nationality": "France",
                "position": "Attacker",
                "shirtNumber": null,
                "lastUpdated": "2020-09-07T21:05:24Z"
            },
            "team": {
                "id": 773,
                "name": "France"
            },
            "numberOfGoals": 4
        },
        {
            "player": {
                "id": 8834,
                "name": "Artem Dzyuba",
                "firstName": "Artem",
                "lastName": null,
                "dateOfBirth": "1988-08-22",
                "countryOfBirth": "Russia",
                "nationality": "Russia",
                "position": "Attacker",
                "shirtNumber": null,
                "lastUpdated": "2020-11-26T02:13:44Z"
            },
            "team": {
                "id": 808,
                "name": "Russia"
            },
            "numberOfGoals": 3
        },
        {
            "player": {
                "id": 113,
                "name": "Diego Costa",
                "firstName": "Diego",
                "lastName": null,
                "dateOfBirth": "1988-10-07",
                "countryOfBirth": "Brazil",
                "nationality": "Spain",
                "position": "Attacker",
                "shirtNumber": null,
                "lastUpdated": "2020-09-07T21:25:52Z"
            },
            "team": {
                "id": 760,
                "name": "Spain"
            },
            "numberOfGoals": 3
        },
        {
            "player": {
                "id": 3653,
                "name": "Eden Hazard",
                "firstName": "Eden",
                "lastName": null,
                "dateOfBirth": "1991-01-07",
                "countryOfBirth": "Belgium",
                "nationality": "Belgium",
                "position": "Midfielder",
                "shirtNumber": null,
                "lastUpdated": "2020-11-26T02:18:30Z"
            },
            "team": {
                "id": 805,
                "name": "Belgium"
            },
            "numberOfGoals": 3
        },
        {
            "player": {
                "id": 3728,
                "name": "Yerry Mina",
                "firstName": "Yerry Fernando",
                "lastName": null,
                "dateOfBirth": "1994-09-23",
                "countryOfBirth": "Colombia",
                "nationality": "Colombia",
                "position": "Defender",
                "shirtNumber": null,
                "lastUpdated": "2020-09-07T20:49:36Z"
            },
            "team": {
                "id": 818,
                "name": "Colombia"
            },
            "numberOfGoals": 3
        }
    ]
}
*/
