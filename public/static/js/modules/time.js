export default class TimeModule {
  constructor(config) {
    this.config = config
    this.domElement = document.querySelector(this.config.querySelector);
    setInterval(() => this.update(), this.config.updateInterval);
    this.update();
  }

  update() {
    const now = new Date();
    this.domElement.innerHTML = `<span>${now.toLocaleTimeString('de-DE', this.config.timeStringOptions)} Uhr</span>`;
  }
}
