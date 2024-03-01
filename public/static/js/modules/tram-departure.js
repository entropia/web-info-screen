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
    this.fetchData()
      .then((response) => {
        const stopNameHeadline = document.createElement('h2');
        stopNameHeadline.innerText = this.stops[this.stopCounter].name;

        const list = document.createElement('ul');
        list.classList.add('timetable');

        this.domElement.replaceChildren(stopNameHeadline, list);
      });
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

  calculateMinutesUntilDepartureTime(dateTime) {
    const now = new Date();
    const departureTime = new Date(dateTime.year, (dateTime.month - 1), dateTime.day, dateTime.hour, dateTime.minute, 0, 0);

    return Math.ceil((departureTime - now) / 60 / 1000);
  }
}
