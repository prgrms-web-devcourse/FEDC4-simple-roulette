const storage = (function (storage) {
  const setItem = (key, value) => {
    try {
      storage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
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
      console.log(e);
      return defaultValue;
    }
  };
  return { setItem, getItem };
})(window.localStorage);

export default storage;
