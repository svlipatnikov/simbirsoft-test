import React from 'react'
// import './player.css'

export default function Player({ player }) {
  return (
    <div className="team__player">
      <div className="team__player-name">{player.name}</div>
      <div className="team__player-info">Position: {player.position}</div>
      <div className="team__player-info">
        Date of birth: {new Date(player.dateOfBirth).toLocaleDateString()}
      </div>
      <div className="team__player-info">
        Country of birth: {player.countryOfBirth}
      </div>
      <div className="team__player-info">Nationality: {player.nationality}</div>
      <div className="team__player-info">
        Shirt number: {player.shirtNumber}
      </div>
      <div className="team__player-info">Role: {player.role}</div>
    </div>
  )
}

// {
//   "id": 68,
//   "name": "Dani Ceballos",
//   "position": "Midfielder",
//   "dateOfBirth": "1996-08-07T00:00:00Z",
//   "countryOfBirth": "Spain",
//   "nationality": "Spain",
//   "shirtNumber": null,
//   "role": "PLAYER"
// },
