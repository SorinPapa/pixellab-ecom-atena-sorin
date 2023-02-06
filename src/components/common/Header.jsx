import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const jsxVar = <span className="bg-white block w-4 h-4 rounded-full"></span>;

  return (
    <>
      <section className="flex lg:flex-col justify-between items-center h-full z-10 relative lg:py-8">
        <Link href="/">
          {/* no use for anchor */}
          {jsxVar}
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <CgMenu size="32"></CgMenu>
        </button>

        <ul className="hidden lg:block">
          <li>{jsxVar}</li>
        </ul>
      </section>

      <nav
        className={`z-0 absolute left-0 -top-full ${
          menuOpen ? 'translate-y-full' : ''
        } transition-transform transform-gpu w-screen h-screen bg-neutral-900 lg:w-screen-1/3`}
      >
        <ul className="flex justify-center items-center flex-col h-full text-3xl gap-6 uppercase font-bold">
          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" title="Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/" title="Contact">
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
