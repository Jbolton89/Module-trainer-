import React, { useState } from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FaFrown, FaGrinAlt, FaMeh } from "react-icons/fa";


export default function Dashboard() { 

    const [currentFace, setCurrentFace] = useState(''); 

    const renderFace = () => { 
        if (currentFace === 'FaFrown') { 
            return <FaFrown />
        }
        if (currentFace === 'FaGrinAlt') { 
            return <FaGrinAlt /> 
        }
        return < FaMeh />
    };

    const handlePageChange = (face) => setCurrentFace(face); 








    return ( 
        <div className='relative bg-gradient-to-b from-blue-600 to-blue-900'>

            
      
           
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
    <div styleName="width:30%" className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-200">

    </div>
  </div>
</div>
           









                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-blue rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4 border-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Progress
                          </h5>
                          <span className="font-semibold text-xl text-blueGray-700">
                            Doing ok
                          </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500 border-2">
                            {renderFace()}
                          </div>
                         
                        </div>
                      </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                        <span className="text-emerald-500 mr-2">
                          <i className="fas fa-arrow-up"></i> 3.48%
                        </span>
                        <span className="whitespace-nowrap">
                          Since last month
                        </span>
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
                      <p className="text-sm text-blueGray-400 mt-4">
                        <span className="text-red-500 mr-2">
                          <i className="fas fa-arrow-down"></i> 3.48%
                        </span>
                        <span className="whitespace-nowrap">
                          Since last week
                        </span>
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
                        <span className="whitespace-nowrap">
                          Since yesterday
                        </span>
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
                        <span className="whitespace-nowrap">
                          Since last month
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                </div>


        </div>
    )
}
      