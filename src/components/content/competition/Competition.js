import React, { useContext } from 'react'
import { Context } from '../../../context.js'
import { Link } from 'react-router-dom'
import './competition.css'

export default function Competition({ info }) {
  const { urlDispatch, setDataType } = useContext(Context)

  console.log('---Competition')

  // проверка на undefined
  if (info.name === undefined || info === {}) {
    return null
  }

  return (
    <div className="content">
      <div className="competition">
        <div className="competition__inner">
          <div className="competition__name">{info.name}</div>
          <div className="competition__info">
            <div>Code: {info.code}</div>
            <div>Area: {info.area.name}</div>
            <div>Plan: {info.plan}</div>
          </div>
          <div className="competition__buttons-block">
            <Link
              to="/teams"
              className="competition__button"
              onClick={() => {
                urlDispatch({ type: 'addPath', payload: 'teams' })
                setDataType('listOfTeams')
              }}
            >
              Teams
            </Link>

            <button
              className="competition__button"
              onClick={() => {
                urlDispatch({ type: 'addPath', payload: 'standings' })
                setDataType('standings')
              }}
            >
              Standings
            </button>
            <button
              className="competition__button"
              onClick={() => {
                urlDispatch({ type: 'addPath', payload: 'matches' })
                setDataType('listOfMatches')
              }}
            >
              Matches
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// {
//   "id": 2000,
//   "area": {
//       "id": 2267,
//       "name": "World"
//   },
//   "name": "FIFA World Cup",
//   "code": "WC",
//   "emblemUrl": null,
//   "plan": "TIER_ONE",
//   "currentSeason": {
//       "id": 1,
//       "startDate": "2018-06-14",
//       "endDate": "2018-07-15",
//       "currentMatchday": 3,
//       "winner": {
//           "id": 773,
//           "name": "France",
//           "shortName": "France",
//           "tla": "FRA",
//           "crestUrl": "https://crests.football-data.org/773.svg"
//       }
//   },
//   "seasons": [
//       {
//           "id": 1,
//           "startDate": "2018-06-14",
//           "endDate": "2018-07-15",
//           "currentMatchday": 3,
//           "winner": {
//               "id": 773,
//               "name": "France",
//               "shortName": "France",
//               "tla": "FRA",
//               "crestUrl": "https://crests.football-data.org/773.svg"
//           }
//       },
//       {
//           "id": 464,
//           "startDate": "2014-06-12",
//           "endDate": "2014-07-13",
//           "currentMatchday": null,
//           "winner": null
//       }
//   ],
//   "lastUpdated": "2020-09-10T13:58:14Z"
// }
