/**
  Creates a button element for a city location
  @param {string} label - The location object which the button needs to be made for
  @returns {HTMLElement} - A button element with click handler attached (injected)
*/
function Button(label, active=false) {
  const button = document.createElement('button');
  // Instructions are to use .createTextNode instead of textContent
  const textNode = document.createTextNode(label);
  button.appendChild(textNode);
  button.className = 'btn btn-outline-info text-dark';

  if (active == true) {
    button.classList.add('active');
  }

  //button.addEventListener('click', () => handleButtonClick(button, label));
  return button;
}

export default Button;