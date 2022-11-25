import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

/* --todo

better design & responsive-ness,
better inputs structure to loop through
protected routes,
responsive design


*/


export default function Navbar() {
    const router = useRouter()

    
    
  return (
    <div>
    <div className="bg-gradient-to-r from-green-200 to-green-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-700">
            lexie.ai
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            // onClick={() => router.back()}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cart 🛒
          </button>
          {/* <Link
            href='/'
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            go back
          </Link> */}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white  dark:hover:bg-gray-700 hover:text-green-400 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div  className="bg-gray-400 border-gray-200 px-2 sm:px-4 py-2.5 rounded text-2xl text-center capitalize">
         navbar under construction 
    </div>
    </div>
  );
}
