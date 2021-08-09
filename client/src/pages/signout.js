import React from "react";

export default function Signout() {
  return (
    <div className="text-white mx-auto px-4 bg-gradient-to-b from-blue-600 to-blue-900">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4 mt-24">
          <h2 className="text-4xl font-semibold">See you next time..</h2>
          <p className="text-lg leading-relaxed m-4 text-white text-opacity-50">
            Thank you for joining in the Module Trainer. Leave a comment below
            (in future), etc
          </p>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full lg:mb-0 mb-12 px-4 object-center">
          <div className="px-6">
            {/* <img
                  alt="..."
                  src=""

                /> */}
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Jason Bolton</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Aspiring Developer
              </p>
              <div className="mt-6">
                <button
                  className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                ></button>
                <button
                  className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                ></button>
                <button
                  className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
