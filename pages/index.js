import React from "react";
import Link from "next/link";
import Image from "next/image"

 export default function index() {
  return (
    <>
      <section
        id="first"
        className=" h-full gradient-form border-slate-700 md:h-screen"
      >
        <div className=" rounded-xl border-solid container py-12 px-6 h-full">
          <div
            className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
          >
            <div id="second" className="xl:w-10/12 border-solid rounded-3xl border-2 border-teal-600">
              <div className="block shadow-lg rounded-lg justify-center">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          “When your body gets tired swim with your heart”{" "}
                        </h4>
                      </div>
                      <form>
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="border-solid rounded-xl form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Username or phone"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="border-solid rounded-xl form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border  border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                          />
                        </div>
                        <div id="" className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="border-solid rounded-xl inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Log in
                          </button>

                          <label htmlFor="html">Remember me</label>
                          <input
                            className="ml-4"
                            type="radio"
                            id="css"
                            name="fav_language"
                            value="CSS"
                          />
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
<Link href={'signup'}>
                          <a
                            className="border-solid rounded-xl inline-block px-6 py-2 border-2 border-gray-600 text-gray-600 font-medium text-xs leading-tight uppercase  hover:bg-gray-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            
                          >
                            signup
                          </a>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    id="gradient"
                    className="lg:w-6/12 sm:w-3/6 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                  >
                     <h2 className="md:ml-4 font-bold text-2xl text-black">Welcome to Swim Bag!<br/>
The home of swimming, diving, artistic swimming and water polo</h2>
                    <img className="flex-wrap flex-row" src="https://metropolitanhost.com/themes/templatemoster/html/swimo/assets/img/tile-gallery/icon-2.png"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

