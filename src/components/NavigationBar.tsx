import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

export default function NavigationBar() {
  return (
    <Flex className=" fixed bottom-10 left-5 right-5 bg-[rgb(255,255,255)] px-4 py-4 rounded-2xl w-11/12 flex shadow-custom justify-around" zIndex={10} >
      <Box
        bg={"#eecda8"}
        width={"60px"}
        height={"60px"}
        borderRadius={"60%"}
        display={"flex"}
        position={"relative"}
        justifyContent={'center'}
      >
        <Image mt={-3} width={8} src="/svgIcons/gamepad.svg" />
        <Image width={5} position={"absolute"} left={8} top={9} src="/svgIcons/list.svg" />
      </Box>
      <Box
        bg={"#eecda8"}
        width={"60px"}
        height={"60px"}
        borderRadius={"60%"}
        display={"flex"}
        justifyContent={'center'}
        position={"relative"}
      >
        <Image mt={-3} width={8} src="/svgIcons/gamepad.svg" />
        <Image width={5} position={"absolute"} left={8} top={9} src="/svgIcons/user.svg" />
      </Box>
      <Box bg={"#eecda8"} width={"60px"} height={"60px"} borderRadius={"60%"} display={'flex'}
      justifyContent={'center'}>
        <Image width={10} src="/svgIcons/gamepad.svg" />
      </Box>
      <Box bg={"#eecda8"} width={"60px"} height={"60px"} borderRadius={"60%"} display={'flex'}
      justifyContent={'center'}>
        <Image width={10} src="/svgIcons/gamepad.svg" />
      </Box>
    </Flex>
  );
}
