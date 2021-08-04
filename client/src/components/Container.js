import React from 'react'; 
import Navbar from './Navbar';


import Home from '../pages/home.js';
import Biology from '../pages/biology'; 
import Chemistry from '../pages/chemistry'; 
import Physics from '../pages/physics'; 
import Dashboard from '../pages/dashboard'; 
import Login from '../pages/login';
import Signup from '../pages/signup.js'; 
import Signout from '../pages/signout.js';   
import Footer from '../pages/footer.js'; 

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 








export default function Container() { 
    return ( 
        <div>
            <Router> 
                <Navbar /> 
                <div className='main-content'> 
                <Switch>
                    <Route path="/" component={Home} exact ></Route>
                    <Route path="/signup" component={Signup} exact ></Route>
                    <Route path="/Signout" component={Signout} exact ></Route>
                    <Route path="/dashboard" component={Dashboard} exact ></Route>
                    <Route path="/physics" component={Physics} exact ></Route>
                    <Route path="/chemistry" component={Chemistry} exact ></Route>
                    <Route path="/biology" component={Biology} exact ></Route>
                    <Route path="/login" component={Login} exact ></Route>




            </Switch>
                
                </div>
                <Footer />
            </Router>
        </div>
    )
}



