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
  }
}
