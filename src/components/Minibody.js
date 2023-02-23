// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tables from "./Tables";

const Minibody = () => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <div className="input-group flex flex-wrap items-stretch w-full mb-4">
          <input
            type="search"
            className="form-control absolute flex-auto min-w-0 block w-80 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out ml-[-17rem] mt-4 focus:text-gray-700 focus:bg-white focus:outline-none"
            placeholder="is:issue is:open"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            type="button"
            className="py-1.5 px-8 mr-2 mb-2 text-sm font-medium text-black bg-white rounded-sm hover:bg-gray-10 dark:bg-white dark:text-black dark:border-gray-600 border border-gray-100 dark:hover:text-white dark:hover:bg-gray-700 ml-14 mt-4"
          >
            Labels
          </button>
          <button
            type="button"
            className="py-1.5 px-8 mr-2 mb-2 text-sm font-medium text-black bg-white rounded-sm hover:bg-gray-10 dark:bg-white dark:text-black dark:border-gray-600 border border-gray-100 dark:hover:text-white dark:hover:bg-gray-700 ml-[-8px] mt-4"
          >
            Milestones
          </button>
        </div>
        <Tables />
      </div>
    </div>
  );
};

export default Minibody;
