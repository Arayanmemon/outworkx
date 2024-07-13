import { useState } from 'react';
import { MdExplore } from 'react-icons/md';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { MdLocationCity } from 'react-icons/md';
import { MdPlace } from 'react-icons/md';

export default function Header() {
  let [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <a className='btn btn-ghost hover:bg-transparent text-xl'>
            <img src='/images/logo.png' alt='' />
          </a>
        </div>
        <div className='flex-none flex items-center'>
          <ul className='menu menu-horizontal px-1 items-center'>
            <li>
              <a className='hidden sm:block hover:bg-transparent'>About Us</a>
            </li>
            <li>
              <a className='hidden sm:block hover:bg-transparent'>List Space</a>
            </li>
            <li>
              <a className='hidden sm:block hover:bg-transparent'>Locations</a>
            </li>
            <li>
              <a className='hover:bg-transparent'>
                <img src='/images/language.png' alt='' />
              </a>
            </li>
            <li className='flex justify-start flex-row border border-gray-400 rounded-2xl'>
              <button
                onClick={() => {
                  toggleMenu();
                }}
              >
                <img src='/images/bars-icon.png' alt='' />
              </button>
              <a className='hover:bg-transparent'>
                <img src='/images/Profile-icon.png' alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          menu
            ? 'transition-all h-28 w-full block rounded-2xl py-4 px-4 bg-gray-200 shadow-2xl shadow-white'
            : 'hidden'
        }
      >
        <nav className=''>
          <ul className='flex space-x-4 justify-center '>
            <li>
              <MdExplore className='ml-6' /> Explore
            </li>
            <li>
              <IoPeopleCircleOutline className='ml-6' /> About Us
            </li>
            <li>
              <MdLocationCity className='ml-6' /> List Space
            </li>
            <li>
              <MdPlace className='ml-6' /> Locations
            </li>
          </ul>
        </nav>
        <div className='w-11/12 h-0.25 mx-auto my-2 bg-gray-400'></div>
        <div className='text-center'>
          <a href='/auth/login'>Login</a>
          {` `}|{` `}
          <a href='/auth/register'>Signup</a>
        </div>
      </div>
    </>
  );
}
