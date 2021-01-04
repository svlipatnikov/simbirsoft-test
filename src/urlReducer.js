export default function (state, action) {
  const host = 'https://api.football-data.org/'

  switch (action.type) {
    default:
      return state

    case 'makeUrl':
      let newUrl = new URL('v2/' + action.payload.join('/'), host)
      console.log('makeUrl:', newUrl.toString())
      return newUrl

    case 'addFilter':
      let filterUrl = state
      action.payload.foreach((p) => filterUrl.searchParams.set(p.type, p.value))
      // console.log('Add filter:', filterUrl.search)
      console.log('Filtered url:', filterUrl.toString())
      return filterUrl
  }
}

// urlDispatch({
//   type: 'makeUrl',
//   payload: ['teams', '86', 'matches'],
// })

// urlDispatch({
//   type: 'addFilter',
//   payload: [{ type: 'status', value: 'SCHEDULED' }],
// })
