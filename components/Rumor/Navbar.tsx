import React from 'react';

type NavItem = {
  li: string;
};

interface NavbarProps {
  navbar: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navbar }) => {
  return (
    <nav className='flex w-full bg-black p-4 text-white'>
      <ul className='flex w-full justify-around'>
        {navbar?.map((item, index) => (
          <li
            className={` ${item.li === 'Rumor.' ? 'text-2xl font-semibold' : 'text-lg'}`}
            key={index}
          >
            {item.li}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
