export default function (state, action) {
  const host = 'https://api.football-data.org/v2'
  let newUrl = ''

  switch (action.type) {
    default:
      return state

    case 'makeUrl':
      newUrl = host
      action.payload.map((resource) => (newUrl = newUrl + '/' + resource))
      console.log('makeUrl:', newUrl)
      return newUrl

    case 'addFilter':
      newUrl = state
      action.payload.map((filter, num) => {
        if (num === 0) {
          newUrl = newUrl + '?' + filter.type + '=' + filter.value
        } else {
          newUrl = newUrl + '&' + filter.type + '=' + filter.value
        }
      })
      console.log('addFilter:', newUrl)
      return newUrl
  }
}
