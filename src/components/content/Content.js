import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListOfCompetitions from './listOfCompetitions/ListOfCompetitions'
import ListOfTeams from './listOfTeams/ListOfTeams'
import ListOfMatches from './listOfMatches/ListOfMatches'
import ListOfAreas from './listOfAreas/ListOfAreas'
import Competition from './competition/Competition'
import './content.css'

export default function Content({ data }) {
  const path = window.location.pathname
  console.log('--Content | path:', path, ' | data: ', data)

  if (data === undefined) {
    return null
  }

  if (data.message) {
    return (
      <div className="content">
        <div className="content__message">{data.message}</div>
      </div>
    )
  }

  return (
    <Switch>
      <Route path={`/competitions/:id/teams`}>
        <ListOfTeams count={data.count} teams={data.teams} />
      </Route>

      {/* <Route path={`/competitions/:id/standings`}>
        <ListOfTeams count={data.count} teams={data.teams} />
      </Route> */}

      <Route path={`/competitions/:id/matches`}>
        <ListOfMatches count={data.count} matches={data.matches} />
      </Route>

      <Route exact path={`/competitions/:id`}>
        <Competition info={data} />
      </Route>

      <Route exact path="/competitions">
        <ListOfCompetitions data={data} />
      </Route>

      <Route path="/teams">
        <ListOfTeams count={data.count} teams={data.teams} />
      </Route>

      <Route path="/matches">
        <ListOfMatches count={data.count} matches={data.matches} />
      </Route>

      <Route path="/areas">
        <ListOfAreas count={data.count} areas={data.areas} />
      </Route>

      <Route>
        <div className="content">
          <pre className="json-text">{JSON.stringify(data, null, '    ')}</pre>
        </div>
      </Route>
    </Switch>
  )
}
