import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

   return (

      <header aria-label="Site Header" class="bg-white">
         <div
            class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
         >
            <Link to="/" className='block text-teal-600'>
            <a class="block text-teal-600" href="/">
            <span class="sr-only">Home</span>
            <a
              class="inline-block  px-12 py-3  text-4xl	font-large font-mono text-teal-600 font-bold	 hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
              href="/download"
            >
              TechHouse
            </a>

          </a>
            </Link>

            <div class="flex flex-1 items-center justify-end md:justify-between">
               <nav aria-label="Site Nav" class="hidden md:block">
                  <ul class="flex items-center gap-6 text-sm">
                     <li>
                        <Link to="/aboutUs" className='text-gray-500 transition hover:text-gray-500/75'>About Us</Link>
                     </li>
                     <li>
                        <Link to="/contactUs" className='text-gray-500 transition hover:text-gray-500/75'>Contact Us</Link>
                     </li>

                     <li>
                        <Link to="/cart" className='text-gray-500 transition hover:text-gray-500/75'>Cart</Link>
                     </li>

                     <li>
                        <Link to="/products" className='text-gray-500 transition hover:text-gray-500/75'>Products</Link>
                     </li>
                  </ul>
               </nav>

               <div class="flex items-center gap-4">
                  <div class="sm:flex sm:gap-4">
                     <Link to="/logIn" className='block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700'>Login</Link>
                     <Link to="/signUp" className='hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block'>Register</Link>
                  </div>

                  <button
                     class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                  >
                     <span class="sr-only">Toggle menu</span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           d="M4 6h16M4 12h16M4 18h16"
                        />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </header>
   )
}
