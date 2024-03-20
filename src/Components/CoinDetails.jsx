import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../index";
import Chart from "./Chart";
import Error from "./Error";
import Loader from "./Loader";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const CoinDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);

        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  if (error) return <Error message={"Error While Fetching Coin"} />;

  return (
    <>
      <button className="z-10 bg-green-900 bg-[30px] rounded-[50%] fixed top-[240px] left-[100px] border-8">
        <Link to={"/coins"}>
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
      <div className="bg-[#899878]">
        <Container maxW={"container.xl"} bgColor={"#899878"}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="h-[20vh] flex justify-center items-center gap-8">
                <img src={coin.image.large} alt="" className="h-[10vh]" />
                <span className="text-[40px] font-bold text-green-800 ">
                  {coin.name}
                </span>
              </div>
              <div>
                <p className="text-slate-200 text-[17px]">
                  {coin.description.bg}
                </p>
              </div>
              <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                <HStack spacing={"4"}>
                  <Radio value={"inr"}>INR</Radio>
                  <Radio value={"usd"}>USD</Radio>
                  <Radio value={"eur"}>EUR</Radio>
                </HStack>
              </RadioGroup>

              <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
                <Text
                  fontSize={"medium"}
                  alignSelf="center"
                  color={"white"}
                  opacity={0.7}
                >
                  Last Updated On{" "}
                  {Date(coin.market_data.last_updated).split("G")[0]}
                </Text>

                <Image
                  src={coin.image.large}
                  w={"16"}
                  h={"16"}
                  objectFit={"contain"}
                />

                <Stat>
                  <StatLabel>{coin.name}</StatLabel>
                  <StatNumber>
                    {currencySymbol}
                    {coin.market_data.current_price[currency]}
                  </StatNumber>
                  <StatHelpText>
                    <StatArrow
                      type={
                        coin.market_data.price_change_percentage_24h > 0
                          ? "increase"
                          : "decrease"
                      }
                    />
                    {coin.market_data.price_change_percentage_24h}%
                  </StatHelpText>
                </Stat>

                <Badge
                  fontSize={"2xl"}
                  bgColor={"blackAlpha.800"}
                  color={"white"}
                >{`#${coin.market_cap_rank}`}</Badge>

                <CustomBar
                  high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
                  low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
                />

                <Box w={"full"} p="4">
                  <Item
                    title={"Max Supply"}
                    value={coin.market_data.max_supply}
                  />
                  <Item
                    title={"Circulating Supply"}
                    value={coin.market_data.circulating_supply}
                  />
                  <Item
                    title={"Market Cap"}
                    value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
                  />
                  <Item
                    title={"All Time Low"}
                    value={`${currencySymbol}${coin.market_data.atl[currency]}`}
                  />
                  <Item
                    title={"All Time High"}
                    value={`${currencySymbol}${coin.market_data.ath[currency]}`}
                  />
                </Box>
                <Box width={"full"} borderWidth={1}>
                  <Chart
                    arr={chartArray}
                    currency={currencySymbol}
                    days={days}
                  />
                </Box>
                <HStack p="4" overflowX={"auto"}>
                  {btns.map((i) => (
                    <Button
                      disabled={days === i}
                      key={i}
                      onClick={() => switchChartStats(i)}
                      borderRadius={"full"}
                      color={"dark"}
                      boxShadow={"4px 4px 5px #454d3d "}
                      transition={"all 0.3s"}
                      css={{
                        "&:hover": {
                          transform: "scale(1.3)",
                        },
                      }}
                    >
                      {i}
                    </Button>
                  ))}
                </HStack>
              </VStack>
            </>
          )}
        </Container>
      </div>
      <div
        className="flex flex-col justify-center items-center
      "
      >
        <span className="text-[26px] font-semibold text-slate-800 ">
          Disclaimer:
        </span>
        <span className="text-[17px] text-black mt-5">
          All information and data relating to the holdings in the third-party
          wallet addresses are based on public third party information. Xcrypto
          does not confirm or verify the accuracy or timeliness of such
          information and data.
        </span>
        <span className="text-[17px] text-black ml-7 mt-4">
          Xcrypto shall have no responsibility or liability for this public
          third party information and data. Xcrypto shall have no duty to
          review, confirm, verify or otherwise perform any inquiry or
          investigation as to the completeness, accuracy, sufficiency,
          integrity, reliability or timeliness of any such information or data
          provided.
        </span>
      </div>
      <Footer></Footer>
    </>
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
);

export default CoinDetails;
