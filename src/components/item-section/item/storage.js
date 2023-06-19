export const storage = (function(storage){
    const setItem = (key, value) => {
        try {
            storage.setItem(key,value)
        } catch(e){
            console.log(e.message);
        }
    }
    const getItem = (key, defaultValue) => {
        try {
            const storedValue = storage.getItem(key);

            if(storedValue){
                return JSON.parse(storedValue);
            }
            return defaultValue
        } catch(e){
            console.log(e.message)
            return defaultValue
        }
    }

    return {
        setItem,
        getItem
    }
})(window.localStorage)