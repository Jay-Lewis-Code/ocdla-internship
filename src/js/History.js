/*
  Jason Lewis
  CS280 Internship
  Week 0: Longitude & Latitude Exercise

  History class to generate a history object that keeps a history of:
    - when buttons are clicked
    - order in which the buttons are clicked
*/

class History {
  constructor() {
    this.clicks = [];
  }

  addClick(locationName) {
    this.clicks.push({
      name: locationName,
      timestamp: new Date()
    });
  }

  getClicks() {
    return this.clicks;
  }

  clear() {
    this.clicks = [];
  }
}

export default History;