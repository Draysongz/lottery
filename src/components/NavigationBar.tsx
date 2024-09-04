import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function NavigationBar() {
  return (

    <Flex className=" fixed bottom-0 left-5 right-5 bg-[#eecda8] px-4 py-4 rounded-2xl w-[90%] flex shadow-custom justify-around" zIndex={10} 
    >
      <Link to={"/"}>
      <Box as="nav" bg={"#eecda8"} width={"60px"} height={"60px"} borderRadius={"60%"} display={'flex'}
      justifyContent={'center'} border={'1px solid white'}
      _selected={{
        bg: "#e6c197",
        border: "1px solid #eb2928"
      }}
      _active={{
        bg: "#e6c197",
        border: "1px solid #eb2928"
      }}
      >
        <Image width={10} src="/svgIcons/machine.svg" />

      </Box>
      </Link>
      <Box as="nav" bg={"#eecda8"} width={"60px"} height={"60px"} borderRadius={"60%"} display={'flex'}
      justifyContent={'center'} border={'1px solid white'}
      _selected={{
        bg: "#e6c197",
        border: "1px solid #eb2928"
      }}
      _active={{
        bg: "#e6c197",
        border: "1px solid #eb2928"
      }}
      >
        <Image width={10} src="/svgIcons/gamepad.svg" />

      </Box>
      <Link to={"/leaderboard"}>
      <Box as="nav" bg={"#eecda8"} width={"60px"} height={"60px"} borderRadius={"60%"} display={'flex'}
      justifyContent={'center'} border={'1px solid white'}
      _selected={{
        bg: "#e6c197",
        border: "1px solid #eb2928"
      }}
      _active={{
        bg: "#e6c197",
        border: "1px solid #eb2928"
      }}
      >
        <Image width={10} src="/svgIcons/trophy.svg" />

      </Box>
      
      </Link>
      <Link to={"/friends"}>
      <Box as="nav" bg={"#eecda8"} width={"60px"} height={"60px"} borderRadius={"60%"} display={'flex'}
      justifyContent={'center'} border={'1px solid white'}_selected={{
        bg: "#e6c197",
        border: "1px solid #eb2928"
      }}
      _active={{
        bg: "#e6c197",
        border: "1px solid #eb2928"
      }}
    >
        <Image width={10} src="/svgIcons/people.svg" />

      </Box>
      </Link>
    </Flex>
  );
}
