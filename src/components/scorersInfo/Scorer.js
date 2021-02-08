import React from 'react'
import { Link } from 'react-router-dom'

export default function Scorer({ info }) {
  return (
    <tr>
      <td className="scorers__goals">{info.numberOfGoals}</td>

      <td className="scorers__player-name">
        <Link
          to={`/players/${info.player.id}`}
          className="scorers__player-name"
        >
          {info.player.name}
        </Link>
      </td>

      <td className="scorers__player-info">
        <div>Date of birth: {info.player.dateOfBirth}</div>
        <div>Nationality: {info.player.nationality}</div>
        <div>Position: {info.player.position}</div>
      </td>

      <td>
        <Link to={`/teams/${info.team.id}`} className="scorers__team">
          {info.team.name}
        </Link>
      </td>
    </tr>
  )
}
