import React from "react";
import Link from "next/link";
// import img from "next/img"

export default function index() {
  return (
    <>
   
    <div id="planner">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
More About Workout Plans
                </h1>
                <div className="w-52 h-1 rounded-full bg-green-600 inline-flex"></div>

                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 lg:mt-6 mx-auto text-gray-900 font-semibold">
                  Whether or not you enjoy swimming, it might be a great way for
                  you to help shed those extra pounds alongside other forms of
                  exercise. Swimming is a cardio activity that increases your
                  heart and respiratory rates. Note that research shows that
                  swimming or exercising for 30 minutes every day reduces your
                  risk of heart disease, stroke, and Type 2 diabetes.
                </p>
              </div>
            </div>
            <br/>
            <img
              className="lg:mt-8 lg:justify-center lg:px-52 sm:mt-14"
              src="https://www.quoteambition.com/wp-content/uploads/2022/01/Swimming-Quotes-to-Give-You-Courage-to-Dive-Into-Life.jpg?ezimgfmt=ng:webp/ngcb1"
              alt=""
            ></img>

            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Beginner Swim Workout Plan 1
                  </h2>
                  <div className="w-12 h-1 bg-green-600 rounded mt-2 mb-4"></div>
                  <p className="text-base text-black">
                    Goal: Build endurance Distance: 600 yards
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-green-600 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <ul className="text-base text-black">
                  <li>
                    2 x 50 yards crawl warm-up. You can rest in between the laps
                    if you wish to.
                  </li>
                  <li>4 x 25 yards crawl counting strokes per length. </li>
                  <li>
                    4 x 50 crawl with 30 seconds of rest between each lap.
                  </li>
                  <li>
                    4 x 25 yards crawl counting strokes per length. If possible,
                    keep an even number of strokes.{" "}
                  </li>
                  <li>
                    2 x 50 crawl cool-down. Swim slowly and allow your body to
                    relax.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Beginner Swim Workout Plan 2
                  </h2>
                  <div className="w-12 h-1 bg-green-600 rounded mt-2 mb-4"></div>
                  <p className="text-base text-black">
                    Goal: Build endurance, get used to pushing yourself through
                    the water Distance: 1,000 yards{" "}
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-green-600 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <ul className="text-base text-black">
                  <li>
                    8 x 25 yards flutter kick with a board with 15 seconds rest
                    period in between.
                  </li>
                  <li>
                    4 x 50 yards alternate laps of freestyle (odds) and
                    backstroke (evens) with 20 seconds rest.
                  </li>
                  <li>
                    8 x 25 yards alternate sprint kicks (odds) and easy kicks
                    (evens) with 10 seconds rest in between laps
                  </li>
                  <li>60 seconds rest.</li>
                  <li>
                    8 x 25 yards freestyle with 15 seconds of rest in between
                    laps.
                  </li>
                  <li>
                    8 x 25 yards alternating sprint freestyle (odds) and easy
                    backstroke (evens) with 10 seconds rest in between laps.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Beginner Swim Workout Plan 3
                  </h2>
                  <div className="w-12 h-1 bg-green-600 rounded mt-2 mb-4"></div>
                  <p className="text-base text-black">
                    Goal: Improve endurance, breathing control, and turning
                    control Distance: 1,200 yards.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-green-600  sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <ul className="text-base text-black">
                  <li>300 yards crawl warm-up. Don’t rest during the swim.</li>
                  <li>
                    4 x 50 yards crawl alternating breathing each length with a
                    15 second rest period in between laps. Breathe every 4th
                    stroke on the first 25 yards, and breathe every 2nd stroke
                    on the second 25 yards. You will need to count your strokes
                    as you swim to know on which stroke you breathe.
                  </li>
                  <li>
                    200 yards crawl, no breath approaching the wall. You can
                    breathe in any pattern during the swim but don’t breathe
                    during the 4 strokes of approaching the end of the pool.{" "}
                  </li>
                  <li>
                    10 x flip turns. Practice taking 2 strokes and doing a flip
                    turn then another 2 strokes.
                  </li>
                  <li>
                    4 x 50 yards choice of strokes with a 15 seconds rest
                    between laps. You can choose one type of stroke and stick
                    with it or mix it up.
                  </li>
                  <li>
                    300 crawl cool-down. Swim slowly and let your body relax.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Swimming Workout Plan For Intermediate
            </h1>
            <div className="w-52 h-1 rounded-full bg-blue-600 inline-flex"></div>

            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 lg:mt-10  sm:mt-10 mx-auto text-gray-500 font-semibold">
              After you build endurance and have mastered proper breathing
              techniques you can gradually increase the intensity of your
              workouts. Remember the more intense your swimming workout is, the
              more calories you burn.
            </p>
            <div className="flex mt-6 justify-center">
            <img
              className="lg:mt-8 sm:mt-10"
              src="https://betterme.world/articles/wp-content/uploads/2020/06/Frame-3882-1024x576.png"
              alt=""
            ></img>
            </div>
          </div>
          
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Intermediate Swim Workout Plan 1
                </h2>
                <div className="w-52 h-1 rounded-full bg-blue-600 inline-flex "></div>

                <ul className="leading-relaxed text-base text-black border-x-2  sm:border-r ml-8 lg:mt-8 sm:mt-8">
                  <li className="lg:mt-10 sm:mt-6">Goal: Master breath control, gain consistency.</li>
                  <li> Distance: 1600 yards.</li>

                  <li>
                    6 x 50 yards flutter kick on board with 20 seconds rest in
                    between laps.
                  </li>

                  <li>
                    3 x 100 yards alternating freestyle (odds) and backstroke
                    (evens) with 30 seconds rest in between.
                  </li>

                  <li>
                    6 x 50 yards alternating sprint kick (odds) and easy kick
                    (odds) with a 15 seconds rest period in between laps.
                  </li>

                  <li>
                    60 seconds rest.6 x 50 yards freestyle with a 20 seconds
                    rest period in between laps.
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Intermediate Swim Workout Plan 2
                </h2>
                <div className="w-52 h-1 rounded-full bg-blue-600 inline-flex"></div>

                <ul className="leading-relaxed text-base text-black lg:mt-8 sm:mt-8 ">
                  <li>Goal: Sprinting</li>
                  <li> Distance: 1800 yards</li>

                  <li>
                    200 yards crawl warm-up with a 30 seconds rest period in
                    between.
                  </li>

                  <li>
                    {" "}
                    8 x 25 yards wind sprints resting: 30 between lengths. Swim
                    each length without taking a breath.
                  </li>

                  <li>
                    {" "}
                    2 x 200 yards crawl counting strokes per length. Try to keep
                    all lengths at an equal number of strokes
                  </li>

                  <li>
                    8 x 25 yards wind sprints resting: 30 between lengths.
                    Complete each length without taking a breath{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Intermediate Swim Workout Plan 3
                </h2>
                <div className="w-52 h-1 rounded-full bg-blue-600 inline-flex"></div>

                <ul className="leading-relaxed text-base text-black lg:mt-8 sm:mt-8 border-x-2  sm:border-r">
                <li>Goal: Develop all the 4 strokes</li> 
                  <li> Distance: 2000 yards</li>

                  <li>
                    400 yards warm-up alternating lengths of crawl and other
                    strokes. Make every other length crawl and the other lengths
                    a mix of the other 3 strokes.
                  </li>

                  <li>
                    {" "}
                    2 x 100 butterfly. Rest for 30 seconds in between. Make the
                    2nd 100-yard faster than the first.
                  </li>

                  <li>
                    2 x 100 backstroke with a 30 second rest period in between.
                    Make the 2nd 100-yard faster than the first.
                  </li>
                  <li>200 yards cool-down. Use all 4 strokes. Swim slowly.</li>
                </ul>
              </div>
            </div>
          </div>
          <Link href={'dietplans'}>
          <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Go to diet plans
          </button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}

