import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sendRequest } from '../const'
import './matchInfo.css'

export default function MatchInfo() {
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
    <div className="content-item match">
      <div className="content-item__inner">
        <div className="match__section match__section--flex">
          <Link
            to={`/teams/${data.match.homeTeam.id}`}
            className="button button__name match__teams"
          >
            {data.match.homeTeam.name}
          </Link>
          <div className="match__score">
            <div>{data.match.score.fullTime.homeTeam}</div>
            <div>{data.match.status !== 'FINISHED' ? ' - ' : ' : '}</div>
            <div>{data.match.score.fullTime.awayTeam}</div>
          </div>
          <Link
            to={`/teams/${data.match.awayTeam.id}`}
            className="button button__name match__teams match__teams--away"
          >
            {data.match.awayTeam.name}
          </Link>
        </div>

        <div className="match__section">
          <b>Match info</b>
          <table className="content-item__info">
            <tbody>
              <tr>
                <td>Date</td>
                <td>{new Date(data.match.utcDate).toLocaleString()}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{data.match.status}</td>
              </tr>
              <tr>
                <td>Competition</td>
                <td>
                  {data.match.competition !== undefined
                    ? data.match.competition.name
                    : ''}
                </td>
              </tr>
              <tr>
                <td>Venue:</td>
                <td>{data.match.venue}</td>
              </tr>
              <tr>
                <td>Stage:</td>
                <td>{data.match.stage}</td>
              </tr>
              <tr>
                <td>Group:</td>
                <td> {data.match.group}</td>
              </tr>
            </tbody>
          </table>

          <div className="content-item__info">
            Referees:
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Name</th>
                  <th>Nationality</th>
                </tr>
              </thead>
              <tbody>
                {data.match.referees.map((ref) => (
                  <tr
                    className="content-item__info content-item__info--small"
                    key={ref.name}
                  >
                    <td>{ref.role}</td>
                    <td>{ref.name}</td>
                    <td>{ref.nationality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="match__section">
          <b>Head to head info</b>
          <table className="content-item__info">
            <tr>
              <td>Matches:</td>
              <td>{data.head2head.numberOfMatches}</td>
            </tr>
            <tr>
              <td>Total Goals:</td>
              <td>{data.head2head.totalGoals}</td>
            </tr>
            <tr>
              <td>Wins:</td>
              <td>
                {data.head2head.homeTeam.wins}
                {' - '}
                {data.head2head.awayTeam.wins}
              </td>
            </tr>
            <tr>
              <td>Draws:</td>
              <td>
                {data.head2head.homeTeam.draws}
                {' - '}
                {data.head2head.awayTeam.draws}
              </td>
            </tr>
            <tr>
              <td>Losses:</td>
              <td>
                {data.head2head.homeTeam.losses}
                {' - '}
                {data.head2head.awayTeam.losses}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

/*
{
    "head2head": {
        "numberOfMatches": 8,
        "totalGoals": 17,
        "homeTeam": {
            "id": 1777,
            "name": "EC Bahia",
            "wins": 2,
            "draws": 3,
            "losses": 3
        },
        "awayTeam": {
            "id": 1765,
            "name": "Fluminense FC",
            "wins": 3,
            "draws": 3,
            "losses": 2
        }
    },
    "match": {
        "id": 298209,
        "competition": {
            "id": 2013,
            "name": "Série A",
            "area": {
                "name": "Brazil",
                "code": "BRA",
                "ensignUrl": null
            }
        },
        "season": {
            "id": 589,
            "startDate": "2020-08-09",
            "endDate": "2021-02-24",
            "currentMatchday": 34,
            "winner": null
        },
        "utcDate": "2021-02-04T00:30:00Z",
        "status": "FINISHED",
        "venue": "Estádio Governador Roberto Santos",
        "matchday": 34,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2021-02-04T04:29:44Z",
        "odds": {
            "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
            "winner": "AWAY_TEAM",
            "duration": "REGULAR",
            "fullTime": {
                "homeTeam": 0,
                "awayTeam": 1
            },
            "halfTime": {
                "homeTeam": 0,
                "awayTeam": 1
            },
            "extraTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "penalties": {
                "homeTeam": null,
                "awayTeam": null
            }
        },
        "homeTeam": {
            "id": 1777,
            "name": "EC Bahia"
        },
        "awayTeam": {
            "id": 1765,
            "name": "Fluminense FC"
        },
        "referees": [
            {
                "id": 11237,
                "name": "Flavio Rodrigues De Souza",
                "role": "MAIN_REFEREE",
                "nationality": "Brazil"
            },
            {
                "id": 11468,
                "name": "Marcelo Van Gasse",
                "role": "ASSISTANT_N1",
                "nationality": "Brazil"
            },
            {
                "id": 11263,
                "name": "Luiz Alberto Andrini Nogueira",
                "role": "ASSISTANT_N2",
                "nationality": "Brazil"
            },
            {
                "id": 19013,
                "name": "Ricarle Gonçalves Batista",
                "role": "FOURTH_OFFICIAL",
                "nationality": "Brazil"
            },
            {
                "id": 11137,
                "name": "Rodrigo D'Alonso Ferreira",
                "role": "VIDEO_ASSISTANT_REFEREE",
                "nationality": "Brazil"
            }
        ]
    }
}
*/
