import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer flex gap-[25vh] justify-center w-full h-[38vh]  text-white bg-[#222725]">
        <div className="footer-first flex flex-col mt-[7vh]">
          <h1 className="text-[40px] font-medium">Xcrypto</h1>
          <h2 className="text-[20px] text-slate-600 flex flex-col">
            <span>Trade Grade:Bitcoin</span>
            <span>& Cryptocurrency Trading Plateform</span>
          </h2>
        </div>
        <div className="footer-link">
          <h1 className="mt-[8vh] mb-[1vh] text-[30px] text-slate-400 font-semibold">
            Links
          </h1>
          <ul className="list-none">
            <li>
              <Link
                to={"/exchanges"}
                className="hover:underline text-[18px] text-slate-200 m-2"
              >
                Trade Crypto 
              </Link>
            </li>
            <li>
              <Link
                to={"/coins"}
                className="hover:underline text-[18px] text-slate-200 m-2"
              >
                 Crypto Rate
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="hover:underline text-[18px] text-slate-200 m-2"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <h1 className="mt-[8vh] mb-[1vh] text-[30px] text-slate-400 font-semibold">
            Contact us
          </h1>
          <ul className="list-none">
            <li>
              <Link className="hover:underline text-[18px] text-slate-200 m-2">
                Meera Ghati
              </Link>
            </li>
            <li>
              <Link className="hover:underline text-[18px] text-slate-200 m-2">
                India, Haryana, Karnal
              </Link>
            </li>
            <li>
              <Link className="hover:underline text-[18px] text-slate-200 m-2">
                ak08118967@gmail.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-legal">
          {" "}
          <h1 className=" mt-[8vh] mb-[1vh] text-[30px] text-slate-400 font-semibold">
            Legal
          </h1>
          <ul className="list-none font-normal">
            <li>
              <Link className="hover:underline text-[18px] text-slate-200 m-2">
                Terms and use
              </Link>
            </li>
            <li>
              <Link className="hover:underline text-[18px] text-slate-200 m-2">
                Privacy and Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline text-[18px] text-slate-200 m-2">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#121113] w-full h-[5vh] text-white font-semibold text-[15px]">
        <p>CopyRight 2024 Trade Grade. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
