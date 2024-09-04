import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "../index.css";
import Header from "../components/Header";
import DailyUsers from "../components/DailyUsers";
export default function TopUsers() {
  return (
    <Box
      display={"flex"}
      bgColor={"#cb9775"}
      width={"100vw"}
      minH={"100vh"}
      flexDirection={"column"}
      color={"white"}
      //   justifyContent={"space-around"}
      gap={14}
      alignItems={"center"}
      paddingY={"20px"}
    >
      <Header />
      <Box
      bgColor={'#e6c197'}
      width={'90%'}
      borderRadius={'35px'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={3}
      >
        <Box color={'#55200B'} height={'40px'} paddingY={'20px'} width={'90%'} mt={2} borderBottom={'1px solid #80462f'} display={'flex'} alignItems={'center'} gap={2}>
          <Image w={8} src="/svgIcons/user.svg"/>
            <Text fontWeight={800}>
                Top users
            </Text>
        </Box>
        <Flex justify={"space-between"} align={"center"}>
          <Tabs variant={"soft-rounded"} display={"flex"} flexDirection={'column'} gap={4}>
            <TabList bgColor={'#deb17e'} borderRadius={'25px'} height={'50px'} boxShadow="0px 2px 0px 1px rgba(223,223,223, 0.6)" p={'5px'}>
              <Tab
                color={"#80462f"}
                fontSize={"16px"}
                width={"116px"}
                padding={"10px"}
                _selected={{
                  color: "white",
                  bgGradient: "linear(to-b, #f9bb27 , #eb2928)",
                //   borderBottom: "1px solid #FFD700",
                }}
              >
                Day
              </Tab>
              <Tab
                color={"#80462f"}
                fontSize={"16px"}
                width={"116px"}
                padding={"10px"}
                _selected={{
                  color: "white",
                  bgGradient: "linear(to-b, #f9bb27 , #eb2928)",
                }}
              >
                Months
              </Tab>
              <Tab
                color={"#80462f"}
                fontSize={"16px"}
                width={"116px"}
                padding={"10px"}
                _selected={{
                  color: "white",
                  bgGradient: "linear(to-b, #f9bb27 , #eb2928)",
                }}
              >
                All time
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={'0px'}>
                <DailyUsers />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </Box>
  );
}
