import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FaFrown, FaGrinAlt, FaMeh, FaFlask, FaBiohazard, FaRadiation } from "react-icons/fa";

export default function Dashboard() {
  const [currentFace, setCurrentFace] = useState("");

  const renderFace = () => {
    if (currentFace === "FaFrown") {
      return <FaFrown />;
    }
    if (currentFace === "FaGrinAlt") {
      return <FaGrinAlt />;
    }
    return <FaMeh />;
  };

  const handlePageChange = (face) => setCurrentFace(face);

  return (
    <div className="relative bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="flex flex-wrap">
        <div className="relative p-10 w-full">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block p-3 uppercase rounded-full text-white bg-blue border-4">
                Current Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-3xl font-semibold inline-block text-white">
                30%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-5 mt-5 mb-12 text-xs flex rounded bg-green-400">
            <div
              styleName="width:30%"
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-200"
            ></div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-blue rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4 border-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-grey-400 uppercase font-bold text-xs">
                    Progress
                  </h5>
                  <span className="font-semibold text-xl text-grey-400">
                    Doing ok
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500 border-2">
                    {renderFace()}
                  </div>
                </div>
              </div>
              <p className="text-sm text-grey-400 mt-4">
                <span className="text-emerald-500 mr-2">
                  <i className="fas fa-arrow-up"></i> 3.48%
                </span>
                <span className="whitespace-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-blue rounded mb-6 xl:mb-0 shadow-lg border-4">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-gray-400 uppercase font-bold text-xs">
                    Classes completed
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    1
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full border-2 bg-orange-500">
                    {renderFace()}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                <span className="text-red-500 mr-2">
                  <i className="fas fa-arrow-down"></i> 3.48%
                </span>
                <span className="whitespace-nowrap">Since last week</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-blue rounded mb-6 xl:mb-0 shadow-lg border-4">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    Overall position
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    4
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500 border-2">
                    {renderFace()}
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-400 mt-4">
                <span className="text-orange-500 mr-2">
                  <i className="fas fa-arrow-down"></i> 1
                </span>
                <span className="whitespace-nowrap">Since yesterday</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-blue rounded mb-6 xl:mb-0 shadow-lg border-4">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    Performance
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    49,65%
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full border-2 bg-green-500">
                    {renderFace()}
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-400 mt-4">
                <span className="text-emerald-500 mr-2">
                  <i className="fas fa-arrow-up"></i> 12%
                </span>
                <span className="whitespace-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <section
        className="relative block bg-gradient-to-b from-blue-700 to-blue-800 mt-24"
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
                        <span className="text-4xl font-semibold inline-block py-5 px-5 uppercase rounded-full text-white bg-yellow-700 mr-3">
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
