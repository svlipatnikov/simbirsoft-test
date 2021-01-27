const host = 'https://api.football-data.org/'

export function sendRequest(setDataFn) {
  return fetch(
    host + 'v2' + window.location.pathname + window.location.search,
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
