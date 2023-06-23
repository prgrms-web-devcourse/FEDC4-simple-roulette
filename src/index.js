import App from './components/App.js';
import './index.css';

const $target = document.getElementById('app');
new App({ $target, initialState: '기본 상태 값으로 무엇을 보낼까요오' });
