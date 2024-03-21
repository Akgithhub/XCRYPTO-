import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <>
      <div>
        <button className="z-10 bg-green-900 bg-[30px] rounded-[50%] fixed top-[240px] left-[100px] border-8">
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-undo-2"
            >
              <path d="M9 14 4 9l5-5" />
              <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
            </svg>
          </Link>
        </button>
      </div>
      <div className="flex flex-row justify-center gap-[10vh] h-[90vh] w-full bg-[#CCE3DE] ">
        <div className="mt-[20vh]">
          <h1 className="text-[40px] text-slate-900 font-semibold">
            Welcome to CryptoTrack:
          </h1>
          <h1 className="text-[40px] text-slate-900 font-semibold">
            Your Real-Time Cryptocurrency Tracker
          </h1>

          {/* <div className=" text-slate-400 text-[20px] mt-[20px]">
          </div> */}
          <div className="text-slate-600 text-[20px] mt-[20px]">
            <h2>
              Our real-time cryptocurrency tracker provides up-to-the-minute
              data on various cryptocurrencies, including Bitcoin, Ethereum, and
              more.
            </h2>
            <h2>
              Stay informed with live price updates, market trends, and
              historical data, all presented in an intuitive and user-friendly
              interface.
            </h2>
            <h2 className="mt-7">
              Whether you're a seasoned investor or just curious about the
              crypto market, our app offers valuable insights to help you make
              informed decisions. Start tracking your favorite cryptocurrencies
              today!
            </h2>
            <h2 className="mt-7">
              Explore the world of cryptocurrencies with{" "}
              <strong>Xcrypto</strong> , our real-time cryptocurrency tracker.
              Stay updated on Bitcoin, Ethereum, and more, with live price
              updates, market trends, and historical data.
            </h2>
          </div>
          <button className="text-[20px] text-white bg-green-700 p-3 font-[30px] rounded-xl ml-[5px] mt-[6vh] hover:bg-green-900 ">
            <Link to={"/exchanges"} className="flex gap-3">
              Trade Crypto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="4 -3 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right-left"
              >
                <path d="m16 3 4 4-4 4" />
                <path d="M20 7H4" />
                <path d="m9 21-4-4 4-4" />
                <path d="M4 17h16" />
              </svg>
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center  gap-[10vh] h-[90vh] w-full bg-[#EAF4F4]  ">
        <div className="mt-[20vh]">
          <h1 className="text-[40px] text-slate-900 font-semibold">
            Safest and Fastest Trading
          </h1>
          <div className=" text-slate-400 text-[20px] mt-[20px]">
            <h2>
              Objectively Transform Future-Proof infomediaries for top-Lines
            </h2>
            <h2>systems. Intrinsicly aggregates funtionalised e-markets</h2>
            <h2>whereas optimal markets. Appropiately Transform enabled</h2>
            <h2>internal or "organic" sources after independent</h2>
            <h2>potentialities</h2>
          </div>
          <div className="text-slate-600 text-[30px] mt-[20px]">
            <h2>Efficiently enchance turnkey relationships before </h2>
            <h2>focused interfaces</h2>
          </div>
          <button className="text-[20px] text-white bg-green-700 p-3 font-[30px] rounded-xl ml-[4px] mt-[4vh] hover:bg-green-900 ">
            <Link to={"/coins"} className="flex gap-3">
              Crypto Rate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-line-chart"
              >
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </Link>
          </button>
        </div>
        <div className="mt-[20vh]">
          <img
            src="https://img.freepik.com/free-vector/marketing-strategy-icon-with-magnifier-growing-bars-computer-monitor-isometric_1284-63093.jpg?t=st=1710782313~exp=1710785913~hmac=d5d0c04de3370220942ebb92cbf589c43f1a84ff473ce401917d91ec651ea47c&w=826"
            alt="Image is not available"
            className="h-[60vh] "
          />
        </div>
      </div>
      <div className="flex flex-row justify-center  gap-[10vh] h-[90vh] w-full bg-[#CCE3DE] ">
        <div className="mt-[20vh]">
          <img
            src="https://img.freepik.com/free-vector/valuable-cryptocurrency-dogecoin-illustration_23-2149200127.jpg?w=826"
            alt="Image is not availabl"
            className="h-[60vh] rounded-2xl "
          />
        </div>
        <div className="mt-[20vh]">
          <h1 className="text-[40px] text-slate-900 font-semibold">
            The easiest and most
          </h1>
          <h1 className="text-[40px] text-slate-900 font-semibold">
            Secure plateform to buy and
          </h1>
          <h1 className="text-[40px] text-slate-900 font-semibold">
            Trade cryptocurrencies.
          </h1>
          {/* <div className=" text-slate-400 text-[20px] mt-[20px]">
          </div> */}
          <div className="text-slate-600 text-[20px] mt-[20px]">
            <h2>
              Objectively transform future-proof intermediaries for top-line
            </h2>
            <h2>systems. Intrinsicly aggregates funtionalised e-markets</h2>
            <h2>whereas optimal markets.</h2>
          </div>
          <button className="text-[20px] text-white bg-green-700 p-3 font-[30px] rounded-xl ml-[5px] mt-[6vh] hover:bg-green-900 ">
            <Link to={"/exchanges"} className="flex gap-3">
              Trade Crypto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="4 -3 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right-left"
              >
                <path d="m16 3 4 4-4 4" />
                <path d="M20 7H4" />
                <path d="m9 21-4-4 4-4" />
                <path d="M4 17h16" />
              </svg>
            </Link>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Aboutus;
