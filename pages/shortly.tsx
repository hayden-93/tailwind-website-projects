import React from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Shortly = () => {
  function onSubmit(e: any) {
    e.preventDefault();

    alert("Please enter valid URL");
  }

  return (
    <>
      <div>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <header>
          <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-20">
                <Image
                  src="/images/shortly/logo.svg"
                  alt=""
                  width={121}
                  height={33}
                />
                <div className="hidden space-x-8 font-bold lg:flex">
                  <Link
                    href=""
                    className="text-shortly-grayishViolet hover:text-shortly-veryDarkViolet"
                  >
                    Features
                  </Link>
                  <Link
                    href=""
                    className="text-shortly-grayishViolet hover:text-shortly-veryDarkViolet"
                  >
                    Pricing
                  </Link>
                  <Link
                    href=""
                    className="text-shortly-grayishViolet hover:text-shortly-veryDarkViolet"
                  >
                    Resources
                  </Link>
                </div>
              </div>
              <div className="hidden items-center space-x-6 font-bold text-shortly-grayishViolet lg:flex">
                <div className="hover:text-shortly-veryDarkViolet">Login</div>
                <Link
                  href=""
                  className="py-3 px-8 font-bold text-white bg-shortly-cyan rounded-full hover:opacity-70"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <section>
          <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
            <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
              <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                More than shorter links
              </h1>
              <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
                build your brands recognition and get detailed insights on how
                your links are performing.
              </p>
              <div className="mx-auto lg:mx-0">
                <Link
                  href=""
                  className="py-5 px-10 text-2xl font-bold text-white bg-shortly-cyan rounded-full lg:py-4 hover:opacity-70"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
              <Image
                src="/images/shortly/illustration-working.svg"
                alt="Hero image - person sat working"
                width={733}
                height={482}
                className=""
              />
            </div>
          </div>
        </section>
        <section id="shorten" className="relative bg-gray-100">
          <div className="max-w-4xl mx-auto p-6 space-y-6">
            <form
              onSubmit={onSubmit}
              id="link-form"
              className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-shortly-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
            >
              <input
                type="text"
                className="flex-1 p-3 border-2 rounded-lg border-shortly-red placeholder-yellow-500 focus:outline-none"
                placeholder="Shorten a link here"
                id="link-input"
              />

              <button
                type="submit"
                className="px-10 py-3 text-white bg-shortly-cyan rounded-lg hover:bg-shortly-cyanLight focus:outline-none md:py-2"
              >
                Shorten It!
              </button>
              <div
                id="err-msg"
                className="absolute left-7 bottom-3 text-shortly-red text-sm italic"
              ></div>
            </form>
            <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
              <p className="font-bold text-center text-shortly-veryDarkViolet md:text-left">
                https://frontendmentor.io
              </p>
              <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                <div className="font-bold text-shortly-cyan">
                  https://rel.ink/k4IKyk
                </div>
                <button className="p-2 px-8 text-white bg-shortly-cyan rounded-lg hover:opacity-70 focus:outline-none">
                  Copy
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
              <p className="font-bold text-center text-shortly-veryDarkViolet md:text-left">
                https://twitter.com/frontendmentor
              </p>

              <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                <div className="font-bold text-shortly-cyan">
                  https://rel.ink/gxOXp9
                </div>
                <button className="p-2 px-8 text-white bg-shortly-darkViolet rounded-lg hover:opacity-70 focus:outline-none">
                  Copy
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
              <p className="font-bold text-center text-shortly-veryDarkViolet md:text-left">
                https://linkedin.com/frontend-mentor
              </p>

              <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                <div className="font-bold text-shortly-cyan">
                  https://rel.ink/gob3X9
                </div>
                <button className="p-2 px-8 text-white bg-shortly-cyan rounded-lg hover:opacity-70 focus:outline-none">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="stats" className="py-24 bg-gray-100 text-center">
          <div className="container mx-auto px-3">
            <h2 className="text-4xl mb-6 font-bold">Advanced Statistics</h2>
            <p className="max-w-xs mx-auto text-gray-400 md:max-w-md">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </section>
        <section id="features" className="pb-32 bg-gray-100">
          <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
            <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-shortly-cyan md:block"></div>
            <div className="absolute w-2 left-1/2 h-full -ml-1 bg-shortly-cyan md:hidden"></div>
            <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
              <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-shortly-veryDarkViolet">
                  <h5 className="text-xl font-bold text-center capitalize md:text-left">
                    Brand Recognition
                  </h5>
                  <div>
                    <Image
                      src="/icons/shortly/icon-brand-recognition.svg"
                      alt=""
                      width={20}
                      height={20}
                      className=""
                    />
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-400 md:text-left">
                Boost your brand recognition with each click. Generic links dont
                mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
              <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-shortly-veryDarkViolet">
                  <Image
                    src="/icons/shortly/icon-detailed-records.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                Detailed records
              </h5>
              <p className="text-center text-gray-400 md:text-left">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3">
              <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-shortly-veryDarkViolet">
                  <Image
                    src="/icons/shortly/icon-fully-customizable.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                Fully customizable
              </h5>
              <p className="text-center text-gray-400 md:text-left">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </section>
        {/* <section id="cta" className="py-24 bg-shortly-darkViolet">
          <div className="flex flex-col p-2 space-y-6">
            <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
              Boost your links today
            </h5>
            <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-shortly-cyan hover:bg-shortly-cyanLlight md:text-base md:py-3 focus:outline-none">
              Get Started
            </button>
          </div>
        </section> */}
        {/* <footer className="py-16 bg-shortly-veryDarkViolet">
          <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
            <Image
              src="/images/shortly/logo.svg"
              alt=""
              width={121}
              height={33}
              className=""
            />
            <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
              <div className="flex flex-col items-center w-full md:items-start">
                <div className="mb-5 font-bold text-white capitalize">
                  Features
                </div>
                <div className="flex flex-col items-center space-y-3 md:items-start">
                  <a
                    href="#"
                    className="capitalize text-shortly-grayishViolet hover:text-cyan"
                  >
                    Link shortening
                  </a>
                  <a
                    href="#"
                    className="capitalize text-shortly-grayishViolet hover:text-shortly-cyan"
                  >
                    Branded links
                  </a>
                  <a
                    href="#"
                    className="capitalize text-shortly-grayishViolet hover:text-shortly-cyan"
                  >
                    Analytics
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center w-full md:items-start">
                <div className="mb-5 font-bold text-white capitalize">
                  Resources
                </div>
                <div className="flex flex-col items-center space-y-3 md:items-start">
                  <a
                    href="#"
                    className="capitalize text-shortly-grayishViolet hover:text-cyan"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="capitalize text-shortly-grayishViolet hover:text-cyan"
                  >
                    Developers
                  </a>
                  <a
                    href="#"
                    className="capitalize text-shortly-grayishViolet hover:text-cyan"
                  >
                    Support
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center w-full md:items-start">
                <div className="mb-5 font-bold text-white capitalize">
                  Company
                </div>
                <div className="flex flex-col items-center space-y-3 md:items-start">
                  <a
                    href="#"
                    className="capitalize text-shortly-grayishViolet hover:text-cyan"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="capitalize text-shortly-grayishViolet hover:text-cyan"
                  >
                    Our Team
                  </a>
                  <a
                    href="#"
                    className="capitalize text-shortly-grayishViolet hover:text-cyan"
                  >
                    Careers
                  </a>
                  <a
                    href="#"
                    className="capitalize text-shortly-grayishViolet hover:text-cyan"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#">
                <Image
                  src="/icons/shortly/icon-facebook.svg"
                  alt=""
                  className="ficon"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#">
                <Image
                  src="/icons/shortly/icon-twitter.svg"
                  alt=""
                  className="ficon"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#">
                <Image
                  src="/icons/shortly/icon-pinterest.svg"
                  alt=""
                  className="ficon"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#">
                <Image
                  src="/icons/shortly/icon-instagram.svg"
                  alt=""
                  className="ficon"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
};

export default Shortly;
