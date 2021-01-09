import React from 'react'
import './listOfMatches.css'
import '../content.css'

export default function ListOfMatches({ count, matches }) {
  if (!count || !matches) {
    return null
  }

  return (
    <div className="content">
      <div className="content__count">Найдено: {count}</div>

      {matches.map((match, key) => {
        return (
          <div className="match__item">
            <div className="match__inner">
              <div className="team__header">
                <div className="match__teams">{match.homeTeam.name}</div>
                <div className="match__score">
                  {match.score.fullTime.homeTeam}
                  {match.status === 'SCHEDULED' ? ' vs ' : ' : '}
                  {match.score.fullTime.awayTeam}
                </div>
                <div className="match__teams" style={{ textAlign: 'right' }}>
                  {match.awayTeam.name}
                </div>
              </div>

              <div className="team__header">
                <div>
                  Date: <b>{new Date(match.utcDate).toLocaleString()}</b>
                </div>
                <div>
                  Status: <b>{match.status}</b>
                </div>
              </div>

              <div className="match__info">
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
        )
      })}
    </div>
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
