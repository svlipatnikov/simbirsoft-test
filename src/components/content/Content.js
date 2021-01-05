import React from 'react'
import Competition from './Competition'
import './content.css'

const dataTypes = ['message', 'competitions']

export default function Content({ data, resource }) {
  // функция определения типа данных контента
  function getDataType(objData) {
    console.log(resource)
    let dataType
    dataTypes.forEach((type) => {
      if (objData.hasOwnProperty(type)) dataType = type
    })
    console.log('Тип данных контента: ', dataType)
    return dataType
  }

  switch (getDataType(data)) {
    case 'message':
      return (
        <div className="content">
          <div className="content content__message">{data.message}</div>
        </div>
      )

    case 'competitions':
      return (
        <div className="content">
          <div className="content__count">Найдено: {data.count}</div>
          {data.competitions.map((competition, id) => (
            <Competition info={competition} key={id} />
          ))}
        </div>
      )

    default:
      return (
        <div className="content">
          <pre className="json-text">{JSON.stringify(data, null, '    ')}</pre>
        </div>
      )
  }
}
