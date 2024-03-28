import { Button, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState , useEffect} from "react";

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navbarEnabled, setNavbarEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Disable navbar if window width is less than or equal to 740 pixels
    if (windowWidth <= 740) {
      setNavbarEnabled(false);
    } else {
      setNavbarEnabled(true);
    }
  }, [windowWidth]);

  const toggleNavbar = () => {
    setNavbarEnabled(!navbarEnabled);
  };
  return (
    <>
   {navbarEnabled ? (
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
      opacity={'0.9'}
      position={'sticky'}
      // height={'90px'}
      // marginBottom={'5'}
      className="navbar"
    >
      <Heading>
        {" "}
        <h1 className="text-slate-800">Xcrypto</h1>
      </Heading>
      <div>
        {" "}
        <Button variant={"ghost"} cursor={"pointer"} color={"black"}>
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
          <Link to={"/exchanges"} className="text-[17px]">
            Trade Crypto
          </Link>
        </Button>
        <Button
          variant={"ghost"}
          cursor={"pointer"}
          color={"black"}
          className="hover:bg-slate-300"
        >
          <Link to={"/coins"} className="text-[17px]">
            Crypto Rate
          </Link>
        </Button>
        <Button
          variant={"ghost"}
          cursor={"pointer"}
          color={"black"}
          className="hover:bg-slate-300"
        >
          <Link to={"/about"} className="text-[17px]">
            About us
          </Link>
        </Button>
      </div>
    </HStack>
      ) : (
        <button className="fixed text-black top-6 size-4 left-5" onClick={toggleNavbar}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg></button>
      )}
    </>
  );
}

export default Header;
