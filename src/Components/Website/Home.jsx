import React, { useContext } from 'react'
import { ProductsData } from './../../App';


export default function Home() {
  const data = useContext(ProductsData);
  console.log(data);
  
  return (
    <>
      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.pinimg.com/564x/51/1a/74/511a7467333910972ea81166ff40b95d.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <p class="mb-8 mt-8 mx-14 text-xl font-light w-5/12	w-11/12		 leading-relaxed">
        An online electronics store is a website or platform that sells electronic products and devices over the internet. These stores offer a wide range of electronic products such as computers, smartphones, tablets, televisions, cameras, audio equipment, and accessories.
      </p>

      <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
              latest offers
            </h2>
          </header>

          <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src="https://i.pinimg.com/564x/b4/cd/f2/b4cdf20697eaa17db77c51f1fc7304ee.jpg"
                  alt=""
                  class="h-[350px] rounded-3xl	 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
                />

                <div class="relative pt-3 bg-white">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Product number : CTM46R3
                  </h3>
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Description : CTM46R3 / DELL 3510/11G/i3/4GB+4GB/250/15.6+WIN 10

                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-teal-600"> £490.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src="https://i.pinimg.com/564x/28/ff/9d/28ff9d54e79e2e7d39ec83739c085904.jpg"
                  alt=""
                  class="h-[350px] rounded-3xl w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
                />

                <div class="relative pt-3 bg-white">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Product number : SM-F926BZGDMEA

                  </h3>
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Description : PREORDER NOW! Samsung Galaxy Fold 3 12+256GB 7.6” 4400mAh Green


                  </h3>
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-teal-600"> £240.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src="https://i.pinimg.com/564x/aa/fb/b7/aafbb76c01a75461b86e3219c6ae10e6.jpg"
                  alt=""
                  class="h-[350px] rounded-3xl w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
                />

                <div class="relative pt-3 bg-white">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Product number : 6925281981302
                  </h3>
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Description :JBL Live 660NC Wireless Over-Ear Noise Cancelling Headphones White Headphones



                  </h3>
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-teal-600"> £24.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="block overflow-hidden group">
                <img
                  src="https://i.pinimg.com/564x/28/c5/8c/28c58c4ed37795cb0307a897ebc62487.jpg"
                  alt=""
                  class="h-[350px] rounded-3xl w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
                />

                <div class="relative pt-3 bg-white">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Product number : 6925281981302
                  </h3>
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Description :JBL Live 660NC Wireless Over-Ear Noise Cancelling Headphones White Headphones



                  </h3>
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-teal-600"> £90.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>

          </ul>

        </div>
        <div class="flex flex-col items-center justify-center px-12 py-3">

          <a
            class="inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
            href="/download"
          >
            Show all product
          </a>
        </div>
      </section>


      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 pb-11">
        <header>
          <h2 class="text-xl font-bold mb-10 text-gray-900 sm:text-3xl">
            Products Collection
          </h2>
        </header>

        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.pinimg.com/564x/21/dd/6d/21dd6debc7f2b635c73f9d920ef92b7f.jpg" />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.pinimg.com/564x/ef/e8/46/efe846d0f4920858a62c470c5a7afe46.jpg" />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.pinimg.com/564x/45/64/48/45644832142bdb429ca03fbdb2acfdfd.jpg" />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.pinimg.com/564x/83/7c/4a/837c4a823318bdd1758abcf9ddf05a78.jpg" />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.pinimg.com/564x/5f/ad/63/5fad63d6f41c7ab0467f67524e391220.jpg" />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.pinimg.com/564x/64/f7/59/64f75970b42bef97e987d1ec37ca8392.jpg" />
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center px-12 py-3">

          <a
            class="inline-block rounded border mt-10 border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
            href="/download"
          >
            Show all product
          </a>
        </div>
      </div>
    </>
  )
}
