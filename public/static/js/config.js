export const config = {
  weather: {
    updateInterval: 60000,
    elementSelector: '.weather',
    apiParameters: {
      module: 'weather',
      latitude: '49.0',
      longitude: '8.4',
      timezone: 'Europe/Berlin'
    }
  },
  tram: {
    stops: [
      { 'name': 'Kronenplatz', 'id': '7001002' },
      { 'name': 'Marktplatz', 'id': '7001003' },
      { 'name': 'Rüppurrer Tor', 'id': '7000085' }
    ],
    querySelector: '.tram-departure',
    updateInterval: 15000,
  },
  time: {
    updateInterval: 1000,
    querySelector: '.time',
    timeStringOptions: {
      hour: 'numeric',
      minute: 'numeric',
      second: undefined,
    }
  },
  events: {
    querySelector: '.events',
  },
  entropialeaks: {
    updateInterval: 60000,
    querySelector: '.entropialeaks',
    apiParameters: {
      module: 'entropialeaks',
      hashtag: 'entropialeaks'
    }
  },
  date: {
    updateInterval: 1000,
    querySelector: '.date',
    dateStringOptions: {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: undefined,
    },
  }
}
