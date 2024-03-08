import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = ({ locales, locale, defaultLocale }) => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  const changeLocale = (loc) => {
    router.push(router.asPath, router.asPath, { locale: loc });
  };

  return (
    <div className='relative z-20 border-b-2 border-gray-100 bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex items-center justify-between  py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/'>
              <a>
                <span className='sr-only'>Storyblok</span>
                <img
                  className='hidden h-20 w-auto sm:block sm:h-10'
                  src='https://a.storyblok.com/f/88751/251x53/0d3909fe96/storyblok-primary.png'
                  alt='Storyblok'
                />
                <img
                  className='h-20 w-auto sm:hidden sm:h-10'
                  src='https://a.storyblok.com/f/88751/92x106/835caf912a/storyblok-logo.png'
                  alt='Storyblok'
                />
              </a>
            </Link>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <button
              type='button'
              onClick={() => setOpenMenu(true)}
              className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              aria-expanded='false'
            >
              <span className='sr-only'>Open menu</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <div className='hidden items-center justify-end space-x-10 md:flex md:flex-1 lg:w-0'>
            <Link href='/about'>
              <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
                About
              </a>
            </Link>
            <Link href='/blog'>
              <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Blog
              </a>
            </Link>
            <Link href='/services'>
              <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Services
              </a>
            </Link>
            {locales.map((loc) => (
              <span
                key={loc}
                onClick={() => changeLocale(loc)}
                className={`block cursor-pointer rounded-lg px-4 py-1 md:p-2 lg:px-4 ${
                  locale === loc ? 'bg-black text-white' : ''
                }`}
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* <!--
        Mobile menu, show/hide based on mobile menu state.
      --> */}
      {openMenu && (
        <div className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'>
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src='https://a.storyblok.com/f/88751/92x106/835caf912a/storyblok-logo.png'
                    alt='Storyblok'
                  />
                </div>
                <div className='-mr-2'>
                  <button
                    type='button'
                    onClick={() => setOpenMenu(false)}
                    className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  >
                    <span className='sr-only'>Close menu</span>
                    {/* <!-- Heroicon name: outline/x --> */}
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  <Link href='/about'>
                    <a className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'>
                      {/* <!-- Heroicon name: outline/chart-bar --> */}
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        About
                      </span>
                    </a>
                  </Link>
                  <Link href='/blog'>
                    <a className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'>
                      {/* <!-- Heroicon name: outline/cursor-click --> */}
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        Blog
                      </span>
                    </a>
                  </Link>
                  <Link href='/services'>
                    <a className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'>
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        Services
                      </span>
                    </a>
                  </Link>
                  {locales.map((loc) => (
                    <span
                      key={loc}
                      onClick={() => changeLocale(loc)}
                      className={`block cursor-pointer rounded-lg px-4 py-1 md:p-2 lg:px-4 ${
                        locale === loc ? 'bg-black text-white' : ''
                      }`}
                    >
                      {loc}
                    </span>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
