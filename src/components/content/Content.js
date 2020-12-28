import React, { useState, useEffect } from 'react'
import './content.css'

export default function Content() {
  // const url = 'https://jsonplaceholder.typicode.com/users'
  const url = 'http://api.football-data.org/v2/matches'

  function sendRequest(method, url) {
    return fetch(url, {
      headers: { 'X-Auth-Token': '8c4f30d4f4354979ac043901839c7664' },
      dataType: 'json',
      type: 'GET',
    }).then((response) => {
      if (response.ok) {
        return response.json()
      }

      return response.json().then((error) => {
        const e = new Error('Что-то пошло не так')
        e.data = console.error
        throw e
      })
    })
  }

  const [jsonData, setJsonData] = useState({})

  useEffect(() => {
    sendRequest('Get', url)
      .then((data) => {
        console.log(typeof data)
        console.log(data)
        setJsonData(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return <pre className="json-text">{JSON.stringify(jsonData, null, ' ')}</pre>
}
