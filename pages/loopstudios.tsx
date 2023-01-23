import React from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const LoopStudios = () => {
  return (
    <div className="">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section id="hero" className="max-w-screen-loop-xl mx-auto py-12 px-6">
        <nav className="flex items-center justify-between font-bold text-white">
          <Image
            src="/images/loopstudios/logo.svg"
            alt="Logo"
            width={192}
            height={32}
            className=""
          />
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <div className="group">
              <Link href="#" className="">
                About
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <Link href="#" className="">
                Careers
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <Link href="#" className="">
                Events
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <Link href="#" className="">
                Products
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <Link href="#" className="">
                Support
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              className="z-40 hamburger block md:hidden focus:outline-none"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>

        <div
          id="menu"
          className="absolute top-0 bottom-0 left-0 flex-col self-end hidden w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
        >
          <Link href="#" className="hover:text-pink-500">
            About
          </Link>
          <Link href="#" className="hover:text-pink-500">
            Careers
          </Link>
          <Link href="#" className="hover:text-pink-500">
            Events
          </Link>
          <Link href="#" className="hover:text-pink-500">
            Products
          </Link>
          <Link href="#" className="hover:text-pink-500">
            Support
          </Link>
        </div>
        <p className="max-w-screen-sm my-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Impressive experiences that deliver
        </p>
      </section>
      <section id="feature">
        <div className="relative container flex flex-col max-w-screen-loop-xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          <Image
            src="/images/loopstudios/image-interactive.jpg"
            alt="Man playing on VR headset"
            width={731}
            height={500}
          />
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-screen-loop-lg mt-10 mb-6 pr-6 font-sans text-4xl text-gray-900 uppercase text-center md:text-5xl md:mt-0 md:text-left">
              The leader in interactive VR
            </h2>
            <p className="max-w-md text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
      <section id="creations">
        <div className="container max-w-screen-loop-xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          <div className="flex justify-center mb-20 px-6 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>
            <button className="hidden py-2 px-10 font-bold tracking-widest uppercase border-2 border-black font-alata hover:bg-black hover:text-white md:block">
              See All
            </button>
          </div>
          <div className="item-container">
            <div className="group item">
              <Image
                src="/images/loopstudios/image-deep-earth.jpg"
                alt="Deep earth image"
                width={256}
                height={450}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <Image
                src="/images/loopstudios/image-deep-earth_mob.jpg"
                alt="Deep earth image"
                width={256}
                height={450}
                className="w-full md:hidden"
              />
              <div className="item-gradient"></div>
              <h5>Deep Earth</h5>
            </div>
            <div className="group item">
              <Image
                src="/images/loopstudios/image-night-arcade.jpg"
                alt="Night Arcade image"
                width={256}
                height={450}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <Image
                src="/images/loopstudios/image-night-arcade_mob.jpg"
                alt="Night Arcade image"
                width={256}
                height={450}
                className="w-full md:hidden"
              />
              <div className="item-gradient"></div>
              <h5>Night Arcade</h5>
            </div>
            <div className="group item">
              <Image
                src="/images/loopstudios/image-soccer-team.jpg"
                alt="Soccer team image"
                width={256}
                height={450}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <Image
                src="/images/loopstudios/image-soccer-team_mob.jpg"
                alt="Soccer team image"
                width={256}
                height={450}
                className="w-full md:hidden"
              />
              <div className="item-gradient"></div>
              <h5>Soccer Team VR</h5>
            </div>
            <div className="group item">
              <Image
                src="/images/loopstudios/image-grid.jpg"
                alt="Grid Car image"
                width={256}
                height={450}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <Image
                src="/images/loopstudios/image-grid_mob.jpg"
                alt="Grid Car image"
                width={256}
                height={450}
                className="w-full md:hidden"
              />
              <div className="item-gradient"></div>
              <h5>The Grid</h5>
            </div>
          </div>
          <div className="item-container mt-10">
            <div className="group item">
              <Image
                src="/images/loopstudios/image-from-above.jpg"
                alt="From above image"
                width={256}
                height={450}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <Image
                src="/images/loopstudios/image-from-above_mob.jpg"
                alt="From above image"
                width={256}
                height={450}
                className="w-full md:hidden"
              />
              <div className="item-gradient"></div>
              <h5>From Up Above VR</h5>
            </div>
            <div className="group item">
              <Image
                src="/images/loopstudios/image-pocket-borealis.jpg"
                alt="Pocket Borealis image"
                width={256}
                height={450}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <Image
                src="/images/loopstudios/image-pocket-borealis_mob.jpg"
                alt="Pocket Borealis image"
                width={256}
                height={450}
                className="w-full md:hidden"
              />
              <div className="item-gradient"></div>
              <h5>Pocket Borealis</h5>
            </div>
            <div className="group item">
              <Image
                src="/images/loopstudios/image-curiosity.jpg"
                alt="Curiosity image"
                width={256}
                height={450}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <Image
                src="/images/loopstudios/image-curiosity_mob.jpg"
                alt="Curiosity image"
                width={256}
                height={450}
                className="w-full md:hidden"
              />
              <div className="item-gradient"></div>
              <h5>The Curiosity</h5>
            </div>
            <div className="group item">
              <Image
                src="/images/loopstudios/image-fisheye.jpg"
                alt="Fisheye image"
                width={256}
                height={450}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <Image
                src="/images/loopstudios/image-fisheye_mob.jpg"
                alt="Fisheye image"
                width={256}
                height={450}
                className="w-full md:hidden"
              />
              <div className="item-gradient"></div>
              <h5>Make It Fisheye</h5>
            </div>
          </div>
          <button className="w-full justify-center mt-10 py-2 px-10 font-bold tracking-widest uppercase border-2 border-black font-alata hover:bg-black hover:text-white md:hidden">
            See All
          </button>
        </div>
      </section>
      <footer className="bg-black container max-w-screen-loop-xl mx-auto py-10">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              <Image
                src="/images/loopstudios/logo.svg"
                alt="Logo"
                width={300}
                height={300}
                className="w-44 md:ml-3"
              />
            </div>
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              <div className="group h-10">
                <Link href="#">About</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group h-10">
                <Link href="#">Careers</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group h-10">
                <Link href="#">Events</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group h-10">
                <Link href="#">Products</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group h-10">
                <Link href="#">Support</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              <div className="group h-8">
                <Link href="#">
                  <Image
                    src="/icons/loopstudios/icon-facebook.svg"
                    alt="Facebook icon"
                    width={24}
                    height={24}
                    className="h-6"
                  />
                </Link>
              </div>
              <div className="group h-8">
                <Link href="#">
                  <Image
                    src="/icons/loopstudios/icon-twitter.svg"
                    alt="Twitter icon"
                    width={24}
                    height={24}
                    className="h-6"
                  />
                </Link>
              </div>
              <div className="group h-8">
                <Link href="#">
                  <Image
                    src="/icons/loopstudios/icon-pinterest.svg"
                    alt="Pinterest icon"
                    width={24}
                    height={24}
                    className="h-6"
                  />
                </Link>
              </div>
              <div className="group h-8">
                <Link href="#">
                  <Image
                    src="/icons/loopstudios/icon-instagram.svg"
                    alt="Instagram icon"
                    width={24}
                    height={24}
                    className="h-6"
                  />
                </Link>
              </div>
            </div>
            <p className="font-bold pr-6">
              &copy; 2022 Loopstudios. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoopStudios;
