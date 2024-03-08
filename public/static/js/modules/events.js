export default class EventsModule {
  constructor(config) {
    this.config = config;
    this.domElement = document.querySelector(this.config.querySelector);
  }
}
