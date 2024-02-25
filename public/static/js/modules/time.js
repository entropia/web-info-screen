export default class TimeModule {
  constructor() {
    this.domElement = document.querySelector('.time');
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
