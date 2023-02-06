import { useLocalStorage } from '@/hooks';
import { createContext } from 'react';
import './../styles/index.css';

export const UiContext = createContext();

export default function App({ Component, pageProps }) {
  const [itemsPerRow, setItemsPerRow] = useLocalStorage('perRow', '4/row');

  return (
    <UiContext.Provider value={{ itemsPerRow, setItemsPerRow }}>
      <Component {...pageProps} />;
    </UiContext.Provider>
  );
}
