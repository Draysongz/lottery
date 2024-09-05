import { Box, Flex, Text, Image } from "@chakra-ui/react";
import "../index.css";
import Header from "../components/Header";
import DailyUsers from "../components/DailyUsers";
import NavigationBar from "../components/NavigationBar";
export default function History() {
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
    <Text
    fontSize={'35px'}
    fontWeight={800}>
      History
    </Text>
    </Box>
  );
}
