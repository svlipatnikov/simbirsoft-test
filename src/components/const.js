export const baseName = '/simbirsoft-test'

export function sendRequest(setDataFn, location = '') {
  const host = 'https://api.football-data.org/'
  const newUrl = new URL(host + 'v2' + location.pathname + location.search)
  newUrl.searchParams.delete('search')
  console.log('!fetch url:', newUrl.toString())

  // установка токена из localStorage
  let token = localStorage.getItem('token')
  if (!token) token = '8c4f30d4f4354979ac043901839c7664'

  return fetch(newUrl.toString(), {
    headers: { 'X-Auth-Token': token },
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
