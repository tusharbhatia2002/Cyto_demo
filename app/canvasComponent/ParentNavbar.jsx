"use client"
import React, { useState } from "react";
import { FaHome, FaFile } from "react-icons/fa";

const ParentNavbar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showFileDropdown, setShowFileDropdown] = useState(false);

  const handleButtonClick = (button) => {
    if (activeButton === button) {
      setActiveButton(null);
    } else {
      setActiveButton(button);
    }
  };

  const handleFileDropdown = () => {
    setShowFileDropdown(!showFileDropdown);
  };

  return (
    <nav className="bg-gray-700 py-1 w-full">
      <div className="flex justify-start">
        <button
          className={`${
            activeButton === "home"
              ? "bg-gray-300 text-black"
              : "bg-gray-800 hover:bg-gray-700 text-white"
          } py-0.5 px-1.5 rounded-md mr-1 text-xs`}
          onClick={() => handleButtonClick("home")}
        >
          <a href ="/">
            <FaHome className="mr-1" /> Home
          </a>
        </button>
        <div className="relative inline-block text-left">
          <button
            className={`${
              activeButton === "file"
                ? "bg-gray-300 text-black"
                : "bg-gray-800 hover:bg-gray-700 text-white"
            } py-0.5 px-1.5 rounded-md mr-1 text-xs`}
            onClick={() => handleButtonClick("file")}
            onBlur={() => setShowFileDropdown(false)}
          >
            <FaFile className="mr-1" /> File
          </button>
          {activeButton === "file" && (
            <div className="absolute left-0 mt-1 w-40 bg-gray-800 text-white text-xs rounded-md shadow-lg">
              <button
                className="block py-1 px-4 hover:bg-gray-400 w-40 rounded-md"
                onClick={() => handleFileDropdown()}
              >
                Select FCS File
              </button>
              {showFileDropdown && (
                <div className="bg-gray-700 py-1 px-4">
                  {/* Dropdown options */}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ParentNavbar;
