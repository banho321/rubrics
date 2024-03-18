import React from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { Dropdown } from "antd";

const Navbar = () => {
  const items = [
    {
      key: "1",
      label: (
            <Link
       
          rel="noopener noreferrer"
          to="/"
        >
          Trang chủ
        </Link>
  
      )
    },
    {
      key: "2",
      label: (
        <Link
       
          rel="noopener noreferrer"
          to="/dashboard"
        >
          Trang điều khiển
        </Link>
      )
    },
    {
      key: "3",
      label: (
        <Link
       
          rel="noopener noreferrer"
          to="/profile"
        >
          Trang cá nhân
        </Link>
      )
    }
  ];

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            RubRics
          </span>
        </Link>
        {/* <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block"></div>
          <Link
            to="/"
            className="text-white bg-purple-700 mr-2 hover:bg-purple-800 focus:ring-4
         focus:ring-purple-300 font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5
          sm:mr2 lg:mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none
           dark:focus:ring-purple-800"
          >
            Đăng ký
          </Link>
          <Link
            to="/"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4
         focus:ring-purple-300 font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5
          sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none
           dark:focus:ring-purple-800"
          >
            Đăng nhập
          </Link>
        </div> */}
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block"></div>


          <div
            className="text-white text-xl bg-purple-700 mr-2 hover:bg-purple-800 focus:ring-4
         focus:ring-purple-300 font-medium rounded-lg  px-3 lg:px-5 py-2 lg:py-2.5
          sm:mr2 lg:mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none
           dark:focus:ring-purple-800"
          >
            <Dropdown
              menu={{
                items
              }}
              placement="bottomRight"
              arrow
            >
              <FaRegUserCircle />
            </Dropdown>
          </div>

          
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent
          lg:text-purple-700 lg:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100
          hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 
          lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700
           dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/Signin"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100
          hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 
          lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700
           dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Signin
              </Link>
            </li>
            <li>
              <Link
                to="/SignUp"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100
          hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 
          lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700
           dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
