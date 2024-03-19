import { Button, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <HStack
        p={"5"}
        shadow={"base"}
        bgColor={"#f5f5f5"}
        // position={"fixed"}
        w={"full"}
        top={"0"}
        padding={"10"}
        zIndex={"10"}
        display={"flex"}
        justifyContent={"space-between"}
        // marginBottom={'5'}
      >
        <Heading >
          {" "}
          <h1 className="text-slate-800">
            
            Xcrypto</h1>
        </Heading>
        <div>
          {" "}
          <Button variant={"ghost"} cursor={"pointer"} color={"black"} >
            <Link to={"/"} className="text-[17px]">
              Home
            </Link>
          </Button>
          <Button
            variant={"ghost"}
            cursor={"pointer"}
            color={"black"}
            className="hover:bg-slate-300"
          >
            <Link to={"/exchanges"}  className="text-[17px]">Exchange Crypto</Link>
          </Button>
          <Button
            variant={"ghost"}
            cursor={"pointer"}
            color={"black"}
            className="hover:bg-slate-300"
          >
            <Link to={"/coins"}  className="text-[17px]">Trading Crypto</Link>
          </Button>
          <Button
            variant={"ghost"}
            cursor={"pointer"}
            color={"black"}
            className="hover:bg-slate-300"
          >
            <Link to={"/login"}  className="text-[17px]">Login</Link>
          </Button>
          <Button
            variant={"ghost"}
            cursor={"pointer"}
            color={"black"}
            className="hover:bg-slate-300"
          >
            <Link to={"/sign"}  className="text-[17px]">Sign Up</Link>
          </Button>
        </div>
      </HStack>
    </>
  );
}

export default Header;
