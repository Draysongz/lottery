import { Box, Flex, Text, Image } from "@chakra-ui/react";
import "../index.css";
import Header from "../components/Header";

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
      gap={3}
      >
        <Flex alignItems={'center'} justifyContent={'space-between'} color={'#55200B'} height={'40px'} paddingY={'20px'} width={'90%'} mt={2} borderBottom={'1px solid #80462f'}>
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
        <Flex>
            <Box bgColor={'green'} width={'8px'} height={'8px'} borderRadius={'50px'} boxShadow={"1px 0px 6px 3px rgba(0,128,0, 0.6)"} className=""></Box>
        </Flex>
        </Flex>
        <Flex justify={"space-between"} align={"center"}>
        </Flex>
      </Box>
    </Box>
  );
}
