import { Box, Flex, Text, Image, Icon} from "@chakra-ui/react";
import "../index.css";
import { FaChevronRight, FaRegCheckCircle } from "react-icons/fa";
import { FaCheckCircle, FaCircle } from 'react-icons/fa';
import "@fontsource/inter";
import NavigationBar from "../components/NavigationBar";
import { User } from "../helper-functions/getUser";

export default function Wallet({userData}: {userData: User}) {
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
      bgColor={'black'}
    >
      <Text fontSize={"25px"} fontWeight={"700"} textAlign={"left"} w={"90%"}>
        Wallet
      </Text>
      <Flex flexDirection={"column"} alignItems={"center"} gap={2} w={"90%"}>
        <Image src="/svgIcons/flying-money.png" w={32} />
        <Box className="h-20 w-full relative text-center flex flex-col items-center justify-center">
          <Box className="glitter-background absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <Box key={i} className="glitter"></Box>
            ))}
            <Box
              fontSize={"25px"}
              fontWeight={"700"}
              className="h-20 flex flex-col justify-center items-center gap-1"
            >
              <Text
              display={'flex'}
              alignItems={'center'}>
                UQcxwQi3f
                <Icon as={FaChevronRight} fontSize={"15px"} />
              </Text>
              <Text
                fontSize={"18px"}
                fontWeight={"100"}
                color={'limegreen'}
                alignItems={'center'}
                display={'flex'}
                // className="h-20 flex justify-center items-center gap-2 text-green-700"
              >
                <Icon as={FaRegCheckCircle} fontSize={"14px"} />
                Active
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Flex direction="column" align="flex-start" color="white" bg="black" p={6} w={'90%'}>
      {/* Step 1 */}
      <Flex align="center" mb={0}>
        <Icon as={FaCheckCircle} color="white" boxSize={6} />
        <Box ml={4}>
          <Text fontSize="lg" fontWeight="bold">
            TON Connect
          </Text>
        </Box>
      </Flex>

      {/* Line between steps */}
      <Box borderLeft="3px solid grey" height="55px" ml={'10px'} />

      {/* Step 2 */}
      <Flex align="center" mb={0}>
        <Icon as={FaCircle} color="grey" boxSize={6} />
        <Box ml={4}>
          <Text fontSize="lg" fontWeight="normal" color="grey">
            Blum Wallet
          </Text>
        </Box>
      </Flex>

      {/* Line between steps */}
      <Box borderLeft="3px solid grey" height="55px" ml={'10px'} />

      {/* Step 3 */}
      <Flex align="center">
        <Icon as={FaCircle} color="grey" boxSize={6} />
        <Box ml={4}>
          <Text fontSize="lg" fontWeight="normal" color="grey">
            Wallet Connect
          </Text>
        </Box>
      </Flex>
    </Flex>


      <NavigationBar userData={userData}  />
    </Box>
  );
}
