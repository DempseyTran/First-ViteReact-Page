import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaPlus, FaSortDown } from "react-icons/fa";
import { IoChevronBackOutline, IoChevronForwardOutline, IoGridSharp } from "react-icons/io5";

const FullCharacter = ({ Data }) => {
  return (
    <div className="FullCharacter-Wrapper mx-28 h-auto flex font-GretaBold mb-28">
      <div className="Fiter-Container h-full w-[440px]">
        <div className="Input-Container w-full h-9 flex items-center border border-gray-light rounded-full px-5 py-1">
          <CiSearch className="object-contain cursor-pointer" />
          <input
            className="rounded-full px-5 focus:outline-none"
            type="text"
            name="Filter"
            id="Filter-By-Keyword"
            placeholder="Filter by Keyword"
          />
        </div>
        <div className="Alignment text-2xl flex justify-between items-center h-12 mt-4">
          <h3>ALLIGNMENT</h3>
          <button className="text-lg">
            <FaPlus />
          </button>
        </div>
        <div className="Alignment text-2xl flex justify-between items-center h-12">
          <h3>TYPE</h3>
          <button className="text-lg">
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="Characters-Container w-[920px] px-10">
        <h1 className="heading-text h-10 text-5xl">BROWSE CHARACTERS (247)</h1>
        <div className="Icon-Container flex justify-self-end gap-2">
          <div className="flex items-center gap-3">
            <FaBars />
            <IoGridSharp />
          </div>
          <div className="A-Z-Container w-16 text-lg flex justify-between ml-4">
            <h2>A-Z</h2>
            <FaSortDown />
          </div>
        </div>
        <div className="Characters grid grid-cols-4 gap-5 mt-5">
          {Data.map((item) => (
            <div className="Card-Container cursor-pointer" key={item.id}> 
              <img src={item.images} alt="Search" className="" />
              <div className="Text-Container">
                <h2 className="name text-2xl text-center font-GretaBold my-4 mt-2">
                  {item.name}
                </h2>
                {/* <h3>{item.description}</h3> */}
              </div>
            </div>
          ))}
        </div>
        <div className="MiniNav-Container flex gap-7 mt-6 justify-center">
          <button className="text-lg hover:text-blue"><IoChevronBackOutline /> </button>
          <button className="text-lg hover:text-blue">1</button>
          <button className="text-lg hover:text-blue">2</button>
          <button className="text-lg hover:text-blue">...</button>
          <button className="text-lg hover:text-blue">12</button>
          <button className="text-lg hover:text-blue"><IoChevronForwardOutline/></button>
        </div>
      </div>
    </div>
  );
};

export default FullCharacter;
