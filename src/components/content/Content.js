import React from 'react'
import Competition from './Competition'
import './content.css'
import { resources } from '../resources.js'

export default function Content({ data, resource }) {
  // функция определения типа данных контента
  function getDataType(path) {
    let type
    let pathArr = path.split('/')

    resources.forEach((item) => {
      let resArr = item.pathname.split('/')
      resArr.forEach((resPart, id) => {
        if (resPart === '{id}') {
          resPart = pathArr[id]
        }
      })
      // type = item.dataType
    })
    console.log('Тип данных контента: ', type)
    return type
  }

  switch (data.hasOwnProperty('message') ? 'message' : getDataType(resource)) {
    case 'message':
      return (
        <div className="content">
          <div className="content content__message">{data.message}</div>
        </div>
      )

    case 'competitionsList':
      if (data.competitions) {
        return (
          <div className="content">
            <div className="content__count">Найдено: {data.count}</div>
            {data.competitions.map((competition, id) => (
              <Competition info={competition} key={id} />
            ))}
          </div>
        )
      }

    default:
      return (
        <div className="content">
          <pre className="json-text">{JSON.stringify(data, null, '    ')}</pre>
        </div>
      )
  }
}
