import Button from './Button.js';

function CityPicker(cities, activeCityId) {
    // Create buttons for cities array (used in HandleButtonClick)
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'buttons-container';
    
    buttonsContainer.setAttribute('class', 'mb-4 d-flex flex-wrap gap-2');
    
    cities.forEach(location => {
        const button = Button(location.name, true);
        buttonsContainer.appendChild(button);
    });

    return buttonsContainer;
}

export default CityPicker;