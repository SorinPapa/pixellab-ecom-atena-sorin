import { useEffect, useState } from 'react';

// keyName => key name in local storage
export const useLocalStorage = (keyName, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    console.log('I run once');
    // incerc sa ma duc in localStorage sa iau "keyName"
    const savedValue = localStorage.getItem(keyName);

    // verific daca aveam ceva in localStorage
    // daca aveam ceva, il adaug in state
    if (savedValue !== null) {
      setValue(savedValue);
    }
  }, [setValue, keyName]);

  useEffect(() => {
    // no early returns
    if (value !== defaultValue) {
      localStorage.setItem(keyName, value);
    }
  }, [value, keyName, defaultValue]);

  return [value, setValue];
};
