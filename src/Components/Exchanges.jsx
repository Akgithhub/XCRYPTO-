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
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import Footer from "./Footer";

const Exchanges = () => {
  const [exchanges, setexchanges] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchexchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setexchanges(data);
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    };

    fetchexchanges();
  }, []);

  if (error) return <Error message={"Error While Fetching Exchanges"} />;

  return (
    <>
      <Container
        maxW={"container.xl"}
        marginTop={"60"}
        justifyContent={"space-evenly"}
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
                />
              ))}
            </HStack>
          </>
        )}
      </Container>
      <Footer></Footer>
    </>
  );
};

const ExchangeCard = ({ key, name, img, rank, url }) => {
  return (
    <a href={url} target={"blank"} key={key}>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
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
      </VStack>
    </a>
  );
};

export default Exchanges;
