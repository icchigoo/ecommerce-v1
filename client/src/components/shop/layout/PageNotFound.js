

import Layout from "./index";
import React from "react";

const PageNotFoundComponent = (props) => {
  return (
    <>
      <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 mt-10">
    <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
      About Me.
    </h1>
  </div>
  <div className="bg-[#F1F1F1] -mt-5 dark:bg-gray-900">
    <div className="text-container max-w-6xl mx-auto pt-80"> {/* Increased top padding */}
      <p
        className="leading-loose text-2xl md:text-4xl font-semibold mx-4"
        style={{ lineHeight: "3rem" }}
      >
        "Passionate about fashion and entrepreneurship, I revel in exploring new styles and embracing bold choices. At Nep-Hype, discover curated collections that inspire your unique fashion journey."
        <a className="bg-red-500 rounded-md px-2 py-1 text-white" href="">
          passionate lover of fashion✈️
        </a>
      </p>
    </div>
  </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
          <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
            {/* Social Buttons */}
            <div className="inline-flex flex-col">
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Contact
                </h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  For any sort help / enquiry, shoot a{" "}
                  <a
                    href=""
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  >
                    mail
                  </a>{" "}
                  and I'll get back. I swear.
                </p>
              </div>

              {/* Social Links */}
              <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                Social Links
              </h1>

              <div className="mt-4 ml-4">
                <div className="flex flex-row justify-start items-center mb-0">
                  <a
                    href=""
                    className="flex flex-row items-center space-x-2 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      Facebook
                    </div>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center mb-0">
                  <a
                    href=""
                    className="flex flex-row items-center space-x-2 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      Twitter
                    </div>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href=""
                    className="flex flex-row items-center space-x-2 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                      Instagram
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Text area */}
            <div className="col-span-1 md:col-span-2">
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">
                Welcome to Nep-Hype, where fashion comes alive! We are an
                exquisite online boutique dedicated to empowering individuals
                with trendy and captivating clothing options. From chic
                essentials to statement pieces, our carefully curated collection
                reflects the latest fashion trends and timeless styles. Explore
                our virtual shelves and discover the perfect garments to elevate
                your wardrobe. With a seamless shopping experience and
                exceptional customer service, we strive to make your fashion
                journey unforgettable. Embrace your unique style and let
                Nep_Hype be your go-to destination for all your fashion desires.
              </p>

              <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                Thank you!
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const PageNotFound = (props) => {
  return (
    <Layout>
      <PageNotFoundComponent />
    </Layout>
  );
};

export default PageNotFound;
