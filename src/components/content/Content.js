import React from 'react'
import ListOfCompetitions from './listOfCompetitions/ListOfCompetitions'
import ListOfTeams from './listOfTeams/ListOfTeams'
import ListOfMatches from './listOfMatches/ListOfMatches'
import ListOfAreas from './listOfAreas/ListOfAreas'
import Competition from './competition/Competition'
import './content.css'
import { useParams } from 'react-router-dom'

export default function Content({ data, dataType }) {
  console.log('Тип данных контента: ', dataType)

  let { path } = useParams()
  console.log('path:', path)

  if (data === undefined) {
    return null
  }

  if (data.message) {
    return (
      <div className="content">
        <div className="content content__message">{data.message}</div>
      </div>
    )
  }

  switch (dataType) {
    case 'listOfCompetitions':
      return (
        <ListOfCompetitions
          count={data.count}
          competitions={data.competitions}
        />
      )

    case 'competition':
      return <Competition info={data} />

    case 'listOfTeams':
      return <ListOfTeams count={data.count} teams={data.teams} />

    case 'listOfMatches':
      return <ListOfMatches count={data.count} matches={data.matches} />

    case 'listOfAreas':
      return <ListOfAreas count={data.count} areas={data.areas} />

    default:
      return (
        <div className="content">
          <pre className="json-text">{JSON.stringify(data, null, '    ')}</pre>
        </div>
      )
  }
}
