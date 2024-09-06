import { Box, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import "../index.css";
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
      <Text fontSize={"35px"} fontWeight={800}>
        History
      </Text>
      <TableContainer
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        py={26}
      >
        <Table w={"96%"}>
          <Thead>
            <Tr h={"70px"}>
              <Th
                border={"2px solid white"}
                borderTopLeftRadius={"25px"}
                textAlign={"center"}
              >
                Time
              </Th>
              <Th border={"2px solid white"} textAlign={"center"}>
                Selected Number
              </Th>
              <Th border={"2px solid white"} textAlign={"center"} isNumeric>
                Lottery ID
              </Th>
              <Th
                border={"2px solid white"}
                borderTopLeftRadius={"25px"}
                textAlign={"center"}
              >
                User ID
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr h={"70px"}>
              <Td border={"2px solid white"} textAlign={"center"}>
                inches
              </Td>
              <Td border={"2px solid white"} textAlign={"center"}>
                millimetres (mm)
              </Td>
              <Td border={"2px solid white"} textAlign={"center"} isNumeric>
                25.4
              </Td>
              <Td border={"2px solid white"} textAlign={"center"} isNumeric>
                25.4
              </Td>
            </Tr>
            <Tr h={"70px"}>
              <Td border={"2px solid white"} textAlign={"center"}>
                feet
              </Td>
              <Td border={"2px solid white"} textAlign={"center"}>
                centimetres (cm)
              </Td>
              <Td border={"2px solid white"} textAlign={"center"} isNumeric>
                30.48
              </Td>
              <Td border={"2px solid white"} textAlign={"center"} isNumeric>
                30.48
              </Td>
            </Tr>
            <Tr h={"70px"}>
              <Td border={"2px solid white"} textAlign={"center"}>
                yards
              </Td>
              <Td border={"2px solid white"} textAlign={"center"}>
                metres (m)
              </Td>
              <Td border={"2px solid white"} textAlign={"center"} isNumeric>
                0.91444
              </Td>
              <Td border={"2px solid white"} textAlign={"center"} isNumeric>
                0.91444
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <NavigationBar />
    </Box>
  );
}
