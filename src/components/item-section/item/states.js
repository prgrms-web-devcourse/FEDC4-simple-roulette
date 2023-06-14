export let lists = [];
export let nextId = 0;

export function refreshList() {
  lists = [];
}

export function addItem() {
  if (lists.length >= 10) {
    alert('항목은 최대 10개 까지 추가할 수 있어요!');
    return;
  }

  const newItem = {
    key: nextId++,
    value: '',
    checked: true,
    ratio: 1,
  };

  lists.push(newItem);
  return newItem;
}

export function removeItem(key) {
  lists = lists.filter(item => item.key !== key);
}