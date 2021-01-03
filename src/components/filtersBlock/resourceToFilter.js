export const resourceToFilter = [
  { resource: 'competitions', filters: ['areas', 'plan'] },
  { resource: 'competitions/{id}/teams', filters: ['season', 'stage'] },
  { resource: 'competitions/{id}/standings', filters: ['standingType'] },
  {
    resource: 'competitions/{id}/matches',
    filters: [
      'dateFrom',
      'dateTo',
      'stage',
      'status',
      'matchday',
      'group',
      'season',
    ],
  },
  { resource: 'competitions/{id}/scorers', filters: ['limit'] },
  {
    resource: 'matches',
    filters: ['competitions', 'dateFrom', 'dateTo', 'status'],
  },
  {
    resource: 'teams/{id}/matches',
    filters: ['dateFrom', 'dateTo', 'status', 'venue', 'limit'],
  },
  {
    resource: 'players/{id}/matches',
    filters: ['dateFrom', 'dateTo', 'status', 'competitions', 'limit'],
  },
]
