import React from "react";
import { FaBiohazard, FaRadiation, FaFlask } from "react-icons/fa";

export default function SelectionPage() {
  return (
    <div>
      <section
        className="relative block bg-gradient-to-b from-blue-600 to-blue-800"
        style={{ height: "200px" }}
      ></section>
      <section className="relative py-16 bg-gradient-to-b from-blue-800 to-blue-900">
        <div className="container mx-auto px-8">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-auto px-4 lg:order-2 flex justify-center"></div>
                <div className="w-full lg:w-auto px-4 lg:order-3 lg:text-right lg:self-center text-center">
                  <div className="px-8 mt-8 sm:mt-0 text-xl font-bold uppercase text-gray-700">
                    Select your subject
                  </div>
                  <span className="text-sm text-gray-500 italic">
                    What are you feeling today?
                  </span>
                </div>
                <div className="w-full lg:w-4/12 md 6/12 px-10 lg:order-1">
                  <div className="sm:flex justify-center py-4 lg:pt-4">
                    <div className=" p-3 text-center">
                      <button className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        <span className="text-4xl font-semibold inline-block py-5 px-5 uppercase rounded-full text-white bg-green-800 mr-3">
                          <FaBiohazard />
                        </span>
                        Biology
                      </button>
                      <button className="text-sm text-gray-500">
                        'OMFG what is that?' - Click this one
                      </button>
                    </div>
                    <div className=" p-3 text-center">
                      <button className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        <span className="text-4xl font-semibold inline-block py-5 px-5 uppercase rounded-full text-white bg-yellow-800 mr-3">
                          <FaFlask />
                        </span>{" "}
                        Chemistry
                      </button>
                      <button className="text-sm text-gray-500">
                        If Corn oil is made from corn, <br></br>
                        and Olive Oil is made from olives, where does Babby Oil
                        come from?
                      </button>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <button className="text-xl font-bold block uppercase tracking-wide text-gray-700 flex flex-col">
                        <span className="text-4xl font-semibold inline-block py-5 px-5 uppercase rounded-full text-white bg-red-800 mr-3">
                          <FaRadiation />
                        </span>{" "}
                        Physics
                      </button>
                      <span className="text-sm text-gray-500">
                        If sound can't travel through vacuums, why are they so
                        loud?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
