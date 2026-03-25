import Button from './Button.js';

// Do we want to rename cities to label?
// Call key as key?
function CityPicker(cities, activeCityId) {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'buttons-container';
    
    buttonsContainer.setAttribute('class', 'mb-4 d-flex flex-wrap gap-2');
    
    for (const id in cities) {
        let city = cities[id];
        // boolean expression
        let isActive = activeCityId == city.id;
        const button = Button(city.name, city.id, isActive);
        buttonsContainer.appendChild(button);
    }

    return buttonsContainer;
}

export default CityPicker;