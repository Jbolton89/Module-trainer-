import React, { useState } from "react";
import { FaRadiation } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";

import PhysicsPDF from "../images/physics.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Physics() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [ checked, setChecked ] = useState(false); 

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((PrevPageNumber) => PrevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function handleTickboxChange() { 
    setChecked(!checked); 

  };

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
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  {/* This is where content will go */}

                  <div className="p-3 text-center">
                    <div className="text-xl font-bold block uppercase tracking-wide text-gray-700 flex flex-col">
                      <span className="text-4xl inline-block py-5 px-5 rounded-full text-white bg-red-800 mr-3 order-1">
                        <FaRadiation />
                      </span>
                      Physics
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 lg:order-1"></div>
                <div className="flex flex-row">
                  <div className=" mt-2 flex flex-col xl:flex-row">
                    <Document
                      className="border-4 m-5"
                      file={PhysicsPDF}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={console.error}
                      options={{ workerSrc: "/pdf.worker.js" }}
                    >
                      <Page pageNumber={pageNumber} />
                    </Document>

                    <Document
                      className="border-4 m-5"
                      file={PhysicsPDF}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={console.error}
                      options={{ workerSrc: "/pdf.worker.js" }}
                    >
                      <Page pageNumber={pageNumber + 1} />
                    </Document>
                  </div>
                </div>
                <div className="h-24 order-1 mx-auto text-center">
                  <p className="text-xl font-bold block uppercase tracking-wide text-gray-700 flex flex-col">
                    Page {pageNumber || (numPages ? 1 : "--")} of{" "}
                    {numPages || "--"}
                  </p>
                  <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    className="bg-blue-700 hover:bg-blue-800 px-5 py-3 rounded-3xl text-sm sm:flex-grow text-white"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    className="bg-blue-700 hover:bg-blue-800 px-5 py-3 rounded-3xl text-sm sm:flex-grow text-white"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                            defaultChecked='false'
                            onChange={handleTickboxChange}
                          />
                          <span className="ml-2 text-sm font-semibold text-white text-bold text-xl ">
                            I have completed this module!
                          </span>
                        </label>
                      </div>
        </div>
      </section>
    </div>
  );
}
