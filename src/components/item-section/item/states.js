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

export function setValue(selected_key,value){
  console.log('setValue',selected_key,value)
  lists.map(({key},i) => {
    if(key === selected_key)lists[i].value = value;
  });
  console.log(lists);
}

export function setRatio(selected_key,ratio){
  console.log('setRatio',selected_key,ratio)
  lists.map(({key},i) => {
    if(key === selected_key)lists[i].ratio = ratio;
  });
  console.log(lists);
}

// export function setList(selected_key,value){
//   console.log('setValue',selected_key,typeof value)
//   lists.map(({key},i) => {
//     if(typeof value === numuber)lists[i].ratio = ratio;
//     else if(typeof value === text)lists[i].value = value;
//   });
//   console.log(lists);
// }