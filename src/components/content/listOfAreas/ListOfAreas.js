import React from 'react'
import './listOfAreas.css'

export default function ListOfAreas({ count, areas }) {
  console.log('---ListOfAreas')
  if (!count || !areas) {
    count = 0
    areas = []
  }

  return (
    <div className="content">
      <div className="content__count">Найдено: {count}</div>

      {areas.map((area, key) => {
        return (
          <div className="content-item area__item" key={key}>
            <div className="content-item__inner">
              <div className="area__header">{area.name}</div>
              <div className="area__info">
                <div>CountryCode: {area.countryCode}</div>
                <div>ParentArea: {area.parentArea}</div>
              </div>
            </div>
          </div>
        )
      })}
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
