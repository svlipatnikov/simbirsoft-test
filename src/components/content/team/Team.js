import React, { useContext } from 'react'
import { Context } from '../../../context.js'
import { Link } from 'react-router-dom'
import './team.css'

export default function Team({ info }) {
  console.log('----Team:', info)
  const { sendRequest, makeUrl } = useContext(Context)

  if (info === undefined) return null

  return (
    <div className="content-item team">
      <div className="content-item__inner">
        <div className="team__header">
          <img className="team__img" src={info.crestUrl} />
          <div className="content-item__info">
            <div className="content-item__name">{info.name}</div>
            <div>
              <b>Area: </b>
              <Link
                to={`/areas/${info.area.id}`}
                onClick={() => sendRequest(makeUrl(['areas', info.area.id]))}
              >
                {info.area.name}
              </Link>
            </div>
            <div>
              <b>Address:</b> {info.address}
            </div>
            <div>
              <b>Phone:</b> {info.phone}
            </div>
            <div>
              <b>Website:</b> {info.website}
            </div>
            <div>
              <b>Email:</b> {info.email}
            </div>
            <div>
              <b>Founded:</b> {info.founded}
            </div>
            <div>
              <b>Club colors:</b> {info.clubColors}
            </div>
            <div>
              <b>Venue:</b> {info.venue}
            </div>
          </div>
        </div>
        <hr />
        <div>Active Competitions:</div>
        <div className="team__active-competitions">
          {info.activeCompetitions.map((competition) => (
            <Link
              to={`/competitions/${competition.id}`}
              key={competition.id}
              className="button team__competition"
              onClick={() =>
                sendRequest(makeUrl(['competitions', competition.id]))
              }
            >
              <div className="button__name">{competition.name}</div>
              <div className="button__info">Area: {competition.area.name}</div>
              <div className="button__info">Plan: {competition.plan}</div>
            </Link>
          ))}
        </div>
        <hr />
        <div>Matches:</div>
        <Link
          to={`${info.id}/matches`}
          className="button"
          onClick={() => sendRequest(makeUrl(['teams', info.id, 'matches']))}
        >
          <div className="button__name">Click to show list of matches</div>
        </Link>
        <hr />
        <div>Squad:</div>
        <div className="team__squad">
          {info.squad.map((player) => (
            <Link
              to={`/players/${player.id}`}
              key={player.id}
              className="button team__player"
              onClick={() => sendRequest(makeUrl(['players', player.id]))}
            >
              <div className="button__name">{player.name}</div>
              <div className="button__info-small">
                Position: {player.position}
              </div>
              <div className="button__info-small">
                Date of birth:{' '}
                {new Date(player.dateOfBirth).toLocaleDateString()}
              </div>
              <div className="button__info-small">
                Country of birth: {player.countryOfBirth}
              </div>
              <div className="button__info-small">
                Nationality: {player.nationality}
              </div>
              <div className="button__info-small">
                Shirt number: {player.shirtNumber}
              </div>
              <div className="button__info-small">Role: {player.role}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

/*
{
    "id": 57,
    "area": {
        "id": 2072,
        "name": "England"
    },
    "activeCompetitions": [
        {
            "id": 2021,
            "area": {
                "id": 2072,
                "name": "England"
            },
            "name": "Premier League",
            "code": "PL",
            "plan": "TIER_ONE",
            "lastUpdated": "2021-01-20T02:25:01Z"
        },
        {
            "id": 2139,
            "area": {
                "id": 2072,
                "name": "England"
            },
            "name": "Football League Cup",
            "code": "FLC",
            "plan": "TIER_THREE",
            "lastUpdated": "2021-01-07T02:40:01Z"
        },
        {
            "id": 2146,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "UEFA Europa League",
            "code": "EL",
            "plan": "TIER_TWO",
            "lastUpdated": "2020-12-11T14:50:04Z"
        }
    ],
    "name": "Arsenal FC",
    "shortName": "Arsenal",
    "tla": "ARS",
    "crestUrl": "https://crests.football-data.org/57.svg",
    "address": "75 Drayton Park London N5 1BU",
    "phone": "+44 (020) 76195003",
    "website": "http://www.arsenal.com",
    "email": "info@arsenal.co.uk",
    "founded": 1886,
    "clubColors": "Red / White",
    "venue": "Emirates Stadium",
    "squad": [
        {
            "id": 68,
            "name": "Dani Ceballos",
            "position": "Midfielder",
            "dateOfBirth": "1996-08-07T00:00:00Z",
            "countryOfBirth": "Spain",
            "nationality": "Spain",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 110,
            "name": "Thomas Partey",
            "position": "Midfielder",
            "dateOfBirth": "1993-06-13T00:00:00Z",
            "countryOfBirth": "Ghana",
            "nationality": "Ghana",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 137,
            "name": "Sokratis Papastathopoulos",
            "position": "DEFENDER",
            "dateOfBirth": "1988-06-09T00:00:00Z",
            "countryOfBirth": "Greece",
            "nationality": "Greece",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 3174,
            "name": "Bernd Leno",
            "position": "Goalkeeper",
            "dateOfBirth": "1992-03-04T00:00:00Z",
            "countryOfBirth": "Germany",
            "nationality": "Germany",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 3180,
            "name": "Mesut Özil",
            "position": "Midfielder",
            "dateOfBirth": "1988-10-15T00:00:00Z",
            "countryOfBirth": "Germany",
            "nationality": "Germany",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 3230,
            "name": "Willian",
            "position": "Attacker",
            "dateOfBirth": "1988-08-09T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 3244,
            "name": "Cédric",
            "position": "Defender",
            "dateOfBirth": "1991-08-31T00:00:00Z",
            "countryOfBirth": "Germany",
            "nationality": "Portugal",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 3477,
            "name": "Granit Xhaka",
            "position": "Midfielder",
            "dateOfBirth": "1992-09-27T00:00:00Z",
            "countryOfBirth": "Switzerland",
            "nationality": "Switzerland",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 3755,
            "name": "Mohamed El Neny",
            "position": "Midfielder",
            "dateOfBirth": "1992-07-11T00:00:00Z",
            "countryOfBirth": "Egypt",
            "nationality": "Egypt",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 3827,
            "name": "Rúnar Alex Rúnarsson",
            "position": "Goalkeeper",
            "dateOfBirth": "1995-02-18T00:00:00Z",
            "countryOfBirth": "Iceland",
            "nationality": "Iceland",
            "shirtNumber": 1,
            "role": "PLAYER"
        },
        {
            "id": 7647,
            "name": "Pablo Marí",
            "position": "Defender",
            "dateOfBirth": "1993-08-31T00:00:00Z",
            "countryOfBirth": "Spain",
            "nationality": "Spain",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7779,
            "name": "Matt Macey",
            "position": "Goalkeeper",
            "dateOfBirth": "1994-09-09T00:00:00Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7783,
            "name": "Héctor Bellerín",
            "position": "Defender",
            "dateOfBirth": "1995-03-19T00:00:00Z",
            "countryOfBirth": "Spain",
            "nationality": "Spain",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7784,
            "name": "Rob Holding",
            "position": "Defender",
            "dateOfBirth": "1995-09-20T00:00:00Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7785,
            "name": "Shkodran Mustafi",
            "position": "Defender",
            "dateOfBirth": "1992-04-17T00:00:00Z",
            "countryOfBirth": "Germany",
            "nationality": "Germany",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7786,
            "name": "Sead Kolašinac",
            "position": "DEFENDER",
            "dateOfBirth": "1993-06-20T00:00:00Z",
            "countryOfBirth": "Germany",
            "nationality": "Bosnia and Herzegovina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7787,
            "name": "Calum Chambers",
            "position": "Defender",
            "dateOfBirth": "1995-01-20T00:00:00Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7792,
            "name": "Ainsley Maitland-Niles",
            "position": "Midfielder",
            "dateOfBirth": "1997-08-29T00:00:00Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7797,
            "name": "Alexandre Lacazette",
            "position": "Attacker",
            "dateOfBirth": "1991-05-28T00:00:00Z",
            "countryOfBirth": "France",
            "nationality": "France",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7798,
            "name": "Joe Willock",
            "position": "Midfielder",
            "dateOfBirth": "1999-08-20T00:00:00Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7799,
            "name": "Reiss Nelson",
            "position": "Attacker",
            "dateOfBirth": "1999-12-10T00:00:00Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7800,
            "name": "Eddie Nketiah",
            "position": "Attacker",
            "dateOfBirth": "1999-05-30T00:00:00Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7801,
            "name": "Pierre-Emerick Aubameyang",
            "position": "ATTACKER",
            "dateOfBirth": "1989-06-18T00:00:00Z",
            "countryOfBirth": "France",
            "nationality": "Gabon",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 7805,
            "name": "David Luiz",
            "position": "Defender",
            "dateOfBirth": "1987-04-22T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 8412,
            "name": "Nicolas Pépé",
            "position": "Attacker",
            "dateOfBirth": "1995-05-29T00:00:00Z",
            "countryOfBirth": "France",
            "nationality": "Côte d’Ivoire",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 11619,
            "name": "Arteta",
            "position": null,
            "dateOfBirth": "1982-03-26T00:00:00Z",
            "countryOfBirth": "Spain",
            "nationality": "Spain",
            "shirtNumber": null,
            "role": "COACH"
        },
        {
            "id": 15615,
            "name": "Kieran Tierney",
            "position": "Defender",
            "dateOfBirth": "1997-06-05T00:00:00Z",
            "countryOfBirth": "Isle of Man",
            "nationality": "Scotland",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 23128,
            "name": "Gabriel",
            "position": "Defender",
            "dateOfBirth": "1997-12-19T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 61450,
            "name": "Martinelli",
            "position": "Attacker",
            "dateOfBirth": "2001-06-18T00:00:00Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 80171,
            "name": "William Saliba",
            "position": "Defender",
            "dateOfBirth": "2001-03-24T00:00:00Z",
            "countryOfBirth": "France",
            "nationality": "France",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 85570,
            "name": "Emile Smith Rowe",
            "position": "Midfielder",
            "dateOfBirth": "2000-07-28T00:00:00Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 99813,
            "name": "Bukayo Saka",
            "position": "Attacker",
            "dateOfBirth": "2001-09-05T00:00:00Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 131040,
            "name": "Folarin Balogun",
            "position": "Attacker",
            "dateOfBirth": "2001-07-03T00:00:00Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 153843,
            "name": "Karl Jakob Hein",
            "position": "Goalkeeper",
            "dateOfBirth": "2002-04-13T00:00:00Z",
            "countryOfBirth": "Estonia",
            "nationality": "Estonia",
            "shirtNumber": null,
            "role": "PLAYER"
        }
    ],
    "lastUpdated": "2020-11-26T02:15:20Z"
}
*/
