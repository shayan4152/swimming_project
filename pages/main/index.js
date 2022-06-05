import React from "react";
import Link from "next/dist/client/link";
// import img from "next/img"

export default function index () {
  return (
    <>
      <div
        id="header"
        className="relative overflow-hidden bg-no-repeat bg-cover mt-0"
      >
        <div
          id="inside"
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-7xl text font-bold mt-0 mb-6">Swimming</h1>
              <h3 className="text-3xl font-bold mb-8">
                Fun and Healthy Activity
              </h3>
              <Link href={"workout"}>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs bg-blue-600 leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="http://primehostingindia.com/templatemonster/angular/swimmerz/assets/img/about4.jpg"
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center lg:p-20 sm:p-16">
            <div className="flex flex-col sm:p-8 mb-10 lg:items-start items-center">
              <h1 className="text-center font-bold text-3xl sm:mb-10">
                Welcome to Swim Bag
              </h1>

              <div className=" flex flex-col t flex-wrap lg:mt-12 xl:mt-10 sm:mt-10 md:mt-10 ">
                <p className="leading-relaxed text-base lg:mt-12 xl:mt-12 text-gray-900">
                  Swimming is an individual or team racing sport that requires
                  the use of one's entire body to move through water. The sport
                  takes place in pools or open water e.g., in a sea or lake
                  Competitive swimming is one of the most popular Olympic sports
                  with varied distance events in butterfly.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <a
                href="https://en.wikipedia.org/wiki/Swimming#:~:text=Swimming%20is%20the%20self-%20propulsion%20of%20a%20person,achieve%20hydrodynamic%20thrust%20which%20results%20in%20directional%20motion."
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium my-5 mb-3">
                  Mental Benefits of swimming
                </h2>
                <p className="leading-relaxed text-base">
                  Feeling the mental benefits of swimming takes just a light
                  swim. No lane pounding needed. Burns those calories. Swimming
                  is one of the most effective ways to burn calories. A gentle
                  swim can burn over 200 calories in just half an hour, more
                  than double that of walking.
                </p>
                <a
                  href="https://www.betterhealth.vic.gov.au/health/healthyliving/swimming-health-benefits"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokelinecap="round"
                    strokelinejoin="round"
                    strokewidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Some Good Sayings/paragraphs about Swimming
                </h2>
                <p className="leading-relaxed text-base">
                  Make a splash. My dream is to swim in bacon. My weapon is my
                  body. My weapon is my body. My element is water – My world is
                  swimming. No one ever got stronger by working less. No water
                  too cold for a team so hot. No, we’re not on steroids, but
                  thanks for asking.
                </p>
                <a
                  href="https://swimcompetitive.com/swimming/quotes/"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokelinecap="round"
                    strokelinejoin="round"
                    strokewidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://th.bing.com/th/id/R.e0085adaf488de83eef3e7ca076c7a10?rik=CrXz%2fiv9EEA2yw&pid=ImgRaw&r=0"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-blue-600 mb-3">
                    Workout Library
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Go and check out our different swimming workout levels{" "}
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="workout"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokewidth="2"
                        fill="none"
                        strokelinecap="round"
                        strokelinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokewidth="2"
                        fill="none"
                        strokelinecap="round"
                        strokelinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://th.bing.com/th/id/OIP.p_kwx6gacWZvH62Mjew1pQHaFE?pid=ImgDet&rs=1"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-blue-600 mb-3">
                    Workout Planner
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {" "}
                    Check out our latest workout plan's which will help you swim
                    longer
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a
                      href="planner"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokewidth="2"
                        fill="none"
                        strokelinecap="round"
                        strokelinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokewidth="2"
                        fill="none"
                        strokelinecap="round"
                        strokelinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://th.bing.com/th/id/R.d956294a8e29afd24b58219c77af1ccb?rik=Gnix0dr4TGGSZA&pid=ImgRaw&r=0"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Workout Diet
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Check our diet plans to keep you strong so you can last long
                    in swimming
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="dietplans"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokewidth="2"
                        fill="none"
                        strokelinecap="round"
                        strokelinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokewidth="2"
                        fill="none"
                        strokelinecap="round"
                        strokelinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
