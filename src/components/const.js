export function sendRequest(setDataFn) {
  const host = 'https://api.football-data.org/'
  const newUrl = new URL(
    host + 'v2' + window.location.pathname + window.location.search
  )
  newUrl.searchParams.delete('search')
  console.log('!sendRequest: ', newUrl.toString())
  return fetch(
    // host + 'v2' + window.location.pathname + window.location.search,
    newUrl.toString(),
    {
      headers: { 'X-Auth-Token': '8c4f30d4f4354979ac043901839c7664' },
      dataType: 'json',
      type: 'GET',
    }
  )
    .then((response) => response.json())
    .then((data) => setDataFn(data))
    .catch((err) => setDataFn({ message: err }))
}
