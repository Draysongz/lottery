import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Icon,
  useDisclosure,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { FaSackDollar } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import NavigationBar from "../components/NavigationBar";

// Define the type for each gameplay item
interface GameplayItem {
  location: string;
  prize: string;
  userIcon: string;
  playersNumber: string;
  ticketIcon: string;
  ticketRequired: string;
  chips: string;
  bidAmount: string;
  cta: string;
}

const gameplayArray: GameplayItem[] = [
  {
    location: "New Mexico",
    prize: "25k",
    userIcon: "/svgIcons/people.svg",
    playersNumber: "9845",
    ticketIcon: "/svgIcons/ticket.svg",
    ticketRequired: "10",
    chips: "/svgIcons/chip.svg",
    bidAmount: "25,000",
    cta: "Join the game",
  },
  {
    location: "Nevada",
    prize: "10k",
    userIcon: "/svgIcons/people.svg",
    playersNumber: "1246",
    ticketIcon: "/svgIcons/ticket.svg",
    ticketRequired: "10",
    chips: "/svgIcons/chip.svg",
    bidAmount: "25,000",
    cta: "Join the game",
  },
  {
    location: "Nevada",
    prize: "10k",
    userIcon: "/svgIcons/people.svg",
    playersNumber: "1246",
    ticketIcon: "/svgIcons/ticket.svg",
    ticketRequired: "10",
    chips: "/svgIcons/chip.svg",
    bidAmount: "25,000",
    cta: "Join the game",
  },
];

