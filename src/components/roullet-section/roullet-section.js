import html from './roullet-section.html';
import './roullet-section.css';

function RoulletSection() {
  const $wrapper = document.querySelector('.roullet-section');
  $wrapper.innerHTML = html;
}

export default RoulletSection;
