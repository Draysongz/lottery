import { Box, Flex, Text, Image } from "@chakra-ui/react";

const dailyUsersArray = [
  {
    rank: "1",
    name: "SpinngStar",
    points: "5650",
    avatar: "/svgIcons/user.svg",
  },
  {
    rank: "2",
    name: "ChocolatE",
    points: "3250",
    avatar: "/svgIcons/user.svg",
  },
  {
    rank: "3",
    name: "Disco potato",
    points: "2875",
    avatar: "/svgIcons/user.svg",
  },
  {
    rank: "4",
    name: "Disco thunder",
    points: "2500",
    avatar: "/svgIcons/user.svg",
  },
  {
    rank: "5",
    name: "Quattro",
    points: "2306",
    avatar: "/svgIcons/user.svg",
  },
  {
    rank: "6",
    name: "SpinningStarjnr",
    points: "2250",
    avatar: "/svgIcons/user.svg",
  },
  {
    rank: "7",
    name: "SpinningStarjnr",
    points: "2085",
    avatar: "/svgIcons/user.svg",
  },
];

export default function DailyUsers() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={2} pb={6}> 
      {dailyUsersArray.map((dailyUsers) => {
        return (
          <Flex height={'70px'} alignItems={'center'} color={"#52200B"} bgColor={'#eecda8'} borderRadius={'50px'} px={4} justifyContent={'space-between'}>
            <Flex alignItems={'center'} gap={5}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={'50px'} height={'50px'} borderRadius={'50px'} boxShadow={'0px 4px 6px rgba(0, 0, 0, 0.6)'} position={'relative'}>
                <Image w={8} src={dailyUsers.avatar}/>
              <Text position={'absolute'} top={-1} left={0} fontWeight={'600'} fontSize={'20px'}>{dailyUsers.rank}</Text>
            </Box>
            <Text fontWeight={600}>{dailyUsers.name}</Text>
            </Flex>
            <Text
              fontWeight={600}
              display={"flex"}
              alignItems={"center"}
              gap={1}
            >
              {dailyUsers.points}
              <Text fontWeight={100} fontSize={"14px"}>
                XFI
              </Text>
            </Text>
          </Flex>
        );
      })}
    </Box>
  );
}
