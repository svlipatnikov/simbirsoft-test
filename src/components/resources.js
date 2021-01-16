export const resources = [
  {
    pathname: '/competitions',
    filters: ['areas', 'plan'],
    dataType: 'listOfCompetitions',
  },
  { pathname: '/competitions/{id}', filters: [], dataType: 'competition' },
  {
    pathname: '/competitions/{id}/teams',
    filters: ['season', 'stage'],
    dataType: 'listOfTeams',
  },
  {
    pathname: '/competitions/{id}/standings',
    filters: ['standingType'],
    dataType: 'standings',
  },
  {
    pathname: '/competitions/{id}/matches',
    filters: [
      'dateFrom',
      'dateTo',
      'stage',
      'status',
      'matchday',
      'group',
      'season',
    ],
    dataType: 'listOfMatches',
  },
  {
    pathname: '/competitions/{id}/scorers',
    filters: ['limit'],
    dataType: 'scorers',
  },
  {
    pathname: '/matches',
    filters: ['competitions', 'dateFrom', 'dateTo', 'status'],
    dataType: 'listOfMatches',
  },
  {
    pathname: '/teams/{id}/matches',
    filters: ['dateFrom', 'dateTo', 'status', 'venue', 'limit'],
    dataType: 'listOfMatches',
  },
  { pathname: '/teams/{id}', filters: [], dataType: 'team' },
  { pathname: '/areas', filters: [], dataType: 'listOfAreas' },
  { pathname: '/areas/{id}', filters: [], dataType: 'area' },
  { pathname: '/players/{id}', filters: [], dataType: 'player' },
  {
    pathname: '/players/{id}/matches',
    filters: ['dateFrom', 'dateTo', 'status', 'competitions', 'limit'],
    dataType: 'listOfMatches',
  },
]
