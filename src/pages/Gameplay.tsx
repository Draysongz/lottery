import { Box, Flex, Text, Image, Button, Icon, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  // DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import "../index.css";
import { FaSackDollar } from "react-icons/fa6";
// import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
const gameplayArray = [
  {
    location: "New Mexico",
    prize: "25k",
    userIcon: "/svgIcons/people.svg",
    playersNumber:"9845",
    ticketIcon: "/svgIcons/ticket.svg",
    ticketRequired: "10",
    chips: "/svgIcons/chip.svg",
    bidAmount: "25,000",
    cta: "Join the game"
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

  const {onClose, onOpen, isOpen} = useDisclosure()
  return (
    <Box
      display={"flex"}
      width={"100vw"}
      height={'100vh'}
      flexDirection={"column"}
      color={"white"}
      justifyContent={"space-around"}
      gap={14}
      overflow={'scroll'}
      alignItems={"center"}
      paddingTop={"15%"}
      paddingBottom={"18%"}
    >
      <Flex flexDirection={'column'} gap={6}>
        <Flex flexDirection={'column'} alignItems={'center'} gap={4}>
          <Image w={24} boxShadow="0px 0px 4px 6px rgba(223, 223,223, 0.6)" borderRadius={'50px'} src="/svgIcons/user.svg"/>
          <Text fontSize={'24px'} fontStyle={'italic'} fontWeight={600}>
            Habibi
          </Text>
        </Flex>
        <Flex alignItems={'center'} gap={4}>
          <Icon as={FaSackDollar} fontSize={'40px'}/>
          <Text fontSize={'40px'} fontStyle={'italic'} fontWeight={800}>
            250,000
          </Text>
        </Flex>
      </Flex>
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={16}
        alignItems={"center"}
      >
        {gameplayArray.map((gameplay, index) => {
          return (
            <Flex
            key={index}
              width={"80%"}
              height={"270px"}
              borderRadius={"50px"}
              bgColor={""}
              flexDirection={"column"}
              alignItems={"center"}
              gap={1}
              boxShadow="0px 0px 4px 6px rgba(223, 223,223, 0.6)"
            //   justifyContent={"space-between"}
            >
              <Box
                bgColor={"black"}
                width={"80%"}
                height={"60px"}
                borderRadius={"50px"}
                mt={-6}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                zIndex={0}
                boxShadow="0px 0px 4px 6px rgba(223, 223,223, 0.6)"
              >
                <Text fontSize={"22px"} fontWeight={"600"} color={"white"}>
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
              >
                <Box
                  width={"90%"}
                  height={"120%"}
                  bgColor={""}
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
                    border={"2px solid limegreen"}
                  >
                    <Box
                      bgColor={"transparent"}
                      width={"95%"}
                      height={"95%"}
                      borderRadius={"50%"}
                      border={"1px solid white"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Text
                        fontSize={"45px"}
                        mt={28}
                        color={"white"}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        sx={{
                            WebkitTextStroke: '2px limegreen', // Custom stroke
                            textStroke: '2px limegreen',
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
              <Flex bg={""} w={"85%"} borderRadius={'15px'} height={'70px'} mt={-16} mb={3} alignItems={'center'} boxShadow="0px 0px 4px 6px rgba(223, 223,223, 0.6)">
                <Flex
                borderRight={'1px solid white'}
                width={'33.33333333333333%'}
                justifyContent={'center'}
                height={'70%'}
                alignItems={'center'}
                flexDirection={'column'}

                >
                  <Image width={8} src={gameplay.userIcon} />
                  <Text color={"white"} fontWeight={600}>
                    {gameplay.playersNumber}
                  </Text>
                </Flex>
                <Flex
                borderRight={'1px solid white'}
                width={'33.33333333333333%'}
                justifyContent={'center'}
                height={'70%'}
                alignItems={'center'}
                flexDirection={'column'}

                >
                  <Image width={8} src={gameplay.ticketIcon} />
                  <Text color={"white"} fontWeight={600} display={'flex'} alignItems={'center'} gap={1}>
                    {gameplay.ticketRequired}
                    <Text fontWeight={100} fontSize={'10px'}>XFI</Text>
                  </Text>
                </Flex>
                <Flex
                width={'33.33333333333333%'}
                justifyContent={'center'}
                height={'70%'}
                alignItems={'center'}
                flexDirection={'column'}

                >
                  <Image width={8} src={gameplay.chips} />
                  <Text color={"white"} fontWeight={600}>
                    {gameplay.bidAmount}
                  </Text>
                </Flex>
              </Flex>
              <Button onClick={onOpen}
              bg={'linear-gradient(180deg, limegreen 0%, grey 100%)'}
              color={'white'}
              width={'60%'}
              height={'40px'}
              borderRadius={'50px'}
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
              >
                {gameplay.cta}
              </Button>
            </Flex>
          );
        })}
      </Box>
      <NavigationBar />
      <Drawer 
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}


       
      >
        <DrawerOverlay />
        <DrawerContent
          
            // bgImage= {`url(${bg})`}
            // bgSize= 'cover'
            // bgPosition= 'center'
            // bgBlendMode="overlay"
            // borderTopRadius="25px"
            bg={'white'}
            zIndex={4}
        >

          <DrawerCloseButton color="white" />

          <DrawerBody>
            {/* <Input placeholder='Type here...' /> */}
            <Box className=' flex flex-col items-center justify-center py-3 text-white gap-3'>
            {/* <img src={coin} alt="" className='w-[100px]'/> */}
            <Flex className='flex-col text-center gap-3 w-[100%]'>
            <Text className=' text-[1.5em] font-semibold'>
                AirDrop points
            </Text>
            <Flex className='gap-2 items-center justify-center'>
                {/* <Icon as={SlBadge} boxSize={10} color={'green   '}/> */}
                <Text className='text-[25px]'>TBA</Text>
            </Flex>
            <Text >All the activities that users do playing SET convert into AirDrop points. Every single thing is important: the way you play, your social activity, generated energies and sources. All your points will be taken into account, and the AirDrop will be distributed accordingly to each player</Text>
            </Flex>
            </Box>

          </DrawerBody>

          <DrawerFooter>
          <Button className='w-[100%] text-black font-bold' onClick={onClose} height="70px" fontSize="25px">
                Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
