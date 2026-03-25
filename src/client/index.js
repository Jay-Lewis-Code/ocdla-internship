"use strict";

/*
  Jason Lewis
  CS280 Internship
  Week 0: Longitude & Latitude Exercise

  JS for the Home Page (index.html)
*/

import '../utils/General.js';
import History from '../utils/History.js';
import cities from '../data/locations.js';
import CityPicker from '../component/CityPicker.js';
import render from '../dev_modules/react/client.js';
import { getState } from '../dev_modules/react/client.js';

const history = new History();

// 2 tier component heirarchy
// root component Buttons
// each Buttons component has a branch(es) of Button

// rendering
let root = document.getElementById('app');
render(root, App);

function App() {
  let activeCityId = getState('activeCityId');
  return CityPicker(cities, activeCityId);
}