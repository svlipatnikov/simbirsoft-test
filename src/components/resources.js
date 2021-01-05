export const resources = [
  {
    pathname: '/v2/competitions',
    filters: ['areas', 'plan'],
    dataType: 'competitionsList',
  },
  { pathname: '/v2/competitions/{id}', filters: [], dataType: 'competition' },
  {
    pathname: '/v2/competitions/{id}/teams',
    filters: ['season', 'stage'],
    dataType: 'teamsList',
  },
  {
    pathname: '/v2/competitions/{id}/standings',
    filters: ['standingType'],
    dataType: 'standings',
  },
  {
    pathname: '/v2/competitions/{id}/matches',
    filters: [
      'dateFrom',
      'dateTo',
      'stage',
      'status',
      'matchday',
      'group',
      'season',
    ],
    dataType: 'matchesList',
  },
  {
    pathname: '/v2/competitions/{id}/scorers',
    filters: ['limit'],
    dataType: 'scorers',
  },
  {
    pathname: '/v2/matches',
    filters: ['competitions', 'dateFrom', 'dateTo', 'status'],
    dataType: 'matchesList',
  },
  {
    pathname: '/v2/teams/{id}/matches',
    filters: ['dateFrom', 'dateTo', 'status', 'venue', 'limit'],
    dataType: 'matchesList',
  },
  { pathname: '/v2/teams/{id}', filters: [], dataType: 'team' },
  { pathname: '/v2/areas', filters: [], dataType: 'areasList' },
  { pathname: '/v2/areas/{id}', filters: [], dataType: 'area' },
  { pathname: '/v2/players/{id}', filters: [], dataType: 'player' },
  {
    pathname: '/v2/players/{id}/matches',
    filters: ['dateFrom', 'dateTo', 'status', 'competitions', 'limit'],
    dataType: 'matchesList',
  },
]
