'use client';
import Data from "@/dummydata";
import { useState } from "react";

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
                        {product.Type},

                        
                    </p>
                        
                    <p className="mb-2 text-gray-700">
                        

                        
                        {product.Breed},
                        
                    
                    </p>
                    <p className="mb-2 text-gray-700">
                        
                       {product.Gender},
                        
                    
                        
                    </p>
                    <p className="mb-2 text-gray-700">
                    
                        {product.Age},
                        
                    </p>
                    <p className="mb-2 text-gray-700">
                    
                        {product.Location},
                        
                    </p>
                    <p className="mb-2 text-gray-700">
                    
                        {product.Description},
                        
                    </p>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        ))
    }

    return (
        <>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                    {displayProducts()}
                </div>
            </div>
        </>
    );
};

export default Search;