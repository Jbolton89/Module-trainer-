import React, {useState } from 'react'
import { FaRadiation} from "react-icons/fa";
import { Document, Page, pdfjs} from 'react-pdf';
import PhysicsPDF from '../images/physics.pdf';


export default function Physics() { 

    const [numPages, setNumPages ] = useState(null); 
    const [pageNumber, setPageNumber] = useState(1); 

    function onDocumentLoadSuccess({ numPages }) { 
        setNumPages(numPages);
        setPageNumber(1); 
    }

    function changePage(offset) { 
        setPageNumber(PrevPageNumber => PrevPageNumber + offset);
    }

    function previousPage() { 
        changePage(-1);
    }

    function nextPage() { 
        changePage(1); 
    }
 














    return ( 

<div> 
        
        <section className="relative block bg-gradient-to-b from-blue-600 to-blue-800" style={{ height: "200px" }}>
          
          
        </section>
        <section className="relative py-16 bg-gradient-to-b from-blue-800 to-blue-900">
          <div className="container mx-auto px-8">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-auto px-4 lg:order-2 flex justify-center">
                    
                  </div>
                  
                  <div className="w-full lg:w-4/12 md 6/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      

                    {/* This is where content will go */}



                      <div className="p-3 text-center">
                        <div className="text-xl font-bold block uppercase tracking-wide text-gray-700 flex flex-col">
                        <span className="text-4xl font-semibold inline-block py-5 px-5 uppercase rounded-full text-white bg-red-800 mr-3">
                            <FaRadiation />
                          </span>
                          Physics 
                        </div>
                        
                      </div>
                    </div>
                  </div>


                </div>
                
                <Document 
                file={PhysicsPDF}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
                options={{ pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
                 }}>
                <Page pageNumber={pageNumber} />
                </Document>
                <div>
                    <p>
                        Page {pageNumber ||(numPages ? 1 : "--")} of {numPages || '--'}
                    </p>
                    <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                        Previous
                    </button>
                    <button
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                    >
                        Next
                    </button>
                </div>
              </div>
            </div>
          </div>
        </section>
     
      </div>
    )


}