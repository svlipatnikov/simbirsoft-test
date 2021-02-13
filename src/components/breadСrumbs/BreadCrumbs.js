import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './breadCrumbs.css'

export default function BreadCrumbs() {
  const location = useLocation()
  const [navArr, setNavArr] = useState([])

  useEffect(() => {
    setNavArr(location.pathname.slice(1).split('/'))
  }, [location.pathname])

  const getNavLink = (num) => {
    let link = ''
    for (let i = 0; i <= num; i++) {
      link = link + '/' + navArr[i]
    }
    return link
  }

  return (
    <div className="bread-crumbs">
      <div className="bread-crumbs__list">
        <Link to="/" className="bread-crumbs__item">
          Home
        </Link>
        {navArr.map((nav, i) => {
          return (
            <div>
              <span>/</span>
              <Link to={getNavLink(i)} className="bread-crumbs__item">
                {nav}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
