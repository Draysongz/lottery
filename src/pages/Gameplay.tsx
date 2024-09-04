import { Box, Flex, Text, Image, Card, CardBody, Button } from "@chakra-ui/react";
import "../index.css";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
const gameplayArray = [
  {
    location: "New Mexico",
    prize: "8",
    userIcon: "/svgIcons/people.svg",
    playersNumber:"0",
    ticketIcon: "/svgIcons/ticket.svg",
    ticketRequired: "8",
    chips: "/svgIcons/chip.svg",
    bidAmount: "25,000",
    cta: "Join the game",
    requiredPlayers: 10
  },
  {
    location: "Nevada",
    prize: "16",
    userIcon: "/svgIcons/people.svg",
    playersNumber:0,
    ticketIcon: "/svgIcons/ticket.svg",
    ticketRequired: "1",
    chips: "/svgIcons/chip.svg",
    bidAmount: "25,000",
    cta: "Join the game",
    requiredPlayers: 20
  },
  {
    location: "Nevada",
    prize: "10k",
    userIcon: "/svgIcons/people.svg",
    playersNumber:"1246",
    ticketIcon: "/svgIcons/ticket.svg",
    ticketRequired: "10",
    chips: "/svgIcons/chip.svg",
    bidAmount: "25,000",
    cta: "Join the game"
  },
];

export default function Gameplay() {
  return (
    <Box
      display={"flex"}
      bgColor={"#cb9775"}
      width={"100vw"}
      minH={'100vh'}
      flexDirection={"column"}
      color={"white"}
    //   justifyContent={"space-around"}
      gap={14}
      alignItems={"center"}
      paddingY={'20px'}
    >
    <Header />
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={10}
        alignItems={"center"}
      >
        {gameplayArray.map((gameplay) => {
          return (
            <Card bgColor={"#e6c197"} w={"90%"} boxShadow={"0px 5px 8px rgba(0, 0,0, 0.6)"}  borderRadius={"40px"} >
              <CardBody scale={10}>  
            <Flex
              width={"100%"}
              height={"270px"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={2}
            >
              <Box
                bgColor={"#eacda9"}
                width={"80%"}
                height={"60px"}
                borderRadius={"50px"}
                mt={-6}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                zIndex={1}
                boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
              >
                <Text fontSize={"22px"} fontWeight={"600"} color={"#55200B"}>
                  {gameplay.location}
                </Text>
              </Box>
              <Box
                overflowY={"hidden"}
                width={"80%"}
                height={"200px"}
                display={"flex"}
                mt={"-12"}
                justifyContent={"center"}
                zIndex={0}
              >
                <Box
                  width={"90%"}
                  height={"120%"}
                  bgColor={"#f0b485"}
                  borderRadius={"50%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={-28}
                  border={"1px solid black"}
                >
                  <Box
                    bgColor={"transparent"}
                    width={"95%"}
                    height={"95%"}
                    borderRadius={"50%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"2px solid #fa824d"}
                  >
                    <Box
                      bgColor={"transparent"}
                      width={"95%"}
                      height={"95%"}
                      borderRadius={"50%"}
                      border={"1px solid #eacda9"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Text
                        fontSize={"50px"}
                        mt={28}
                        color={"white"}
                        fontWeight={"800"}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        sx={{
                            WebkitTextStroke: '2px #EB2928', // Custom stroke
                            textStroke: '2px #EB2928',
                          }}
                      >
                        {gameplay.prize}
                        <Text fontSize={"20px"} lineHeight={"0"}>
                          XFI
                        </Text>
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Flex bg={"#eecda8"} w={"85%"} borderRadius={'15px'} height={'70px'} mt={-16} alignItems={'center'} border={'1px solid rgba(82,32,11, 0.3)'} justifyContent={'space-between'}>
                <Flex
                borderRight={'1px solid #52200B'}
                width={'30%'}
                justifyContent={'center'}
                height={'70%'}
                alignItems={'center'}
                flexDirection={'column'}
                >
                  <Image width={8} src={gameplay.userIcon} />
                  <Text color={"#52200B"} fontWeight={600}>
                    {gameplay.playersNumber}
                  </Text>
                </Flex>
                <Flex
                borderRight={'1px solid #52200B'}
                width={'40%'}
                justifyContent={'center'}
                height={'70%'}
                alignItems={'center'}
                flexDirection={'column'} 
                >
                  <Image width={8} src={gameplay.ticketIcon} />
                  <Text color={"#52200B"} fontWeight={600} display={'flex'} alignItems={'center'} gap={1}>
                    {gameplay.ticketRequired}
                    <Text fontWeight={100} fontSize={'10px'}>USDT</Text>
                  </Text>
                </Flex>
                <Flex
                
                width={'30%'}
                justifyContent={'center'}
                height={'70%'}
                alignItems={'center'}
                flexDirection={'column'}

                >
                  <Image width={8} src={gameplay.chips} />
                  <Text color={"#52200B"} fontWeight={600}>
                    {gameplay.bidAmount}
                  </Text>
                </Flex>
              </Flex>
              <Button
              bg={'linear-gradient(180deg, #F9BB2F 0%, #EB2928 100%)'}
              color={'white'}
              width={'60%'}
              height={'40px'}
              borderRadius={'50px'}
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
              >
                {gameplay.cta}
              </Button>
            </Flex>
              </CardBody>
            </Card>
          );
        })}
      </Box>
      <Box
        className="fixed bottom-0 left-0 w-full h-16 pointer-events-none"
        style={{
          background: 'transparent',
          backdropFilter: 'blur(10px)',
          zIndex: 1,
        }}
      ></Box>
      <NavigationBar />
    </Box>
  );
}
