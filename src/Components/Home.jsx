import { Box, Image, Text,  } from "@chakra-ui/react";
import React from "react";
import btc from "../Assets/btc.png";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {" "}
      <div 
        className="home bg-cover bg-center h-screen w-[100%] "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/copy-space-bitcoin-different-colors_23-2148285316.jpg?size=626&ext=jpg&ga=GA1.1.1462547280.1708701382&semt=ais')",
        }}
      >
        <div className="home-heading text-green-800 text-[90px] font-bold">
          <h1 className="ml-[60px] ">Limitless Crypto</h1>
          <h1 className="ml-[60px]">Exchanges.</h1>
        </div>
        <div className="home-text flex flex-col ml-[60px] text-[25px] mt-8 text-slate-500">
          <span>Fast, Simple, Non-custodial Exchange Service</span>
          <span>With 10+ Crytocurriences</span>
          <span>We pay your network fees.</span>
        </div>
        <div>
          <button className="home-btn text-[20px] text-white bg-green-700 p-3 font-[30px] rounded-xl ml-[60px] mt-[6vh] hover:bg-green-900 ">
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
        <div>
          <button className="home-btn text-[20px] text-white bg-green-700 p-3 font-[30px] rounded-xl ml-[60px] mt-[2vh] hover:bg-green-900 mb-10 ">
            <Link to={"/about"} className="flex gap-3">
              About us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-badge-info"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <line x1="12" x2="12" y1="16" y2="12" />
                <line x1="12" x2="12.01" y1="8" y2="8" />
              </svg>
            </Link>
          </button>
        </div>
      </div>
      <br />
      <Box bgColor={"#899878"} w={"full"} h={"85vh"} zIndex={"10"} mt={"-10"}>
        <motion.div
          style={{
            height: "80vh",
          }}
          animate={{
            translateY: "20px",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            w={"full"}
            h={"full"}
            objectFit={"contain"}
            src={btc}
            filter={"grayscale(1)"}
          />
        </motion.div>

        <Text
          fontSize={"6xl"}
          textAlign={"center"}
          fontWeight={"thin"}
          color={"black"}
          mt={"-20"}
        >
          Xcrypto
        </Text>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default Home;
