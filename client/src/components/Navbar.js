import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        <div>

            <div>
                {/* Navbar container here */}
                <div className={location.pathname === '/' ? 'nav-link-active' : 'nav-link' }>
        
                    {/* Try and find a badge for here */}
                        <Link to='/'>Module Trainer</Link>
                
            
                
                </div> 
                <div> 

                    {routes.map((route) => { 
                        return ( 
                            <div key={route.title}>
                                <Link to={route.url}
                                className={location.pathname === route.url ? 'nav-link-active' : 'nav-link'}>
                                    {route.title}
                                </Link>
                            </div>
                        )
                    })}

                    {/* Need to make this collapse */}

                </div>

            </div>
        </div>
    )
}