export default class TramDepartureModule {
  constructor() {
    this.domElement = document.querySelector('.tram-departure');
    this.stops = [
      {
        'name': 'Kronenplatz',
        'id':   '7001002'
      },
      {
        'name': 'Marktplatz',
        'id':   '7001003'
      },
      {
        'name': 'Rüppurrer Tor',
        'id':   '7000085'
      }
    ];
    this.stopCounter = -1;

    setInterval(() => this.update(), 15000);
    this.update();
  }

  update() {
    this.fetchData();
  }

  async fetchData() {
    const stop = this.cycleStops();

    const parameters = {
      'module': 'tram-departure',
      'stop-id': stop.id,
    };

    const response = await fetch(`api.php?${new URLSearchParams(parameters)}`);

    return response.json();
  }

  cycleStops() {
    if (this.stopCounter >= this.stops.length) {
      this.stopCounter = -1;
    }

    return this.stops[(++this.stopCounter % this.stops.length)];
  }
}
