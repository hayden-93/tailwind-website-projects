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
      </div>
    </>
  );
};

export default Shortly;
