import { Box, Flex, Text, Image, Icon, Button } from "@chakra-ui/react";
import "../index.css";
import { FaSackDollar } from "react-icons/fa6";
// import Header from "../components/Header";
import '@fontsource/inter'
import NavigationBar from "../components/NavigationBar";
import { User } from "../helper-functions/getUser";

const activeList = [
  {
    name: "SpinningStar",
    avatar: "/svgIcons/user.svg",
    points: "56,000",
    referred: "0",
    icon: "/svgIcons/peeps.svg",
  },
  {
    name: "ChocolatE",
    avatar: "/svgIcons/user.svg",
    points: "3,400",
    referred: "0",
    icon: "/svgIcons/peeps.svg",
  },
];


export default function Friends({userData}: {userData: User | undefined}) {
  return (
    <Box
      display={"flex"}
      width={"100vw"}
      minH={"100vh"}
      flexDirection={"column"}
      color={"white"}
      gap={6}
      alignItems={"center"}
      paddingY={"20px"}
    >
      <Flex flexDirection={"column"} alignItems={"center"} gap={2}>
        <Image src="/svgIcons/friends.png" />
        <Text fontSize={"25px"} fontWeight={"700"}>
          Invite Friends
        </Text>
      </Flex>
      <Text fontSize={"20px"} color={"gray"} display={"flex"}>
        {" "}
        Get a free <Image src="/svgIcons/ticket.svg" w={10} /> for each friend.
      </Text>
      <Box
        bgColor={""}
        width={"90%"}
        borderRadius={"35px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          color={""}
          height={"40px"}
          paddingY={"30px"}
          width={"90%"}
          mt={2}
          borderBottom={"1px solid white"}
        >
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Text fontWeight={800}>Friends</Text>
            <Flex
              bgColor={""}
              borderRadius={"50px"}
              width={"20px"}
              height={"20px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text fontWeight={"700"}>2</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex
          justify={"space-between"}
          flexDirection={"column"}
          align={"center"}
          width={"100%"}
          gap={3}
        >
          {activeList.map((active) => {
            return (
              <Flex
                height={"70px"}
                alignItems={"center"}
                borderRadius={"50px"}
                px={4}
                justifyContent={"space-between"}
                width={"100%"}
              >
                <Flex alignItems={"center"} gap={5}>
                  <Image
                    w={8}
                    borderRadius={"50px"}
                    boxShadow="0px 0px 4px 6px rgba(223, 223,223, 0.6)"
                    src={active.avatar}
                  />
                  <Flex flexDirection={"column"}>
                    <Text fontWeight={600}>{active.name}</Text>
                    <Flex gap={2} alignItems={"center"}>
                      <Image src={active.icon} w={4} />
                      <Text>{active.referred}</Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex alignItems={"center"} gap={2}>
                  <Icon as={FaSackDollar} fontSize={"15px"} />
                  <Text fontSize={"15px"} fontStyle={"italic"} fontWeight={100}>
                    {active.points}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Box>
      <Button
      w={'90%'}
      bgColor={'white'}
      h={'75px'}
      borderRadius={'10px'}
      color={'black'}
      fontSize={'22px'}
      fontWeight={'500'}
      position={'fixed'}
      bottom={20}>
        Invite a Friend
      </Button>
      <NavigationBar userData={userData} />
    </Box>
  );
}
