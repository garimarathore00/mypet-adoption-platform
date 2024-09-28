'use client';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string().required('Password is required')

});
 const login = () =>  {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(users);

      const matchedUser = users.find(user => {
        user.email === values.email && user.password === values.password
      })

      if (matchedUser !== null) {
        localStorage.setItem('authenticated', JSON.stringify(values));
        toast.success('Loggedin Successfully');
        window.location = '/search'
        resetForm();
      } else {
        toast.error('Login Failed');
      }
    },
    validationSchema: LoginSchema
  })
  
  return (     
    
    <div className="overflow-hidden bg-gray-900">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
          <img src="https://img.freepik.com/premium-photo/cat-dog-friend-together-home-concept_726330-3669.jpg" alt="" />
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Pet Adoption Platfrom <br className="hidden md:block" />
             
               
              <span className="text-teal-accent-400"></span>
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
            Looking for unconditional love? Visit the shelter today!
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
            >
              
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
              >
                <defs>
                  <pattern
                    id="766323e1-e594-4ffd-a688-e7275079d540"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                  width="52"
                  height="24"
                />
              </svg>
              <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                 Login Page
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="Enter your email"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="Enter your password "
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default login;