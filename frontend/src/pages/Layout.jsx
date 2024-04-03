/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const menu = [
    { text: "Pop", path: "/" },
    { text: "K-Pop", path: "/" },
    { text: "T-Pop", path: "/" },
    { text: "J-Pop", path: "/" },
    { text: "K-Indie", path: "/" },
    { text: "T-Indie", path: "/" },
    { text: "Concert", path: "/" },
  ];
  return (
    <div>
      {/* <Header></Header> */}
      <div className="border-b">
        <div className="container px-5 py-5 flex flex-col sm:flex-row items-center justify-between">
          <Link to='/'>
            <img src="/images/chewblog.png" alt="" className="w-32 h-auto mb-3 sm:mb-0" />
          </Link>
          <div className="flex justify-center sm:justify-end items-center font-semibold">
            <ul className='grid grid-cols-4 lg:grid-cols-8'>
              {menu.map((x, i) => (
                <li key={i} className="mr-3 mb-3 sm:mb-0 hover:bg-slate-500 hover:text-white hover:rounded-full">
                  <Link className='p-2 items-center justify-center flex' to={`/?category=${x.text}`}>
                    <span>{x.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <button className='bg-black text-white px-3 py-2 ml-0 mt-3 sm:ml-5 sm:mt-0 rounded-full'>
              <Link to='/create'>Create your blog</Link>
            </button>
          </div>
        </div>
      </div>

      {/* <Body></Body> */}
      <div className="flex mx-auto px-5 md:px-20">
        <div className="mt-5 mb-5 min-h-[500px] w-full">
          <Outlet></Outlet>
        </div>
      </div>
      {/* <Footer></Footer> */}
      <div className="flex">
        <div className="flex mx-auto px-5 py-5 items-center justify-center">
          <p className="text-black">© 2024 Chew Blogs™. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
