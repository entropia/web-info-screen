export default class WeatherModule {
  constructor() {
    this.domElement = document.querySelector('.weather');

    setInterval(() => this.update(), 60000);
    this.update();
  }

  update() {
    this.fetchData();
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
}
