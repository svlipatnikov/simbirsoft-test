import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import ListOfCompetitions from '../listOfCompetitions/ListOfCompetitions'
import ListOfMatches from '../listOfMatches/ListOfMatches'
import ListOfTeams from '../listOfTeams/ListOfTeams'
import ListOfAreas from '../listOfAreas/ListOfAreas'

import CompetitionInfo from '../competitionInfo/CompetitionInfo'
import PlayerInfo from '../playerInfo/PlayerInfo'
import AreaInfo from '../areaInfo/AreaInfo'
import MatchInfo from '../matchInfo/MatchInfo'
import TeamInfo from '../teamInfo/TeamInfo'
import ScorersInfo from '../scorersInfo/ScorersInfo'
import Standings from '../standings/Standings'

import './content.css'

export default function Content() {
  return (
    <div className="content">
      <Switch>
        <Redirect exact from="/" to="/matches" />
        <Route path="/competitions" component={Competitions} />
        <Route path="/teams" component={Teams} />
        <Route path="/matches" component={Matches} />
        <Route path="/areas" component={Areas} />
        <Route path="/players/:id" component={Players} />
      </Switch>
    </div>
  )
}

/* ===============Competitions============== */

const Competitions = () => (
  <Switch>
    <Route exact path="/competitions" component={ListOfCompetitions} />
    <Route path="/competitions/:id" component={CompetitionId} />
  </Switch>
)

const CompetitionId = () => (
  <Switch>
    <Route exact path="/competitions/:id" component={CompetitionInfo} />
    <Route path="/competitions/:id/teams" component={ListOfTeams} />
    <Route path="/competitions/:id/matches" component={ListOfMatches} />
    <Route path="/competitions/:id/scorers" component={ScorersInfo} />
    <Route path="/competitions/:id/standings" component={Standings} />
  </Switch>
)

/* ===============Teams============== */

const Teams = () => (
  <Switch>
    <Route exact path="/teams" component={ListOfTeams} />
    <Route path="/teams/:id" component={TeamsId} />
  </Switch>
)

const TeamsId = () => (
  <Switch>
    <Route exact path="/teams/:id" component={TeamInfo} />
    <Route path="/teams/:id/matches" component={ListOfMatches} />
  </Switch>
)

/* ===============Matches============== */

const Matches = () => (
  <Switch>
    <Route exact path="/matches" component={ListOfMatches} />
    <Route path="/matches/:id" component={MatchInfo} />
  </Switch>
)

/* ===============Player============== */

const Players = () => (
  <Switch>
    <Route exact path="/players/:id" component={PlayerInfo} />
    <Route path="/players/:id/matches" component={ListOfMatches} />
  </Switch>
)

/* ===============Areas============== */

const Areas = () => (
  <Switch>
    <Route exact path="/areas" component={ListOfAreas} />
    <Route path="/areas/:id" component={AreaInfo} />
  </Switch>
)
