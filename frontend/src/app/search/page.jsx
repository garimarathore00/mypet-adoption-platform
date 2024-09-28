'use client';
import Data from "@/dummydata";
import Link from "next/link";
import { useState } from "react";

const petType = [
    'Dog',
    'Cat',
    'Rabbit',
    'Parrot'
]

const Search = () => {

    const [productData, setProductData] = useState(Data);

    const displayProducts = () => {
        return productData.map(product => (
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                    src={product.img}
                    className="object-cover w-full h-64"
                    alt=""
                />
                <div className="p-5 border border-t-0">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                            aria-label="Category"
                            title="traveling"
                        >


                        </a>

                    </p>
                    <a
                        href="/"
                        aria-label="Category"
                        title="Visit the East"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                        {product.Name}
                    </a>
                    <p className="mb-2 text-gray-700">



                    </p>

                    <p className="mb-2 text-gray-700">

                        {product.Breed}


                    </p>
                    <p className="mb-2 text-gray-700">

                        


                    </p>
                    <p className="mb-2 text-gray-700">

                       

                    </p>
                    <p className="mb-2 text-gray-700">

                        

                    </p>
                    <p className="mb-2 text-gray-700">

                       

                    </p>
                    <Link
                        href={"/viewpet/" + product.id}
                        aria-label=""
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black  bg-border-blue transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-blue-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        Learn more
                    </Link>
                </div>
            </div>
        ))
    }

    const filterPet = (type) => {
        setProductData(Data.filter(pet => pet.Type === type))
    }

    const searchPet = (e) => {
        const name = e.target.value;
        setProductData(Data.filter(pet => pet.Name.toLowerCase().includes(name)))
    }

    return (
        <>

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                    {/* Form */}
                    <form>
                        <div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                            <div className="w-full">
                                <label
                                    htmlFor="hs-search-article-1"
                                    className="block text-sm text-gray-700 font-medium dark:text-white"
                                >
                                    <span className="sr-only">Search pets</span>
                                </label>
                                <input
                                    onChange={searchPet}
                                    type="email"
                                    name="hs-search-article-1"
                                    id="hs-search-article-1"
                                    className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    placeholder="Search article"
                                />
                            </div>
                            <div>
                                <a
                                    className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    href="#"
                                >
                                    <svg
                                        className="shrink-0 size-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx={11} cy={11} r={8} />
                                        <path d="m21 21-4.3-4.3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </form>
                    {/* End Form */}


                </div>
                <div className="mx-auto flex items-center justify-center">

                    <div className="my-5 sm:mt-20">
                        {
                            petType.map(type => (
                                <button
                                    onClick={() => filterPet(type)}
                                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"

                                >
                                    {type}
                                </button>
                            ))
                        }
                    </div>
                </div>


                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                    {displayProducts()}
                </div>
            </div>
        </>
    );
};

export default Search;