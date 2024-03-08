export default class WeatherModule {
  constructor(config) {
    this.config = config
    this.domElement = document.querySelector(this.config.elementSelector);
    setInterval(() => this.update(), this.config.updateInterval);
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

        Object.values(response?.hourly?.weather_code)?.forEach((weatherCodeValue, index) => {
          const weatherCode = document.createElement('span');
          weatherCode.classList.add('weather-code');
          weatherCode.innerText = WeatherModule.weatherCodes[weatherCodeValue];

          listEntries[index].appendChild(weatherCode);
        });

        Object.values(response?.hourly?.temperature_2m)?.forEach((temperatureValue, index) => {
          const temperature = document.createElement('span');
          temperature.classList.add('temperature');
          temperature.innerText = `${Math.round(temperatureValue)} °C`;

          listEntries[index].appendChild(temperature);
        });

        listEntries.forEach((listEntry) => {
          list.appendChild(listEntry);
        });

        this.domElement.replaceChildren(weatherHeadline, list);
      });
  }

  async fetchData() {
    const response = await fetch(`api.php?${new URLSearchParams(this.config.apiParameters)}`);
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
