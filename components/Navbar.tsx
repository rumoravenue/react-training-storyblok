import React, { useState } from 'react';

interface NavbarProps {
  Title: [];
}

interface IProps {
  blok: NavbarProps;
}

const Navbar: React.FC<IProps> = ({ blok }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-[4%]">
      <div className="flex justify-between items-center py-2">
        <div className="text-3xl font-bold lg:hidden">Rumors</div>
        <button
          className="lg:hidden block text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex lg:flex-row flex-col lg:space-x-0  md:flex md:flex-1 space-y-2 lg:space-y-0 w-full lg:w-full">
          <a href="#" className="px-[2.3%] py-2 text-left    lg:text-left lg:flex-2">Studio</a>
          <a href="#" className="px-[2.3%] py-2 text-left    lg:text-left lg:flex-2 ">RAAS</a>
          <a href="#" className="px-[2.5%] py-2 text-left    lg:text-left lg:flex-2">Venture</a>
          <a href="#" className="px-[2.5%] py-2 text-left    lg:text-center    lg:flex-1 lg:font-bold lg:text-3xl  ">Rumors</a> {/* Hidden on larger screens */}
          <a href="#" className="px-[2.5%] py-2 text-left    lg:text-left lg:flex-2">About</a>
          <a href="#" className="px-[2.5%] py-2 text-left    lg:text-left lg:flex-2">Career</a>
          <a href="#" className="px-[2.5%] py-2 text-left    lg:text-left lg:flex-2 ">Get in touch</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
