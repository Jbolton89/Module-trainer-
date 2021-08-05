import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/logo.jpg';
import { FaFrog } from "react-icons/fa";

export default function Navbar() { 

    const location = useLocation(); 

    const routes = [ 
        
        {
            title: 'Dashboard',
            url: './dashboard'
        },
        {
            title: 'Signout', 
            url:'/signout'
        }
    ]

    return ( 
       
            <nav className='flex items-center justify-between flex-wrap bg-blue-600 p-6'>
                {/* Navbar container here */}
                
                <div className={`flex items-centre flex-shrink-0 text-white mr-6 ${location.pathname === '/' ? 'nav-link-active hover:text-blue-200' : 'nav-link' }`}>
                <div className="md:pr-12">
                  <div className="text-white text-6xl text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-900">
                    <FaFrog />
                  </div>
                    {/* <img src={Logo} alt='' class='h-14 w-14'></img> */}
        
                    {/* Try and find a badge for here */}
                       <span className="font-bold text-3xl m-auto">
                        <Link to='/'>Module Trainer</Link>
                        </span>
                        </div>
                
            
                
                </div> 
                <div className='w-fill block flex grow sm:flex sm:items-center sm:w-auto justify-between'>  

                    {routes.map((route) => { 
                        return ( 
                            <div key={route.title}  >
                                <Link to={route.url}
                                className={`bg-blue-700 bg-opacity-50 hover:bg-blue-800 px-5 py-3  rounded-3xl text-sm sm:flex-grow text-white ${location.pathname === route.url ? 'nav-link-active' : 'nav-link'}`}>
                                    {route.title}
                                </Link>
                            </div>
                        )
                    })}

                    {/* Need to make this collapse */}

                </div>

            </nav>
    )
}