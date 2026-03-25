"use strict";

/*
  Jason Lewis
  CS280 Internship
  Week 0: Longitude & Latitude Exercise

  JS for the Home Page (index.html)
*/

import './General.js';
import Location from './Location.js';
import History from './History.js';

// Location data gathered via https://simplemaps.com/data/us-cities (free version download)
// CSV file located in ../data/uscities.csv
const LOCATIONS = [
  new Location('New York', 40.6943, -73.9249),
  new Location('Los Angeles', 34.1141, -118.4068),
  new Location('Chicago', 41.8375, -87.6866),
  new Location('Houston', 29.7860, -95.3885),
  new Location('Miami', 25.7840, -80.2101),
  new Location('Boston', 42.3188, -71.0852),
  new Location('Washington', 38.9047, -77.0163),
  new Location('San Francisco', 37.7558, -122.4449),
  new Location('Seattle', 47.6211, -122.3244),
  new Location('Denver', 39.7620, -104.8758)
];

const history = new History();
let activeButton = null;

// Create buttons for LOCATIONS array (used in HandleButtonClick)
const buttonsContainer = document.getElementById('buttons-container');
LOCATIONS.forEach(location => {
  const button = createCityButton(location);
  buttonsContainer.appendChild(button);
});

/**
  Formats click history into a readable string
  @param {Array} clicks - Array of click objects with name and timestamp properties
  @returns {string} Formatted string of clicked location names
*/
function getHistoryText(clicks) {
  return '<span class="fw-bold">So far you\'ve clicked: </span>' + clicks.map(c => c.name).join(', ');
}

/**
  Updates the class info for clicked buttons to visually show active button state.
  @param {HTMLElement} button - The button element to set as active
*/
function setActiveButton(button) {
  if (activeButton) {
    activeButton.classList.remove('active');
  }
  activeButton = button;
  button.classList.add('active');
}

/**
  Displays location information in the DOM
  @param {Location} location - The location object to display
*/
function displayLocationInfo(location) {
  const infoDisplay = document.getElementById('location-info');
  infoDisplay.textContent = location.getInfo();
}

// Updates the history display element with current click history
function updateHistoryDisplay() {
  const clicks = history.getClicks();
  const historyText = getHistoryText(clicks);
  document.getElementById('history').innerHTML = historyText;
}

/**
  Creates a button element for a city location
  @param {Location} location - The location object which the button needs to be made for
  @returns {HTMLElement} - A button element with click handler attached (injected)
*/
function createCityButton(location) {
  const button = document.createElement('button');
  button.textContent = location.name;
  button.className = 'btn btn-outline-info text-dark';
  button.addEventListener('click', () => handleButtonClick(button, location));
  return button;
}

/**
  Updates display and history when a city button is clicked
  @param {HTMLElement} button - The clicked button element
  @param {Location} location - The location object associated with the button
*/
function handleButtonClick(button, location) {
  setActiveButton(button);
  displayLocationInfo(location);
  history.addClick(location.name);
  updateHistoryDisplay();
}
