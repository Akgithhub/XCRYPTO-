import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import CoinCard from "./CoinCard";
import Footer from "./Footer";

const Coins = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [pages, setpages] = useState(1);
  const [currency, setcurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changepage = (pages) => {
    setpages(pages);
    setloading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchcoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${pages}`
        );
        setcoins(data);
        // console.log(data);
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    };

    fetchcoins();
  }, [currency, pages]);

  if (error) return <Error message={"Error While Fetching Coins"} />;

  return (
    <>
      <div className="bg-[#c2ceb5]">
        <Container maxW={"container.xl"} bgColor={"#c2ceb5"}>
          {loading ? (
            <Loader></Loader>
          ) : (
            <>
              <div className="bg-[#c2ceb5] text-[23px] font-medium text-slate-700 flex flex-col items-center justify-center t h-[26vh] ">
                <span className="mb-4 ml-[20px]">
                  Stay on top of crypto. All the time, any time.
                </span>
                <span className="text-[16px] text-slate-100 ml-[20px]">
                  CoinMarketCap ranks and scores exchanges based on traffic,
                  liquidity, trading volumes, and confidence in the legitimacy
                  of trading volumes reported.
                </span>
                <span className="text-[16px] text-slate-100 ml-[20px]">
                  We now track 240 spot exchanges with a total 24h volume
                </span>
                <span className="text-[16px] text-slate-100 ml-[20px]">
                  Click on the tabs to get to the coin section.
                </span>
              </div>
              <RadioGroup value={currency} onChange={setcurrency} p={"8"}>
                <HStack spacing={"4"}>
                  <Radio value={"inr"}>INR</Radio>
                  <Radio value={"usd"}>USD</Radio>
                  <Radio value={"eur"}>EUR</Radio>
                </HStack>
              </RadioGroup>

              <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                {coins.map((i) => (
                  // <div>{i.name}</div>
                  <CoinCard
                    id={i.id}
                    name={i.name}
                    price={i.current_price}
                    img={i.image}
                    symbol={i.symbol}
                    currencySymbol={currencySymbol}
                    bgColor={"white"}
                  />
                ))}
              </HStack>
              <div className="bg-[#c2ceb5] ">
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
            </>
          )}
        </Container>
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

export default Coins;
