import './item.css';

let nextId = 0;

/**
 * 항목 아이템을 생성하여 문서에 추가합니다.
 */
export const addItem = () => {
  const $list = document.querySelector('#main .item-section__list');

  const $listItem = createListItem(nextId++);
  const $checkbox = createCheckbox();
  const $itemName = createItemName();
  const $ratio = createRatio();
  const $removeButton = createRemoveButton(createCloseIcon());

  $listItem.append($checkbox, $itemName, $ratio, $removeButton);
  $list.appendChild($listItem);
};

function createCheckbox() {
  const $element = document.createElement('input');
  $element.classList = 'item-section__item-checkbox';
  $element.setAttribute('type', 'checkbox');
  return $element;
}

function createItemName() {
  const $element = document.createElement('input');
  $element.classList = 'item-section__item-name';
  $element.setAttribute('type', 'text');
  $element.setAttribute('placeholder', '항목 이름');
  return $element;
}

function createRatio() {
  const $element = document.createElement('input');
  $element.classList = 'item-section__item-ratio';
  $element.setAttribute('type', 'number');
  $element.setAttribute('placeholder', '비율');
  return $element;
}

function createListItem(key) {
  const $element = document.createElement('li');
  $element.classList = 'item-section__item';
  $element.setAttribute('data-key', key);
  return $element;
}

const domParser = new DOMParser();
function createCloseIcon() {
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
 * @param {HTMLElement} $icon createCloseIcon() 함수가 생성하여 반환한 svg 요소를 인자로 전달받아야 합니다.
 */
function createRemoveButton($icon) {
  const $element = document.createElement('span');
  $element.classList = 'item-section__item-remove-button';
  $element.appendChild($icon);
  return $element;
}
