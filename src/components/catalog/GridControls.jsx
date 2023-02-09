import { UiContext } from '@/pages/_app';
import { useContext } from 'react';
import { BsFillStopFill, BsFillGridFill } from 'react-icons/bs';
import { useIsMobile } from '@/hooks';

const buttonClasses =
  'flex justify-center items-center border-l border-zinc-200 w-20 h-20 transition-colors hover:text-sky-700';

export const GridControls = () => {
  const { itemsPerRow, setItemsPerRow } = useContext(UiContext);
    const isMobile = useIsMobile();

    if (isMobile === true) {
      return <></>;
    }
  return (
    <ul className="border border-l-0 border-zinc-200 hidden lg:flex">
      <li>
        <button
          type="button"
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '1/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1/row');
          }}
        >
          <BsFillStopFill></BsFillStopFill>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Two per row"
          className={`${buttonClasses} ${
            itemsPerRow === '2/row' ? 'bg-neutral-900 text-white' : ''
          }transition-all hover:text-sky-700`}
          onClick={() => {
            setItemsPerRow('2/row');
          }}
        >
          <BsFillStopFill></BsFillStopFill>
          <BsFillStopFill></BsFillStopFill>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Four per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4/row');
          }}
        >
          <BsFillGridFill></BsFillGridFill>
        </button>
      </li>
    </ul>
  );
};
