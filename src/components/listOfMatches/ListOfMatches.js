import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { sendRequest } from '../const'
import { Context } from '../../context.js'
import './listOfMatches.css'

export default function ListOfMatches() {
  const [data, setData] = useState(undefined)
  const { params } = useContext(Context)

  // Component Did Mount
  useEffect(() => {
    console.log('---ListOfMatches---  params:', params)
    sendRequest(setData)
  }, [params])

  if (data === undefined || !data.matches) return null
  if (data.message)
    return <div className="content__message">{data.message}</div>

  return (
    <>
      <div className="content__count">Найдено: {data.count}</div>
      {data.matches.map((match) => (
        <div className="content-item match" key={match.id}>
          <div className="content-item__inner">
            <div className="match__section">
              <Link
                to={`/teams/${match.homeTeam.id}`}
                className="button button__name match__teams"
              >
                {match.homeTeam.name}
              </Link>
              <div className="match__score">
                <div>{match.score.fullTime.homeTeam}</div>
                <div>{match.status !== 'FINISHED' ? ' - ' : ' : '}</div>
                <div>{match.score.fullTime.awayTeam}</div>
              </div>
              <Link
                to={`/teams/${match.awayTeam.id}`}
                className="button button__name match__teams match__teams--away"
              >
                {match.awayTeam.name}
              </Link>
            </div>

            <div className="match__section">
              <div>
                Date: <b>{new Date(match.utcDate).toLocaleString()}</b>
              </div>
              <div>
                Status: <b>{match.status}</b>
              </div>
            </div>

            <div className="content-item__info">
              <div>
                {match.competition !== undefined
                  ? 'Competition: ' + match.competition.name
                  : null}
              </div>
              <div>Stage: {match.stage}</div>
              <div>Group: {match.group}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

// {
//   "id": 298148,
//   "competition": {
//       "id": 2013,
//       "name": "Série A",
//       "area": {
//           "name": "Brazil",
//           "code": "BRA",
//           "ensignUrl": null
//       }
//   },
//   "season": {
//       "id": 589,
//       "startDate": "2020-08-09",
//       "endDate": "2021-02-24",
//       "currentMatchday": 28,
//       "winner": null
//   },
//   "utcDate": "2021-01-08T00:00:00Z",
//   "status": "FINISHED",
//   "matchday": 28,
//   "stage": "REGULAR_SEASON",
//   "group": "Regular Season",
//   "lastUpdated": "2021-01-08T03:59:36Z",
//   "odds": {
//       "msg": "Activate Odds-Package in User-Panel to retrieve odds."
//   },
//   "score": {
//       "winner": "DRAW",
//       "duration": "REGULAR",
//       "fullTime": {
//           "homeTeam": 0,
//           "awayTeam": 0
//       },
//       "halfTime": {
//           "homeTeam": 0,
//           "awayTeam": 0
//       },
//       "extraTime": {
//           "homeTeam": null,
//           "awayTeam": null
//       },
//       "penalties": {
//           "homeTeam": null,
//           "awayTeam": null
//       }
//   },
//   "homeTeam": {
//       "id": 3988,
//       "name": "AC Goianiense"
//   },
//   "awayTeam": {
//       "id": 1780,
//       "name": "CR Vasco da Gama"
//   },
//   "referees": [
//       {
//           "id": 11143,
//           "name": "Savio Pereira",
//           "role": "MAIN_REFEREE",
//           "nationality": "Brazil"
//       },
//       {
//           "id": 11144,
//           "name": "Daniel Henrique da Silva Andrade",
//           "role": "ASSISTANT_N1",
//           "nationality": "Brazil"
//       },
//       {
//           "id": 19409,
//           "name": "Jose Reinaldo do Nascimento Júnior",
//           "role": "ASSISTANT_N2",
//           "nationality": "Brazil"
//       },
//       {
//           "id": 122347,
//           "name": "Rubens Paulo dos Santos",
//           "role": "FOURTH_OFFICIAL",
//           "nationality": "Brazil"
//       }
//   ]
// },
