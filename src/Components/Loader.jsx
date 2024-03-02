import React from "react";
import { Box, Container, Spinner, Text, VStack } from "@chakra-ui/react";

function Loader() {
  return (
    <>
      <VStack h={"90vh"} justifyContent={"center"}>
        <Box transform={"scale(3)"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
        <Text size={"xl"} marginTop={"10"}>
          Fetching Data ...
        </Text>
      </VStack>
    </>
  );
}

export default Loader;
