export function sendRequest(setDataFn, location = '') {
  // формирование url запроса на основе данных из текущего url
  const host = 'https://api.football-data.org/'
  const newUrl = new URL(host + 'v2' + location.pathname + location.search)
  newUrl.searchParams.delete('search')

  // установка токена из localStorage
  let token = localStorage.getItem('token')
  if (!token) token = '8c4f30d4f4354979ac043901839c7664'

  // запрос данных с сервера API
  fetch(newUrl.toString(), {
    headers: { 'X-Auth-Token': token },
    dataType: 'json',
    type: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      setDataFn(data)
    })
    .catch((err) => {
      setDataFn({ message: err.toString() })
    })
}
