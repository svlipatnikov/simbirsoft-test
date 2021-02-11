import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../context.js'
import { sendRequest } from '../const'
import './listOfAreas.css'

export default function ListOfAreas() {
  const [data, setData] = useState(undefined)
  const { params } = useContext(Context)
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

  // Получаем значение search
  let search = ''
  params.forEach((p) => {
    if (p.type === 'search') search = p.value.toLocaleLowerCase()
  })
  console.log('---ListOfAreas--- search', search)

  // считаем count
  const searchCount = () => {
    let count = 0
    data.areas.forEach((area) => {
      if (area.name.toLocaleLowerCase().indexOf(search) !== -1) ++count
    })
    return count
  }

  return (
    <>
      <div className="content__count">
        Найдено: {search ? searchCount() : data.count}
      </div>
      {data.areas.map((area) => {
        if (area.name.toLocaleLowerCase().indexOf(search) !== -1)
          return (
            <Link
              to={`/areas/${area.id}`}
              className="content-item area-item"
              key={area.id}
            >
              <div className="content-item__inner content-item__link">
                <div className="area__container">
                  {area.ensignUrl ? (
                    <img className="area__img" src={area.ensignUrl} alt="img" />
                  ) : null}
                  <div className="content-item__name content-item__name--small">
                    {area.name}
                  </div>
                </div>
                <div className="content-item__info">
                  <div>CountryCode: {area.countryCode}</div>
                  <div>ParentArea: {area.parentArea}</div>
                </div>
              </div>
            </Link>
          )
        else return null
      })}
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
