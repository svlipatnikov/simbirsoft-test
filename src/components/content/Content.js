import React from 'react'
import ListOfCompetitions from './ListOfCompetitions.js'
import Competition from './Competition.js'
import './content.css'

export default function Content({ data, dataType, status }) {
  console.log('Тип данных контента: ', dataType)

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

    default:
      return (
        <div className="content">
          <pre className="json-text">{JSON.stringify(data, null, '    ')}</pre>
        </div>
      )
  }
}
