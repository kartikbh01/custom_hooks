import { useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    // initial value for value
    // check if the key already exists
    const item = localStorage.getItem(key);

    if (!item) return initialValue;
    try {
      return JSON.parse(item);
    } catch {
      return item;
    }
  });

  function setItem(value: T) {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  }

  function removeItem() {
    localStorage.removeItem(key);
    setValue(initialValue)
  }


  return [value, setItem, removeItem];
}
