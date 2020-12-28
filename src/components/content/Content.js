import React, { useState, useEffect } from 'react'

export default function Content() {
  const url = 'https://jsonplaceholder.typicode.com/users'

  const [data, setData] = useState({})

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((inputData) => {
        setData(inputData)
        console.log(typeof inputData)
        console.log(inputData)
        console.log(JSON.stringify(inputData, null, ' '))
      })
  }, [])

  return <div>{JSON.stringify(data[0], null, ' ')}</div>
}
