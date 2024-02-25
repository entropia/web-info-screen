export default class TimeModule {
  constructor() {
    this.domElement = document.querySelector('.time');

    setInterval(() => this.update(), 1000);
    this.update();
  }

  update() {
    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: undefined,
    };

    this.domElement.innerHTML = `<span>${now.toLocaleTimeString('de-DE', options)}</span>`;
  }
}
