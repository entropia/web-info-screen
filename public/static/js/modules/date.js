export default class DateModule {
  constructor(config) {
    this.config = config
    this.domElement = document.querySelector(this.config.querySelector);
    setInterval(() => this.update(), this.config.updateInterval);
    this.update();
  }

  update() {
    const today = new Date();
    this.domElement.innerHTML = `<span>${today.toLocaleDateString('de-DE', this.config.dateStringOptions)}</span>`;
  }
}
