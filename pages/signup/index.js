import React, { useState } from "react";
import Link from "next/link";

export default function index() {
    
  return (
    <>
      <div id="background" className=" h-full w-full min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto  flex-1 flex flex-col items-center justify-center px-2">
          <div
            id="form"
            className=" border-black   px-6 py-8 rounded shadow-md text-black w-full"
          >
            <h1 className="mb-8 text-3xl text-center text-white">Sign up</h1>
            <div className=" opacity-60 border-solid rounded-xl  h-2 w-auto"></div>
            <br />
            <form method="post" name="myform">
              <input
              id="fullname"
                type="text"
                className="block border border-grey-light w-full p-3 rounded-[24px] mb-4 form-control"
                name="fullname"
                placeholder="Full Name"
                

                
              />

              <input
                type="text"
                className="block border border-grey-light rounded-[24px] w-full p-3 mb-4"
                name="email"
                placeholder="Email"
               
              />
              <input
                type="tel"
                className="block border border-grey-light rounded-[24px] w-full p-3 mb-4"
                name="Phone"
                placeholder="Phone number"
               
              />

              <input
                type="password"
                className="block border border-grey-light rounded-[24px] w-full p-3 mb-4"
                name="password"
                placeholder="Password"
               
              />
              <input
                type="password"
                className="block border border-grey-light rounded-[24px] w-full p-3 mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
                
              />

              <button
              onClick={()=>{
                  alert('Your request has been submitted')
              }}
                type="submit"
                className="w-full text-center py-3 border-grey-light rounded-[24px] bg-red-700 text-white  focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>
            <div className="text-center text-sm text-white mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-white"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-white"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6 text-white">
            Already have an account?
            <Link href={'/'}     >
            <a className="no-underline border-b border-blue text-red-500">
              Log in
            </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
 
}