const Gameplay: React.FC = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  // Add state to hold the selected prize
  const [selectedPrize, setSelectedPrize] = useState<string>("");
  const [displayNumbers, setDisplayNumbers] = useState<string[]>([]);
  const [disabledNumbers, setDisabledNumbers] = useState<Set<string>>(
    new Set()
  );

  // Function to handle clicking on a game
  const handleJoinGame = (prize: string) => {
    setSelectedPrize(prize); // Set the selected prize
    onOpen(); // Open the drawer
  };

  const handleNumberClick = (number: string) => {
    if (
      !disabledNumbers.has(number) &&
      !selectedNumbers.includes(parseInt(number))
    ) {
      console.log(selectedNumbers);

      // setDisplayNumbers([...displayNumbers, number]);
      setDisabledNumbers(new Set(disabledNumbers.add(number)));
      setSelectedNumbers((prev) => [...prev, parseInt(number)]);
      console.log(selectedNumbers);
    }
  };

  const handleClearNumber = (number: string) => {
    setDisplayNumbers(displayNumbers.filter((num) => num !== number));
    disabledNumbers.delete(number);
    setDisabledNumbers(new Set(disabledNumbers));
  };

  const dialpadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <Box
      display={"flex"}
      width={"100vw"}
      height={"100vh"}
      flexDirection={"column"}
      color={"white"}
      justifyContent={"space-around"}
      gap={14}
      overflow={"scroll"}
      alignItems={"center"}
      paddingTop={"9%"}
      paddingBottom={"15%"}
    >
      <Flex flexDirection={"column"} gap={6}>
        <Flex flexDirection={"column"} alignItems={"center"} gap={4}>
          <Image
            w={24}
            boxShadow="0px 0px 4px 6px rgba(223, 223, 223, 0.6)"
            borderRadius={"50px"}
            src="/svgIcons/user.svg"
          />
          <Text fontSize={"24px"} fontStyle={"italic"} fontWeight={600}>
            Habibi
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Icon as={FaSackDollar} fontSize={"40px"} />
          <Text fontSize={"40px"} fontStyle={"italic"} fontWeight={800}>
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
              boxShadow="0px 0px 4px 6px rgba(223, 223, 223, 0.6)"
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
                boxShadow="0px 0px 4px 6px rgba(223, 223, 223, 0.6)"
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
                          WebkitTextStroke: "2px limegreen", // Custom stroke
                          textStroke: "2px limegreen",
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
              <Flex
                bg={""}
                w={"85%"}
                borderRadius={"15px"}
                height={"70px"}
                mt={-16}
                mb={3}
                alignItems={"center"}
                boxShadow="0px 0px 4px 6px rgba(223, 223, 223, 0.6)"
              >
                <Flex
                  borderRight={"1px solid white"}
                  width={"33.33333333333333%"}
                  justifyContent={"center"}
                  height={"70%"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Image width={8} src={gameplay.userIcon} />
                  <Text color={"white"} fontWeight={600}>
                    {gameplay.playersNumber}
                  </Text>
                </Flex>
                <Flex
                  borderRight={"1px solid white"}
                  width={"33.33333333333333%"}
                  justifyContent={"center"}
                  height={"70%"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Image width={8} src={gameplay.ticketIcon} />
                  <Text
                    color={"white"}
                    fontWeight={600}
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                  >
                    {gameplay.ticketRequired}
                    <Text fontWeight={100} fontSize={"10px"}>
                      XFI
                    </Text>
                  </Text>
                </Flex>
                <Flex
                  width={"33.33333333333333%"}
                  justifyContent={"center"}
                  height={"70%"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Image width={8} src={gameplay.chips} />
                  <Text color={"white"} fontWeight={600}>
                    {gameplay.bidAmount}
                  </Text>
                </Flex>
              </Flex>
              <Button
                onClick={() => handleJoinGame(gameplay.prize)} // Pass the prize to the drawer
                bg={"linear-gradient(180deg, limegreen 0%, grey 100%)"}
                color={"white"}
                width={"60%"}
                height={"40px"}
                borderRadius={"50px"}
                boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
              >
                {gameplay.cta}
              </Button>
            </Flex>
          );
        })}
      </Box>

      <NavigationBar />

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          borderTopRadius="25px"
          bg={"black"}
          borderTop={"2px solid limegreen"}
        >
          <DrawerBody>
            <Box className=" flex flex-col items-center justify-center py-10 text-white gap-3">
              <Flex className="flex-col text-center gap-3 w-[100%] items-center">
                <Text className="text-[1.5em] font-semibold flex gap-2 items-center text-center">
                  Pool Prize:
                  <Text
                    fontWeight={100}
                    fontSize={"2em"}
                    sx={{
                      WebkitTextStroke: "2px limegreen", // Custom stroke
                      textStroke: "2px limegreen",
                    }}
                  >
                    {selectedPrize}
                  </Text>
                </Text>
                <Flex className="input flex-wrap justify-center gap-2 mt-4 w-['80%]">
                  {dialpadNumbers.map((number) => (
                    <Button
                      key={number}
                      onClick={() => handleNumberClick(number)}
                      isDisabled={disabledNumbers.has(number)}
                      className={`dialpad-button ${
                        disabledNumbers.has(number)
                          ? "pattern-button"
                          : "bg-[limegreen]"
                      } text-white`}
                      w={"80px"}
                      height={"80px"}
                      fontSize={"28px"}
                      border={"1px solid limegreen"}
                      borderRadius={"50px"}
                    >
                      {number}
                    </Button>
                  ))}
                </Flex>
              </Flex>
              <HStack
                color={"white"}
                w={"90%"}
                bg={"green"}
                rounded={"full"}
                p={10}
                // onClick={() => setModalIsOpen(true)}
                height="70px"
                justifyContent={"space-between"}
                display={selectedNumbers.length > 0 ? "flex" : "none"}
              >
                <Text fontSize="25px"> Buy slots </Text>
                {selectedNumbers.length > 0 &&
                  selectedNumbers.map((number, index) => {
                    console.log("mapping the array");
                    return (
                      <Text fontSize={"25px"} color={"white"}>
                        {" "}
                        {number},
                      </Text>
                    );
                  })}
                <Icon 
                as={FaCheck}
                onClick={() => setModalIsOpen(true)}
                cursor="pointer" />
              </HStack>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button
              className="w-[100%] text-white font-bold"
              onClick={onClose}
              height="70px"
              fontSize="25px"
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* Modal Section */}
      {/* <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} size={'sm'} isCentered>
        <ModalOverlay />
        <ModalContent 
        bgColor={'red'}
        height={'50vh'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={'25px'}>
          <ModalHeader>Selected Numbers</ModalHeader>
          <ModalCloseButton />
          <ModalBody flexDirection="column" alignItems="center" gap={4}>
            <Text>Your selected numbers: {selectedNumbers.join(", ")}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => setModalIsOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Box>
  );
};

export default Gameplay;
