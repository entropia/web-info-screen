export default class WeatherModule {
  constructor() {
    this.domElement = document.querySelector('.weather');

    setInterval(() => this.update(), 60000);
    this.update();
  }

  update() {
    this.fetchData()
      .then((response) => {
        const weatherHeadline = document.createElement('h2');
        weatherHeadline.innerText = 'Wetter';

        const list = document.createElement('ul');
        const listEntries = [];

        Object.values(response?.hourly?.time)?.forEach((hourValue) => {
          const listEntry = document.createElement('li');

          const hour = document.createElement('span');
          hour.classList.add('hour');
          hour.innerText = `${(new Date(hourValue)).getHours()} Uhr`;

          listEntry.appendChild(hour);
          listEntries.push(listEntry);
        });

        listEntries.forEach((listEntry) => {
          list.appendChild(listEntry);
        });

        this.domElement.replaceChildren(weatherHeadline, list);
      });
  }

  async fetchData() {
    const parameters = {
      'module':    'weather',
      'latitude':  '49.0',
      'longitude': '8.4',
      'timezone':  'Europe/Berlin'
    };

    const response = await fetch(`api.php?${new URLSearchParams(parameters)}`);

    return response.json();
  }

  static weatherCodes = {
    '0':  'Klar',
    '1':  'Leicht bewölkt',
    '2':  'Teilweise bewölkt',
    '3':  'Bewölkt',
    '45': 'Nebel',
    '48': 'Raureif',
    '51': 'Leichter Nieselregen',
    '53': 'Nieselregen',
    '55': 'Starker Nieselregen',
    '56': 'Leichter Nieselregen',
    '57': 'Starker Nieselregen',
    '61': 'Leichter Regen',
    '63': 'Regen',
    '65': 'Starker Regen',
    '66': 'Leichter Regen',
    '67': 'Starker Regen',
    '71': 'Leichter Schnee',
    '73': 'Schnee',
    '75': 'Starker Schnee',
    '77': 'Schnee',
    '80': 'Schwache Regenschauer',
    '81': 'Regenschauer',
    '82': 'Starke Regenschauer',
    '85': 'Leichte Schneeschauer',
    '86': 'Starke Schneeschauer',
    '95': 'Gewitter',
    '96': 'Sturm mit leichtem Hagel',
    '99': 'Sturm mit starkem Hagel'
  };
}
