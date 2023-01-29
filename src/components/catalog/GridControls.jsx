import { useState } from 'react';

const buttonClasses =
  'flex justify-center items-center border border-zinc-200 w-20 h-20';

export const GridControls = () => {
  const [itemsPerRow, setItemsPerRow] = useState('4/row');

  return (
    <ul>
      <li>
        <button
          type="button"
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1/row');
          }}
        >
          1
        </button>
      </li>

      <li>
        <button
          type="button"
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2/row');
          }}
        >
          2
        </button>
      </li>

      <li>
        <button
          type="button"
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4/row');
          }}
        >
          4
        </button>
      </li>
    </ul>
  );
};
