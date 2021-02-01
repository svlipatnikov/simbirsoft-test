import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ListOfCompetitions from '../listOfCompetitions/ListOfCompetitions'
import ListOfMatches from '../listOfMatches/ListOfMatches'
import ListOfTeams from '../listOfTeams/ListOfTeams'
import ListOfAreas from '../listOfAreas/ListOfAreas'
import Competition from '../competition/Competition'
import Team from '../team/Team'
import Json from '../json/Json'
import './content.css'

export default function Content() {
  return (
    <div className="content">
      <Switch>
        <Redirect exact from="/" to="/matches" />
        <Route path="/competitions" component={Competitions} />
        <Route path="/teams" component={Teams} />
        <Route exact path="/matches" component={ListOfMatches} />
        <Route exact path="/areas" component={ListOfAreas} />
        <Route component={Json} />
      </Switch>
    </div>
  )
}

const Competitions = () => (
  <Switch>
    <Route exact path="/competitions" component={ListOfCompetitions} />
    <Route exact path="/competitions/:id" component={Competition} />
    <Route path="/competitions/:id/teams" component={ListOfTeams} />
    <Route path="/competitions/:id/matches" component={ListOfMatches} />
    <Route component={Json} />
  </Switch>
)

const Teams = () => (
  <Switch>
    <Route exact path="/teams" component={ListOfTeams} />
    <Route exact path="/teams/:id" component={Team} />
    <Route path="/teams/:id/matches" component={ListOfMatches} />
    <Route component={Json} />
  </Switch>
)
