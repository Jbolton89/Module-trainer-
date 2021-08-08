import React from "react";
import { Link } from 'react-router-dom';
import {
  FaBiohazard,
  FaFlask,
  FaRadiation,
  FaBookOpen,
  FaAppleAlt,
} from "react-icons/fa";


export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-900">
      <div>
        <section className="relative">
          <div className="md:pr-12 text-white ml-10">
            <h3 className="text-3xl font-semibold">
              Online Training, to get your mind ripped
            </h3>
            <p className="mt-4 ml-6 text-lg leading-relaxed mt-1 text-sm text-gray-300 italic">
              Think you are pretty bright huh? Why dont' you put your brain to
              the test. Come on down and have a brain training session with your
              old mate Jason.
            </p>
            <div className='m-8 text-bold font-bold'> 
                    <h4 className=''> Current Packages: </h4>
                  </div>
            <ul className="list-none m-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-4xl font-semibold inline-block py-5 px-5 uppercase rounded-full text--600 bg-blue-800 mr-3">
                      <FaBiohazard />
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-900-bold">Biology</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-4xl font-semibold inline-block py-5 px-5 uppercase rounded-full text-white bg-blue-800 mr-3">
                      <FaRadiation />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blue-900-bold">Physics</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-4xl font-semibold inline-block py-5 px-5 uppercase rounded-full text-white bg-blue-800 mr-3">
                      <FaFlask />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blue-900-bold">Chemistry</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-12 md:width-auto">
            <Link to='./login'>
            <button className="bg-purple-600 bg-opacity-50 hover:bg-purple-600 shadow text-white dont-bold py-4 px-8 rounded-full ml-5">
              <div className="flex">
                <FaBookOpen className="text-6xl"></FaBookOpen>
                <p className="flex-items pl-5">
                  I am keen to continue learning
                </p>
              </div>
            </button>
            </Link>
            <Link to='signup'>
            <button className="bg-red-600 bg-opacity-50 hover:bg-red-600 shadow text-white dont-bold py-4 px-8 rounded-full ml-5">
              <div className="flex">
                <FaAppleAlt className="text-6xl"></FaAppleAlt>
                <p className="pl-5">I am keen to begin learning</p>
              </div>
            </button>
            </Link>
          </div>
        </section>
      </div>
      <div>
        <section className="relative py-20"></section>
      </div>
    </div>
  );
}
