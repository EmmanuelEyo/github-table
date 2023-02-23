import React from "react";

const Mininavbar = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="flex">
        <div className="ml-20 mt-4">
          <h1 className="text-lg">
            <a href="#">
              <p className="text-blue-400">
                facebookincubator /
                <span className="text-blue-700"> create-react-app</span>
              </p>
            </a>
          </h1>
        </div>
        <div className="ml-auto mr-14">
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="py-1 px-4 text-sm font-medium text-gray-900 bg-gray-200 rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2"
            >
              <i className="fa-solid fa-eye mr-2"></i>
              Watch
            </button>
            <button
              type="button"
              className="py-1 px-4 text-sm font-medium text-black bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2"
            >
              906
            </button>
          </div>
          <div className="inline-flex rounded-md shadow-sm ml-2" role="group">
            <button
              type="button"
              className="py-1 px-4 text-sm font-medium text-gray-900 bg-gray-200 rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2"
            >
              <i className="fa-solid fa-star mr-2"></i>
              Unstar
            </button>
            <button
              type="button"
              className="py-1 px-4 text-sm font-medium text-black bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2"
            >
              34,267
            </button>
          </div>
          <div className="inline-flex rounded-md shadow-sm ml-2" role="group">
            <button
              type="button"
              className="py-1 px-4 text-sm font-medium text-gray-900 bg-gray-200 rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2"
            >
              <i className="fa-sharp fa-solid fa-fork"></i>
              Fork
            </button>
            <button
              type="button"
              className="py-1 px-4 text-sm font-medium text-black bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2"
            >
              5,630
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-8 ml-24">
        <p className="mr-2 text-lg">
          <i className="fa-regular fa-code mr-1"></i>Code
        </p>
        <h1 className="mr-2 text-lg">
          <i className="fa-thin fa-circle-exclamation mr-1"></i>Issues{" "}
          <span className="bg-gray-300 rounded-full text-sm ml-1">236</span>
        </h1>
        <h1 className="mr-2 text-lg">
          <i className="fa-solid fa-memo"></i>Pull requests
          <span className="bg-gray-300 rounded-full text-sm ml-1">111</span>
        </h1>
        <h1 className="mr-2 text-lg">Projects</h1>
        <h1 className="mr-2 text-lg">Wiki</h1>
        <h1 className="mr-2 text-lg">
          <i className="fa-brands fa-wikipedia-w"></i>Insights
        </h1>
      </div>
    </div>
  );
};

export default Mininavbar;
