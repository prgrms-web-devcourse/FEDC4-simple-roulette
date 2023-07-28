import html from './Header.html';
import './Header.css';

export default class Header {
  constructor({ $target }) {
    this.$target = $target;
    
    this.render();
  }

  render() {
    this.$target.innerHTML = html;
  }
}