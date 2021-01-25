import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../context.js'
import './listOfAreas.css'

export default function ListOfAreas({ areas }) {
  console.log('---ListOfAreas')
  const { sendRequest, makeUrl } = useContext(Context)

  if (areas === undefined) return null

  return (
    <>
      {areas.map((area) => (
        <Link
          to={`/areas/${area.id}`}
          onClick={() => sendRequest(makeUrl(['areas', area.id]))}
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
