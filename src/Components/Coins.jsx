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
      <Container maxW={"container.xl"} marginTop={"20"}>
        {loading ? (
          <Loader></Loader>
        ) : (
          <>
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
                />
              ))}
            </HStack>
            <HStack w={"full"} overflowX={"auto"} p={"8"}>
              {btns.map((item, index) => (
                <Button
                  key={index}
                  bg={"blackAlpha.900"}
                  color={"white"}
                  onClick={() => changepage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
            </HStack>
          </>
        )}
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Coins;
