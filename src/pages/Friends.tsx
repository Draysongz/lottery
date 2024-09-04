import { Box, Flex, Text, Image } from "@chakra-ui/react";
import "../index.css";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";

const activeList = [
    {
        name: "SpinningStar",
        status: "Online",
        icon: "/svgIcons/green.png",
        avatar: "/svgIcons/user.svg"
    },
    {
        name: "ChocolatE",
        status: "Online",
        icon: "/svgIcons/green.png",
        avatar: "/svgIcons/user.svg"
    },
];

const inactiveList = [
    {
        name: "Disco Potato",
        status: "2h ago",
        avatar: "/svgIcons/user.svg"  
    },
    {
        name: "Disco thunder",
        status: "16h ago",
        avatar: "/svgIcons/user.svg"  
    },
    {
        name: "Quattro",
        status: "1 day ago",
        avatar: "/svgIcons/user.svg"  
    },
]

export default function Friends() {
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
      gap={5}
      >
        <Flex alignItems={'center'} justifyContent={'space-between'} color={'#55200B'} height={'40px'} paddingY={'30px'} width={'90%'} mt={2} borderBottom={'1px solid #80462f'} bgColor={''}>
        <Box display={'flex'} alignItems={'center'} gap={2}>
          <Image w={8} src="/svgIcons/people.svg"/>
            <Text fontWeight={800}>
                Friends
            </Text>
            <Flex bgColor={'#ca9672'} borderRadius={'50px'}
            width={'20px'} height={'20px'} justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={'700'}>
                    8
                </Text>
            </Flex>
        </Box>
        <Flex gap={3} alignItems={'center'}>
            <Box bgColor={'green'} width={'8px'} height={'8px'} borderRadius={'50px'} boxShadow={"1px 0px 6px 3px rgba(0,128,0, 0.6)"} className=""></Box>
            <Text fontSize={'16px'}>
                Online
            </Text>
            <Text fontWeight={700}>
                4
            </Text>
        </Flex>
        </Flex>
        <Flex justify={"space-between"} flexDirection={'column'} align={"center"} width={'90%'} gap={3}>
            {activeList.map((active) => {
                return(
                    <Flex height={'70px'} alignItems={'center'} color={"#52200B"} bgColor={'#eecda8'} borderRadius={'50px'} px={4} justifyContent={'space-between'} width={'100%'}>
                    <Flex alignItems={'center'} gap={5}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={'50px'} height={'50px'} borderRadius={'50px'} boxShadow={'0px 4px 6px rgba(0, 0, 0, 0.6)'} position={'relative'}>
                        <Image w={8} src={active.avatar}/>
                      <Image position={'absolute'} top={-1} left={0} width={4} src={active.icon}/>
                    </Box>
                    <Text fontWeight={600}>{active.name}</Text>
                    </Flex>
                    <Text
                      fontWeight={600}
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                      color={'green'}
                    >
                      {active.status}
                    </Text>
                  </Flex>
                )
            })},
        </Flex>
        <Flex justify={"space-between"} flexDirection={'column'} align={"center"} width={'90%'} gap={3} mt={-10}>
            {inactiveList.map((inactive) => {
                return(
                    <Flex height={'70px'} alignItems={'center'} color={"#52200B"} bgColor={'#eecda8'} borderRadius={'50px'} px={4} justifyContent={'space-between'} width={'100%'}>
                    <Flex alignItems={'center'} gap={5}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={'50px'} height={'50px'} borderRadius={'50px'} boxShadow={'0px 4px 6px rgba(0, 0, 0, 0.6)'} position={'relative'}>
                        <Image w={8} src={inactive.avatar}/>
                    </Box>
                    <Text fontWeight={600}>{inactive.name}</Text>
                    </Flex>
                    <Text
                      fontWeight={600}
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                    >
                      {inactive.status}
                    </Text>
                  </Flex>
                )
            })},
        </Flex>
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
