import Link from 'next/link';

export const CartControls = () => {
  return (
    <ul>
      <li>
        <Link href="/cart" title="Cart" className='w-20'>
          Cart
        </Link>
      </li>
    </ul>
  );
};
