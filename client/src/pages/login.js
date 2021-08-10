import React, { useState } from 'react' 
import { useMutation } from '@apollo/client'; 
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Login(props) { 

  const [formState, setFormState ] = useState({ email: '', password: ''});
  const [login, { error, data }] = useMutation(LOGIN_USER);

   // update state based on form input changes
  const handleInputChange = (e) => { 
    const { name, value } = e.target;

    setFormState({ 
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => { 
    event.preventDefault();

    // const form = event.currentTarget; 
    // if (form.checkValidity() === false) { 
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    console.log(formState);
    try { 
      const mutation = await login({ 
        variables: { email: formState.email, password: formState.password},
      });
      console.log(data);

      const token = mutation.data.login.token;

      Auth.login(token); 
    } catch (e) { 
      console.error(e);
    }

    // clear form values
    setFormState({ 
      email: '',
      password: '',
    });
  }






    return ( 
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900" 
            style={{
              backgroundImage:
                "url(" + require("../images/signupBackground.PNG").default + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%"
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-grey-700 text-sm font-bold">
                        Sign in to begin learning
                      </h6>
                    </div>
                    
                    <hr className="mt-6 border-b-1 border-gray-600" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={handleFormSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                          value={formState.email}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="pwd"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                          value={ formState.password}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Create new account</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}