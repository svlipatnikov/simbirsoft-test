import React, { useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import ListOfCompetitions from './listOfCompetitions/ListOfCompetitions'
import ListOfTeams from './listOfTeams/ListOfTeams'
import ListOfMatches from './listOfMatches/ListOfMatches'
import ListOfAreas from './listOfAreas/ListOfAreas'
import Competition from './competition/Competition'
import Team from './team/Team'
import './content.css'

export default function Content({ data }) {
  console.log('--Content | data:', data)

  if (data === undefined) return null

  if (data.message) {
    return (
      <div className="content">
        <div className="content__message">{data.message}</div>
      </div>
    )
  }

  return (
    <div className="content">
      <Switch>
        <Route path={`/competitions/:id/teams`}>
          <ListOfTeams teams={data.teams} />
        </Route>

        {/* <Route path={`/competitions/:id/standings`}>
        <ListOfTeams count={data.count} teams={data.teams} />
      </Route> */}

        <Route path={`/competitions/:id/matches`}>
          <div className="content__count">Найдено: {data.count}</div>
          <ListOfMatches matches={data.matches} />
        </Route>

        <Route exact path={`/competitions/:id`}>
          <Competition info={data} />
        </Route>

        <Route exact path="/competitions">
          <div className="content__count">Найдено: {data.count}</div>
          <ListOfCompetitions competitions={data.competitions} />
        </Route>

        <Route path="/teams/:id/matches">
          <div className="content__count">Найдено: {data.count}</div>
          <ListOfMatches matches={data.matches} />
        </Route>

        <Route path="/teams/:id">
          <Team info={data} />
        </Route>

        <Route exact path="/teams">
          <div className="content__count">Найдено: {data.count}</div>
          <ListOfTeams teams={data.teams} />
        </Route>

        <Route exact path="/matches">
          <div className="content__count">Найдено: {data.count}</div>
          <ListOfMatches matches={data.matches} />
        </Route>

        <Route exact path="/areas">
          <div className="content__count">Найдено: {data.count}</div>
          <ListOfAreas areas={data.areas} />
        </Route>

        <Route>
          <div className="content">
            <pre className="json-text">
              {JSON.stringify(data, null, '    ')}
            </pre>
          </div>
        </Route>
      </Switch>
    </div>
  )
}
