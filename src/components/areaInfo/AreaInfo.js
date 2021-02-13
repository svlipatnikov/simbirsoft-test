import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sendRequest } from '../../fetch.js'
import './areaInfo.css'

export default function AreaInfo() {
  const [data, setData] = useState(undefined)
  const location = useLocation()

  // Обновление контента при смене url
  useEffect(() => {
    sendRequest(setData, location)
  }, [location])

  // Проверка на undefined
  if (data === undefined) return null

  // Ошибка
  if (data.message)
    return <div className="content__message">{data.message}</div>

  return (
    <div className="content-item area">
      <div className="content-item__inner">
        <div className="area-info__container">
          {data.ensignUrl ? (
            <img className="area-info__img" src={data.ensignUrl} alt="img" />
          ) : null}
          <div className="content-item__name">{data.name}</div>
        </div>

        <div className="content-item__info">
          CountryCode: {data.countryCode}
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
