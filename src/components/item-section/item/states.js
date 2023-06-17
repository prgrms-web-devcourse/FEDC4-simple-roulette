import { storage } from './storage.js';

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

export function setCheck(selected_key,checked){
  lists.map(({key},i) => {
    if(key === selected_key){
      return lists[i].checked = checked;
    }
  });
  storage.setItem('item_lists', JSON.stringify(lists));
}

export function setValue(selected_key,value){
  console.log('setValue',selected_key,value)
  lists.map(({key},i) => {
    if(key === selected_key)lists[i].value = value;
  });
  storage.setItem('item_lists', JSON.stringify(lists));
}

export function setRatio(selected_key,ratio){
  console.log('setRatio',selected_key,ratio)
  lists.map(({key},i) => {
    if(key === selected_key)lists[i].ratio = ratio;
  });
  storage.setItem('item_lists', JSON.stringify(lists));
}