export const aboutus = () => {
  
  return ( 
<section className="text-gray-600 body-font">

  <div className="container px-5 py-24 mx-auto flex flex-col">
  
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
      <h1 className="mb-5 font-sans text-3xl font-bold tracking-tight text-brown-900 sm:text-4xl sm:leading-none">
         About Us
        </h1>
      

        <img
          alt="content"
          className="object-contain object-center h-full w-full"
          src="https://dogsbestlife.com/wp-content/uploads/2021/05/puppy-adoption-scaled.jpeg"
        />
      </div>
      
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">
          At PawsomeAdopt, our mission is to connect loving homes with pets in need. We believe that every pet deserves a safe, caring environment, and we strive to make the adoption process as easy, transparent, and fulfilling as possible. By partnering with local shelters, rescue groups, and foster homes, we aim to help as many pets as we can find their forever families.

          </p>
          
        </div>
      </div>
    </div>
  
</section>
 );
};
export default aboutus;
