export default class EntropiaLeaksModule {
  constructor() {
    this.domElement = document.querySelector('.entropialeaks');

    setInterval(() => this.update(), 60000);
    this.update();
  }

  update() {
    this.fetchData();
  }

  async fetchData() {
    const parameters = {
      'module': 'entropialeaks',
      'hashtag': 'entropialeaks'
    };

    const response = await fetch(`api.php?${new URLSearchParams(parameters)}`);

    return response.json();
  }
}
