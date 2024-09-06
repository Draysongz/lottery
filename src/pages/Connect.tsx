import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import "../index.css";
import "@fontsource/inter";
import NavigationBar from "../components/NavigationBar";

export default function Connect() {
  return (
    <Box
      display={"flex"}
      width={"100vw"}
      minH={"100vh"}
      flexDirection={"column"}
      color={"white"}
      gap={6}
      justifyContent={'space-around'}
      alignItems={"center"}
      paddingY={"20px"}
      bgColor={'black'}
    >
      <Flex flexDirection={"column"} alignItems={"center"} gap={2} w={"90%"}>
        <Image src="/svgIcons/muscle.png" w={32} />
        <Box
              fontSize={"25px"}
              fontWeight={"700"}
              className="flex flex-col justify-center items-center gap-5"
            >
              <Text>
                Levelling Up
              </Text>
              <Text
                fontSize={"18px"}
                fontWeight={"100"}
                width={'75%'}
                textAlign={'center'}
                opacity={'50%'}
              >
                Connect your wallet to access upcoming crypto features. Our team is working hard to bring them to you soon
              </Text>
            </Box>
      </Flex>

      <Button
      w={'90%'}
      bgColor={'white'}
      h={'75px'}
      borderRadius={'10px'}
      color={'black'}
      fontSize={'24px'}
      fontWeight={'800'}
    //   position={'fixed'}
    //   bottom={24}
      >
        Connect Wallet
      </Button>
      <NavigationBar />
    </Box>
  );
}
