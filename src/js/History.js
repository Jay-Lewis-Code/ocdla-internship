/*
  Jason Lewis
  CS280 Internship
  Week 0: Longitude & Latitude Exercise

  History class to generate a history object that keeps a history of:
    - When buttons are clicked
    - Order in which the buttons are clicked
*/

// History class tracks clicks and their timestamps
class History {
  constructor() {
    this.clicks = [];
  }

  /**
    Adds a click event to the history
    @param {string} locationName - The name of the location that was clicked
  */
  addClick(locationName) {
    this.clicks.push({
      name: locationName,
      timestamp: new Date()
    });
  }

  /**
    Retrieves all clicks from history
    @returns {Array} An array of click objects containing name and timestamp
  */
  getClicks() {
    return this.clicks;
  }

  /**
    Clears all click history
    @TODO Change this? Don't like how it's just returning empty array
  */
  clear() {
    this.clicks = [];
  }
}

export default History;