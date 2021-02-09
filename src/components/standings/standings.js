import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sendRequest } from '../const'
import './standings.css'

export default function Standings() {
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
      <div className="content-item__inner standings">
        <div className="content-item__name">{data.competition.name}</div>
        <div>
          <b>Area: </b>
          <Link to={`/areas/${data.competition.area.id}`}>
            {data.competition.area.name}
          </Link>
        </div>

        <div>
          <b>Season: </b>
          {new Date(data.season.startDate).getFullYear()}
          {new Date(data.season.endDate).getFullYear() !==
          new Date(data.season.startDate).getFullYear()
            ? ` - ${new Date(data.season.endDate).getFullYear()}`
            : ''}
        </div>

        <div>
          <b>Standings:</b>
          {data.standings.map((standing) => {
            return (
              <div key={standing.type} className="standings__item">
                <div className="content-item__info">
                  Type: <b>{standing.type}</b>
                </div>
                <div className="content-item__info">
                  Stage: <b>{standing.stage}</b>
                </div>
                <table className="standings__table">
                  <thead>
                    <th></th>
                    <th>Team</th>
                    <th>G</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>P</th>
                    <th>Last 5</th>
                  </thead>
                  <tbody>
                    {standing.table.map((row) => {
                      return (
                        <tr key={row.team.id}>
                          <td>{row.position}</td>
                          <td className="standings__table__team">
                            <img
                              className="standings__table__team-img"
                              src={row.team.crestUrl}
                              alt="img"
                            />
                            <Link
                              to={`/teams/${row.team.id}`}
                              className="standings__table__team-name"
                            >
                              {row.team.name}
                            </Link>
                          </td>
                          <td>{row.playedGames}</td>
                          <td>{row.won}</td>
                          <td>{row.draw}</td>
                          <td>{row.lost}</td>
                          <td>{row.goalsFor}</td>
                          <td>{row.goalsAgainst}</td>
                          <td>{row.goalDifference}</td>
                          <td>{row.points}</td>
                          <td>{row.form}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
