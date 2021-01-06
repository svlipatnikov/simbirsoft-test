export default function (state, action) {
  const host = 'https://api.football-data.org/'
  let newUrl

  switch (action.type) {
    default:
      return state

    case 'makeUrl':
      newUrl = new URL('v2/' + action.payload.join('/'), host)
      console.log('makeUrl:', newUrl.toString())
      return newUrl

    case 'addPath':
      newUrl = new URL(state.pathname + '/' + action.payload, state.origin)
      console.log('addPath url:', newUrl.toString())
      return newUrl

    case 'addFilter':
      newUrl = new URL(state.pathname, state.origin)
      action.payload.forEach((p) => {
        newUrl.searchParams.set(p.type, p.value)
      })
      console.log('Filtered url:', newUrl.toString())
      return newUrl
  }
}

// urlDispatch({
//   type: 'makeUrl',
//   payload: ['teams', '86', 'matches'],
// })

// urlDispatch({
//   type: 'addPath',
//   payload: ['teams'],
// })

// urlDispatch({
//   type: 'addFilter',
//   payload: [{ type: 'status', value: 'SCHEDULED' }],
// })
