import React from "react";
import Link from "next/dist/client/link";
export default function index () {
  return (
    <>
    
      <section id="workout" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center ">
            <h1 className="sm:text-3xl text-4xl font-bold title-font mb-2 text-gray-900">
             Welcome to Workout Library{" "}
            </h1>
            <div className="w-52 h-1 lg:mt-4 sm:mt-4 rounded-full bg-slate-50 inline-flex"></div>
            <h1 className="sm:text-3xl text-3xl text-center lg:mt-10 sm:mt-10  title-font mb-2 text-gray-900">
          Swimming Workout Plan For Beginners{" "}
            </h1>
            
            <p className="lg:w-1/2 flex-wrap text-lg text-center w-full mt-10 leading-relaxed text-gray-900">
              For many, swimming is purely recreational. What they do not
              realize is that swimming can be a great cardio workout that can
              help with weight loss. It also can be a full-body workout that can
              help tone your body. Swimming also improves your cardiorespiratory
              endurance. The best part is that you can tailor your workout plan
              according to your fitness goals and endurance. Since swimming is
              an activity many people enjoy, turning it into a workout shouldn’t
              seem like a challenge. That said, if you are new to swimming you
              might need to build core strength before you dive in, so to speak.
              Today we’ll explore a swimming workout plan for beginners and give
              a few tips to maximize swimming for weight loss.
            </p>
          </div>
          
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4 ">
              <div className="border p-6 rounded-lg border-black  bg-green-500">
                <h1 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Beginner Level{" "}
                </h1>
                <h1>Startup</h1>{" "}
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Beginner Swim Workout Plan 1
                </h2>
                <p className="leading-relaxed text-base">
                  Goal: Build endurance Distance: 600 yards
                </p>
                <a className="text-lg text-white font-medium title-font mb-2" href="planner"> click here to Learn more</a>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border  p-6 rounded-lg border-black  bg-green-500">
                <h1 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Beginner Level{" "}
                </h1>

                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Beginner Swim Workout Plan 2{" "}
                </h2>
                <p className="leading-relaxed text-base">
                  Goal: Get used to pushing yourself through the water Distance:
                  1,000 yards
                </p>
                <a className="text-lg text-white font-medium title-font mb-2" href="planner"> click here to Learn more</a>

              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-black  bg-green-500 p-6 rounded-lg">
                <h1 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Beginner Level{" "}
                </h1>

                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Beginner Swim Workout Plan 3{" "}
                </h2>
                <p className="leading-relaxed text-base">
                  Goal: Improve endurance, breathing control, and turning
                  control Distance: 1,200 yards
                </p>
                <a className="text-lg text-white font-medium title-font mb-2" href="planner"> click here to Learn more</a>

              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border  p-6 rounded-lg bg-red-500 border-black">
                <h1 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Intermediate Level{" "}
                </h1>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Intermediate Swim Workout Plan 1
                </h2>
                <p className="leading-relaxed text-base">
                  Goal: Master breath control Distance: 1600 yards
                </p>
                <a className="text-lg text-white font-medium title-font mb-2" href="planner"> click here to Learn more</a>

              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border  p-6 rounded-lg bg-red-500 border-black">
                <h1 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Intermediate Level{" "}
                </h1>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Intermediate Swim Workout Plan 2
                </h2>
                <p className="leading-relaxed text-base">
                  {" "}
                  Goal: Sprinting , Gain consistency Distance: 1800 yards
                </p>
                <a className="text-lg text-white font-medium title-font mb-2" href="planner"> click here to Learn more</a>

              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border  p-6 rounded-lg bg-red-500 border-black">
                <h1 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Intermediate Level{" "}
                </h1>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Intermediate Swim Workout Plan 3
                </h2>
                <p className="leading-relaxed text-base">
                  Goal: Develop all the 4 strokes Distance: 2000 yards
                </p>
                <a className="text-lg text-white font-medium title-font mb-2" href="planner"> click here to Learn more</a>

              </div>
            </div>
          </div>
<Link href={'planner'}>
          <button className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg">
            Read more in Planner
          </button>
          </Link>
        </div>
      </section>
    </>
    
  );
}


