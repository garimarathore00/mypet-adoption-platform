'use client'
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required')
    .min(3, 'Name must be atleast 3 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string().required('Password is required')
    .matches(/[A-Z]/, 'Password must contain atleast one uppercase letter')
    .matches(/[a-z]/, 'Password must contain atleast one lowercase letter')
    .matches(/[0-9]/, 'Password must contain atleast one number')
    .matches(/\W/, 'Password must contain atleast one special character')
    .matches(/^(?!.\s).$/, 'Password must not contain space character'),
    confirmPassword: Yup.string().required('Confirm Password is Required')
        .oneOf([Yup.ref('password'), null], 'Password must match')
});

export const signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      resetForm();
    },
    validationSchema:SignupSchema
  })

  return (
    <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <img
          src="https://th.bing.com/th/id/OIP.cOvo5HGGk34zQwuUhGC3KAAAAA?w=394&h=376&rs=1&pid=ImgDetMain"
          className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Create a new account
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Give a Pet a Forever Home
              <br className="hidden md:block" />
              {' '}
              <span className="inline-block text-deep-purple-accent-400">

              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">

            </p>
          </div>
          <form>
            <div className="flex flex-col md:flex-row">
              <input
                placeholder="Email"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <input
                placeholder="Create password"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-brown-accent-400 hover:bg-deep-brown-accent-700 focus:shadow-outline focus:outline-none"
              >
                Join us
              </button>
              <Link
                href="/abhoutus"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                learn more
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default signup
