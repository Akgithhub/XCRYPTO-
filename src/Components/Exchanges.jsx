import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  Image,
  VStack,
  Heading,
  Text,
  Button,
  StatHelpText,
  StatArrow,
  Stat,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import Footer from "./Footer";
import bitcoin from "../Assets/bitcoin.png";
import binance from "../Assets/binance.png";
import crypto from "../Assets/crypto.png";
import fox from "../Assets/fox.png";
import green from "../Assets/green.svg";
import red from "../Assets/red.svg";

const Exchanges = () => {
  const [exchanges, setexchanges] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [pages, setpages] = useState(1);

  useEffect(() => {
    const fetchexchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);

        setexchanges(data);
        setloading(false);
        console.log(data);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    };

    fetchexchanges();
  }, [pages]);

  const changepage = (pages) => {
    setpages(pages);
    setloading(true);
  };
  const btns = new Array(132).fill(1);

  if (error) return <Error message={"Error While Fetching Exchanges"} />;

  return (
    <>
      <div className="h-[15vh] flex justify-center gap-[20vh] bg-[#E4E6C3]">
        <div className="flex flex-row text-[40px] font-bold gap-[10px] mt-[25px]  ">
          <img src={binance} alt="" className="h-[70px]" />
          <span className="mt-[13px]">Binance</span>
        </div>
        <div className="flex flex-row text-[40px] font-bold gap-[10px] mt-[25px]  ">
          <img src={bitcoin} alt="" className="h-[70px]" />
          <span className="mt-[13px]">Bitcoin</span>
        </div>
        <div className="flex flex-row text-[40px] font-bold gap-[10px] mt-[25px]  ">
          <img src={fox} alt="" className="h-[70px]" />
          <span className="mt-[13px]">Foxbit</span>
        </div>
        <div className="flex flex-row text-[40px] font-bold gap-[10px] mt-[25px]  ">
          <img src={crypto} alt="" className="h-[70px]" />
          <span className="mt-[13px]">Ethereum</span>
        </div>
      </div>
      <div className="bg-[#b6b88f] text-[23px] font-medium text-slate-700 flex flex-col items-center justify-center t h-[26vh] ">
        <span className="mb-4 ml-[20px]">
          Stay on top of crypto. All the time, any time.
        </span>
        <span className="text-[16px] text-slate-100 ml-[20px]">
        <strong>Xcrypto</strong> ranks and scores exchanges based on traffic, liquidity,
          trading volumes, and confidence in the legitimacy of trading volumes
          reported.
        </span>
        <span className="text-[16px] text-slate-100 ml-[20px]">
          We now track 240 spot exchanges with a total 24h volume
        </span>
        <span className="text-[16px] text-slate-100 ml-[20px]">
          Click on the tabs to get to the official website of coin
        </span>
      </div>

      <div className="w-full bg-[#899878]">
        <Container
          maxW={"container.xl"}
          justifyContent={"space-evenly"}
          className="bg-[#899878]"
        >
          {loading ? (
            <Loader></Loader>
          ) : (
            <>
              <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                {exchanges.map((i) => (
                  <ExchangeCard
                    key={i.id}
                    name={i.name}
                    img={i.image}
                    rank={i.trust_score_rank}
                    url={i.url}
                    level={i.trade_volume_24h_btc_normalized}
                  />
                ))}
              </HStack>
            </>
          )}
        </Container>
      </div>
      <div className="bg-[#899878] overflow-hidden">
        <HStack w={"full"} overflowX={"auto"} p={"8"}>
          {btns.map((item, index) => (
            <Button
              key={index}
              bg={"white"}
              color={"black"}
              onClick={() => changepage(index + 1)}
              borderRadius={"100%"}
              boxShadow={"4px 4px 5px #454d3d "}
              transition={"all 0.3s"}
              css={{
                "&:hover": {
                  transform: "scale(1.3)",
                },
              }}
            >
              {index + 1}
            </Button>
          ))}
        </HStack>
      </div>
      <div className="h-auto bg-[#454d3d] flex flex-col justify-center">
        <h1 className="text-[30px] font-semibold text-slate-900 m-3">
          Top Tokens by Market Capitalization
        </h1>
        <span className="text-[20px] font-normal text-white m-3">
          Get a comprehensive snapshot of all cryptocurrencies available on
          Xcrypto. This page displays the latest prices, 24-hour trading volume,
          price changes, and market capitalizations for all cryptocurrencies on
          Binance. Users can quickly access key information about these digital
          assets and access the trade page from here.
        </span>
        <span className="text-[20px] font-normal text-white m-3">
          The data presented is for informational purposes only. Some data is
          provided by CoinGecko and is shown on an “as is” basis, without
          representation or warranty of any kind. Please view our General Risk
          Warning for more information.
        </span>
      </div>

      <Footer></Footer>
    </>
  );
};

const ExchangeCard = ({ key, name, img, rank, url, level }) => {
  return (
    <a
      href={url}
      target={"blank"}
      key={key}
      borderRadius={"200%"}
      marginTop={"3px"}
    >
      <VStack
        className="bg-slate-100"
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"full"}
        transition={"all 0.3s"}
        m={"4"}
        color={'black'}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"Exchange"}
        />
        <Heading size={"md"} noOfLines={1}>
          {rank}
        </Heading>

        <Text noOfLines={1}>{name}</Text>
        <Stat>
          <StatHelpText>
            <StatArrow  type={Math.ceil(level) > 200 ? "increase" : "decrease"} />
            {level}%
          </StatHelpText>
        </Stat>
        <div>
          {
            level>200? <img src={green} alt="" />: <img src={red} alt="" />
          }
        </div>
      </VStack>
    </a>
  );
};

export default Exchanges;
