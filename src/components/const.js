export const baseName = '/simbirsoft-test'

export function sendRequest(setDataFn, location = '') {
  const host = 'https://api.football-data.org/'
  const newUrl = new URL(host + 'v2' + location.pathname + location.search)
  newUrl.searchParams.delete('search')
  console.log('!fetch sendRequest url:', newUrl.toString())

  return fetch(newUrl.toString(), {
    headers: { 'X-Auth-Token': '8c4f30d4f4354979ac043901839c7664' },
    dataType: 'json',
    type: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log('fetch:', data)
      setDataFn(data)
    })
    .catch((err) => {
      // console.log(' !!! fetch ERROR !!! ', err)
      setDataFn({ message: err.toString() })
    })
}

// export function sendRequest(setDataFn) {
//   const host = 'https://api.football-data.org/'
//   const newUrl = new URL(
//     host + 'v2' + window.location.pathname + window.location.search
//   )
//   newUrl.searchParams.delete('search')
//   console.log('!fetch sendRequest')

//   return fetch(newUrl.toString(), {
//     headers: { 'X-Auth-Token': '8c4f30d4f4354979ac043901839c7664' },
//     dataType: 'json',
//     type: 'GET',
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log('fetch:', data)
//       setDataFn(data)
//     })
//     .catch((err) => {
//       // console.log(' !!! fetch ERROR !!! ', err)
//       setDataFn({ message: err.toString() })
//     })
// }
