import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../context.js'
import { Link } from 'react-router-dom'
import { sendRequest } from '../const'
import './listOfAreas.css'

export default function ListOfAreas() {
  const [data, setData] = useState(undefined)
  const { params } = useContext(Context)

  useEffect(() => {
    console.log('---ListOfAreas--- Change params')
    sendRequest(setData)
  }, [params])

  // Component Did Mount
  // useEffect(() => {
  //   console.log('---ListOfAreas--- Component Did Mount')
  //   sendRequest(setData)
  // }, [])

  if (data === undefined) return null
  if (data.message)
    return <div className="content__message">{data.message}</div>

  return (
    <>
      <div className="content__count">Найдено: {data.count}</div>
      {data.areas.map((area) => (
        <Link
          to={`/areas/${area.id}`}
          className="content-item area-item"
          key={area.id}
        >
          <div className="content-item__inner content-item__link">
            <div className="content-item__name content-item__name--small">
              {area.name}
            </div>
            <div className="content-item__info">
              <div>CountryCode: {area.countryCode}</div>
              <div>ParentArea: {area.parentArea}</div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

// {
//   "count": 273,
//   "filters": {},
//   "areas": [
//       {
//           "id": 2000,
//           "name": "Afghanistan",
//           "countryCode": "AFG",
//           "ensignUrl": null,
//           "parentAreaId": 2014,
//           "parentArea": "Asia"
//       },
