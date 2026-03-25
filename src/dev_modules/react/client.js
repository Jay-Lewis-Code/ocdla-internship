// render function
export default function render(root, Component) {
  // clears out render
  root.innerHTML = '';
  // appends execution of component tree
  // executes component first and uses its return value to execute append child
  root.appendChild(Component());
}