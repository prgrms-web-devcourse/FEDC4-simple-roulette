import html from './header.html';
import './header.css';

function Header() {
  const $element = document.querySelector('#header');
  $element.innerHTML = html;
}

export default Header;
