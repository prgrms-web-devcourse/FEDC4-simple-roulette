export const storage = (function (storage) {
  const setItem = (key, value) => {
    try {
      storage.setItem(key, value);
    } catch (e) {
      console.log(e.message);
    }
  };
  const getItem = (key, defaultValue) => {
    try {
      const storedValue = storage.getItem(key);

      if (storedValue) {
        return JSON.parse(storedValue);
      }
      return defaultValue;
    } catch (e) {
      console.log(e.message);
      return defaultValue;
    }
  };

  //keyword를 key로 가진 값 삭제하기
  const clearItem = (keword) => {
    try {
      storage.removeItem(keword);
    } catch (e) {
      console.log(e.message);
    }
  };

  return {
    setItem,
    getItem,
    clearItem,
  };
})(window.localStorage);
