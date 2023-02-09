import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { SiTrustedshops } from 'react-icons/si';
import { AiOutlineClose } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';
import { AiFillTwitterCircle, AiFillGoogleCircle } from 'react-icons/ai';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <section className="flex lg:flex-col justify-between items-center h-full z-10 relative lg:py-8">
        <Link href="/" legacyBehavior>
          <a
            title="Home"
            className="transition-all hover:text-sky-700 hover:scale-150"
          >
            <SiTrustedshops size="40"></SiTrustedshops>
          </a>
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="transition-all hover:text-sky-700 hover:scale-150"
        >
          {menuOpen ? (
            <AiOutlineClose size="40"></AiOutlineClose>
          ) : (
            <CgMenu size="40"></CgMenu>
          )}
        </button>

        <ul className="hidden lg:flex flex-col items-center justify-between gap-4">
          <li className="transition-all hover:text-sky-700 hover:scale-150">
            <Link href="https://www.facebook.com/" legacyBehavior>
              <a title="Facebook" target="_blank" rel="noopener noreferrer">
                <MdFacebook size="30"></MdFacebook>
              </a>
            </Link>
          </li>

          <li className="transition-all hover:text-sky-700 hover:scale-150">
            <Link href="https://twitter.com/?lang=en" legacyBehavior>
              <a title="Facebook" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle size="30"></AiFillTwitterCircle>
              </a>
            </Link>
          </li>

          <li className="transition-all hover:text-sky-700 hover:scale-150">
            <Link href="https://www.google.com/" legacyBehavior>
              <a title="Facebook" target="_blank" rel="noopener noreferrer">
                <AiFillGoogleCircle size="30"></AiFillGoogleCircle>
              </a>
            </Link>
          </li>
        </ul>
      </section>

      <nav
        className={`z-0 absolute left-0 -top-full ${
          menuOpen ? 'translate-y-full' : ''
        } transition-transform transform-gpu w-screen h-screen bg-neutral-900 lg:w-screen-1/3`}
      >
        <ul className="flex justify-center items-center flex-col h-full text-3xl gap-6 uppercase font-bold">
          <li>
            <Link
              href="/"
              title="Home"
              className="transition-all hover:text-sky-700"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/"
              title="Contact"
              className="transition-all hover:text-sky-700"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/"
              title="Contact"
              className="transition-all hover:text-sky-700"
            >
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
