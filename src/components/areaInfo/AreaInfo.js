import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context.js'
import { sendRequest } from '../const'
import './areaInfo.css'

export default function AreaInfo() {
  const [data, setData] = useState(undefined)
  const { params } = useContext(Context)

  // Component Did Mount
  useEffect(() => {
    console.log('---Area---')
    sendRequest(setData)
  }, [params])

  if (data === undefined) return null
  if (data.message)
    return <div className="content__message">{data.message}</div>

  return (
    <div className="content-item area">
      <div className="content-item__inner">
        <div className="content-item__name">{data.name}</div>

        <div className="content-item__info">
          CountryCode: {data.countryCode}
        </div>

        <div className="content-item__info">
          EnsignUrl: {data.ensignUrl ? data.ensignUrl : ''}
        </div>

        <div className="content-item__info">ParentArea:</div>
        {data.parentAreaId ? (
          <Link
            to={`/areas/${data.parentAreaId}`}
            className="button button__name"
          >
            {data.parentArea}
          </Link>
        ) : (
          ''
        )}

        <div className="content-item__info">
          ChildAreas:
          {data.childAreas
            ? data.childAreas.map((area) => (
                <Link to={`/areas/${area.id}`} className="button button__name">
                  {area.name}
                </Link>
              ))
            : ''}
        </div>
      </div>
    </div>
  )
}

/*
{
    "id": 2000,
    "name": "Afghanistan",
    "countryCode": "AFG",
    "ensignUrl": null,
    "parentAreaId": 2014,
    "parentArea": "Asia",
    "childAreas": []
}
*/
