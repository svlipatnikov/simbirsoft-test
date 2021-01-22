import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../context.js'
import './listOfAreas.css'

export default function ListOfAreas({ count, areas }) {
  console.log('---ListOfAreas')
  const { sendRequest, makeUrl } = useContext(Context)

  if (!count || !areas) {
    count = 0
    areas = []
  }

  return (
    <div className="content">
      <div className="content__count">Найдено: {count}</div>

      {areas.map((area) => (
        <Link
          to={`/areas/${area.id}`}
          onClick={() => sendRequest(makeUrl(['areas', area.id]))}
          className="content-item area__item"
          key={area.id}
        >
          <div className="content-item__inner interactive">
            <div className="area__header">{area.name}</div>
            <div className="area__info">
              <div>CountryCode: {area.countryCode}</div>
              <div>ParentArea: {area.parentArea}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
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
