import { handleRemoveItem } from './events.js';
import { lists, setValue, setRatio, setCheck } from './states.js';

export function createCheckbox(key,checked) {
  const $element = document.createElement('input');
  $element.classList = 'item-section__item-checkbox';
  $element.setAttribute('type', 'checkbox');
  if(checked)$element.setAttribute('checked', checked);
  $element.addEventListener('click', (e) => {
    setCheck(key,e.target.checked);
  });
  
  return $element;
}

export function createItemName(key,value) {
  const $element = document.createElement('input');
  $element.classList = 'item-section__item-name';
  $element.setAttribute('type', 'text');
  value.length?$element.setAttribute('value', value):$element.setAttribute('placeholder', '항목 이름');
  $element.addEventListener('blur', (e) => {
    setValue(key, e.target.value);
  });
  return $element;
}

export function createRatio(key,ratio) { //숫자타입 외에 다른 글자 입력 안되게 하기
  const $element = document.createElement('input');
  $element.classList = 'item-section__item-ratio';
  $element.setAttribute('type', 'text');
  $element.setAttribute('placeholder', '비율');
  $element.value = ratio;
  $element.addEventListener('input', () => {
    $element.value = $element.value.replace(/[^0-9.]/g, '');
  })
  $element.addEventListener('blur', (e) => {
    setRatio(key, e.target.value*1);
  });
  return $element;
}

export function createListItem(key) {
  const $element = document.createElement('li');
  $element.classList = 'item-section__item';
  $element.setAttribute('data-key', key);
  return $element;
}

const domParser = new DOMParser();
export function createCloseIcon() {
  const closeIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20">
      <path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
  `;
  return domParser.parseFromString(closeIcon, 'image/svg+xml').documentElement;
}

/**
 * 삭제 버튼 요소를 만들고, 내부에 X 모양의 svg 이미지를 등록합니다.
 * @param {HTMLElement} $icon createCloseIcon() 함수가 생성하여 반환한 svg 요소를 인자로 전달받아야 합니다.
 */
export function createRemoveButton($icon) {
  const $element = document.createElement('span');
  $element.classList = 'item-section__item-remove-button';
  $element.appendChild($icon);
  $element.addEventListener('click', (e) => handleRemoveItem(e));
  return $element;
}

export function updateListCount() {
  const $element = document.querySelector('#main .item-section__item-count');
  $element.textContent = `${lists.length} / 10`;
}