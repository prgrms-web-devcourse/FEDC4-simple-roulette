import html from './Header.html';
import './Header.css';

export default class Header {
  constructor({ $target }) {
    this.$header = document.createElement('header');
    this.$header.id = 'header';
    $target.appendChild(this.$header);
    
    this.render();
  }

  render() {
    this.$header.innerHTML = html;
  }
}