export const resources = [
  {
    pathname: '/competitions',
    filters: ['areas', 'plan', 'search'],
    dataType: 'listOfCompetitions',
  },
  { pathname: '/competitions/:id', filters: [], dataType: 'competition' },
  {
    pathname: '/competitions/:id/teams',
    filters: ['season', 'stage', 'search'],
    dataType: 'listOfTeams',
  },
  {
    pathname: '/competitions/:id/standings',
    filters: ['standingType'],
    dataType: 'standings',
  },
  {
    pathname: '/competitions/:id/matches',
    filters: [
      'dateFrom',
      'dateTo',
      'stage',
      'status',
      'matchday',
      'group',
      'season',
      'search',
    ],
    dataType: 'listOfMatches',
  },
  {
    pathname: '/competitions/:id/scorers',
    filters: ['limit'],
    dataType: 'scorers',
  },
  {
    pathname: '/matches',
    filters: ['competitions', 'dateFrom', 'dateTo', 'status', 'search'],
    dataType: 'listOfMatches',
  },
  {
    pathname: '/teams/:id/matches',
    filters: ['dateFrom', 'dateTo', 'status', 'venue', 'limit', 'search'],
    dataType: 'listOfMatches',
  },
  { pathname: '/teams', filters: ['search'], dataType: 'listOfTeams' }, // нет в api
  { pathname: '/teams/:id', filters: [], dataType: 'team' },
  { pathname: '/areas', filters: ['search'], dataType: 'listOfAreas' },
  { pathname: '/areas/:id', filters: [], dataType: 'area' },
  { pathname: '/players/:id', filters: [], dataType: 'player' },
  {
    pathname: '/players/:id/matches',
    filters: [
      'dateFrom',
      'dateTo',
      'status',
      'competitions',
      'limit',
      'search',
    ],
    dataType: 'listOfMatches',
  },
]
