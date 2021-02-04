import React from 'react'
import './matchInfo.css'

export default function MatchInfo() {
  return (
    <div className="content-item match">
      <div cn="content-item__inner">MatchInfo</div>
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
