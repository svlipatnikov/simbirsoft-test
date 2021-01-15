import React, { useContext } from 'react'
import { Context } from '../../../context.js'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import './listOfCompetitions.css'
import Competition from '../competition/Competition'

export default function ListOfCompetitions({ data }) {
  const { urlDispatch } = useContext(Context)

  let { path, url } = useRouteMatch()
  console.log('---ListOfCompetitions url:', url)
  console.log('---ListOfCompetitions path:', path)
  console.log('---window.location.path:', window.location.pathname)

  // проверка на undefined
  if (!data.count || !data.competitions) {
    return null
  }

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        <Competition info={data} />
      </Route>

      <Route exact path={path}>
        <div className="content">
          <div className="content__count">Найдено: {data.count}</div>

          {data.competitions.map((competition) => (
            <Link
              to={`${url}/${competition.id}`}
              className="competition-item"
              key={competition.id}
              onClick={() => {
                urlDispatch({
                  type: 'makeUrl',
                  payload: ['competitions', competition.id.toString()],
                })
              }}
            >
              <div className="competition-item__inner interactive">
                <div className="competition-item__name">{competition.name}</div>

                <div className="competition-item__info">
                  <div>
                    Area: {competition.area.countryCode} (
                    {competition.area.name})
                  </div>
                  <div>id: {competition.id}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Route>
    </Switch>

    // <div className="content">
    //   <div className="content__count">Найдено: {count}</div>

    //   {competitions.map((competition) => (
    //     <Link
    //       to={`${url}/${competition.id}`}
    //       className="competition-item"
    //       key={competition.id}
    //       onClick={() => {
    //         urlDispatch({
    //           type: 'makeUrl',
    //           payload: ['competitions', competition.id.toString()],
    //         })
    //       }}
    //     >
    //       <div className="competition-item__inner interactive">
    //         <div className="competition-item__name">{competition.name}</div>

    //         <div className="competition-item__info">
    //           <div>
    //             Area: {competition.area.countryCode} ({competition.area.name})
    //           </div>
    //           <div>id: {competition.id}</div>
    //         </div>
    //       </div>
    //     </Link>
    //   ))}
    // </div>
  )
}
