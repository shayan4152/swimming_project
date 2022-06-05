import React from "react";
import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
  return (
    <div>
      {" "}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={
                "https://th.bing.com/th/id/R.0dbaeb82771fe58baf8c5f104e9b3b39?rik=FtkQpyOiebjNIw&pid=ImageRaw&r=0"
              }
              width={100}
              height={100}
              alt=""
            />
            <span className="ml-3 font-light text-2xl">Swim Bag</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="main">
              <a className="mr-5 hover:text-white hover:text-2xl hover:bg-blue-400 hover:text-black">
                Home
              </a>
            </Link>
            <Link href="workout">
              <a className="mr-5 hover:text-white hover:text-2xl hover:bg-blue-400 hover:text-black">
                Workout Library
              </a>
            </Link>
            <Link href="planner">
              <a className="mr-5 hover:text-white hover:text-2xl hover:bg-blue-400 hover:text-black">
                Workout Planner
              </a>
            </Link>
            <Link href="dietplans">
              <a className="mr-5 hover:text-white hover:text-2xl hover:bg-blue-400 hover:text-black">
                Workout Diet
              </a>
            </Link>
            <Link href="dietplans">
              <a className="mr-5 hover:text-white hover:text-2xl hover:bg-blue-400 hover:text-black">
                News and Blogs
              </a>
            </Link>
          </nav>
          <button className="inline-flex items-center bg-blue-400 text-white border-0 py-1 px-3 focus:outline-none hover:bg-sky-300 rounded text-base mt-4 md:mt-0">
            sign out
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
