import { Flex, Image, Text, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      width={"90%"}
      height={"60px"}
      bg={"#eacda9"}
      borderRadius={"50px"}
      alignItems={"center"}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
      justifyContent={"space-around"}
    >
      <Box
        width={"45px"}
        bgColor={"#eacda"}
        height={"45px"}
        display={"flex"}
        justifyContent={"center"}
        borderRadius={"50%"}
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
      >
        <Image w={8} src="/svgIcons/help.svg" />
      </Box>
      <Text
        w={"50%"}
        textAlign={"center"}
        fontStyle={"italic"}
        fontSize={"26px"}
        fontWeight={800}
        display={"flex"}
        flexDirection={"column"}
        mt={1}
        sx={{
          WebkitTextStroke: "1px white", // Custom stroke
          textStroke: "1px white",
        }}
        bgGradient="linear(to-b, #f9bb27 , #eb2928)"
        bgClip="text" 
      >
        BINGO
        <Text fontSize={"45px"} mt={-6}>
          RINGO
        </Text>
      </Text>
      <Box
        width={"45px"}
        display={"flex"}
        justifyContent={"center"}
        bgColor={"#eacda"}
        height={"45px"}
        borderRadius={"50%"}
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
      >
        <Image w={8} src="/svgIcons/menu.svg" />
      </Box>
    </Flex>
  );
}
