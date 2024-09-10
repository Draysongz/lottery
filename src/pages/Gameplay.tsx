import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Icon,
  useDisclosure,
  HStack,
  useToast,
} from "@chakra-ui/react";
import {  User } from "../helper-functions/getUser";
import { Game } from "../helper-functions/cards";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { FaSackDollar } from "react-icons/fa6";
import NavigationBar from "../components/NavigationBar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { useCards } from "../hooks/usecards";
import peeps from '../Assets/peeps.svg'
import ticket from '../Assets/ticket.svg'
import chips from  '../Assets/chip.svg'
import { useRealtimeUserData } from "../hooks/useUserData";




export default function Gameplay({userData} : {userData: User | undefined}) {

  console.log(userData)

  const { onClose, onOpen, isOpen } = useDisclosure();
  const {cards} = useCards('active')


  
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  // Add state to hold the selected prize
  const [selectedPrize, setSelectedPrize] = useState<number>(0);
  const [disabledNumbers, setDisabledNumbers] = useState<Set<number>>(
    new Set()
  );
  const [selectedCard, setSelectedCard] = useState<Game>()


  let allSlots;
  if(selectedCard != null){
   allSlots = Array.from({ length: selectedCard.totalSlots }, (_, index) => index + 1);
  }

    useEffect(() => {
    if (cards && cards.length > 0) {
      // Calculate unavailable slots based on availableSlots field
      const unavailableNumbers = new Set<number>();
      cards.forEach(card => {
        if (card.availableSlots) {
          for (let i = 1; i <= 10; i++) { // Assuming there are slots 1 to 10
            if (!card.availableSlots.includes(i)) {
              unavailableNumbers.add(i);
            }
          }
        }
      });
      setDisabledNumbers(unavailableNumbers);
    }
  }, [cards]);

  // Function to handle clicking on a game
  const handleJoinGame = (prize: number, card: Game) => {
    setSelectedPrize(prize); // Set the selected prize
    setSelectedCard(card)

    onOpen(); // Open the drawer
  };

  const handleNumberClick = (number: number) => {
    if (
      !disabledNumbers.has(number) &&
      !selectedNumbers.includes(number)
    ) {
      console.log(selectedNumbers);

      // setDisplayNumbers([...displayNumbers, number]);
      setDisabledNumbers(new Set(disabledNumbers.add(number)));
      setSelectedNumbers((prev) => [...prev, number]);
      console.log(selectedNumbers);
    }
  };



 
  return (
    <Flex
      
      width={"100vw"}
      height={"100vh"}
      direction={"column"}
      color={"white"}
      justifyContent={"space-around"}
      gap={14}
      overflow={"scroll"}
      alignItems={"center"}
      paddingTop={"9%"}
      paddingBottom={"15%"}
    >
      <Flex direction={"column"} gap={6}>
        <Flex direction={"column"} alignItems={"center"} gap={4}>
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

      <Flex
        width={"100%"}
        direction={"column"}
        gap={16}
        alignItems={"center"}
      >
        {cards && cards?.length > 0 && cards.map((card, index) => {
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
              boxShadow="0px 0px 4px 1px rgba(223, 223, 223, 0.6)"
            >
              <Flex
                bgColor={"black"}
                width={"80%"}
                height={"60px"}
                borderRadius={"50px"}
                mt={-6}
                alignItems={"center"}
                justifyContent={"center"}
                zIndex={0}
                boxShadow="0px 0px 14px 2px rgba(223, 223, 223, 0.6)"
              >
                <Text fontSize={"22px"} fontWeight={"600"} color={"white"}>
                  {card.gameId}
                </Text>
              </Flex>
              <Flex
                overflowY={"hidden"}
                width={"80%"}
                height={"200px"}
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
                    border={"2px solid grey"}
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
                          WebkitTextStroke: "2px grey", // Custom stroke
                          textStroke: "2px grey",
                        }}
                      >
                        {card.prizePool}
                        <Text fontSize={"20px"} lineHeight={"0"}>
                          USDT
                        </Text>
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Flex>
              <Flex
                bg={""}
                w={"85%"}
                borderRadius={"15px"}
                height={"70px"}
                mt={-16}
                mb={3}
                alignItems={"center"}
                boxShadow="0px 0px 4px 1px rgba(223, 223, 223, 0.6)"
              >
                <Flex
                  borderRight={"1px solid white"}
                  width={"33.33333333333333%"}
                  justifyContent={"center"}
                  height={"70%"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Image width={8} src={peeps} />
                  <Text color={"white"} fontWeight={600}>
                    {card.participants.length}
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
                  <Image width={8} src={ticket} />
                  <Text
                    color={"white"}
                    fontWeight={600}
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                  >
                    {card.ticketPrice}
                    <Text fontWeight={100} fontSize={"10px"}>
                      USDT
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
                  <Image width={8} src={chips} />
                  <Text color={"white"} fontWeight={600}>
                    {card.prizePool}
                  </Text>
                </Flex>
              </Flex>
              <Button
                onClick={() => handleJoinGame(card.prizePool, card as Game)} // Pass the prize to the drawer
                bg={"linear-gradient(180deg, grey 0%, grey 100%)"}
                color={"white"}
                width={"60%"}
                height={"40px"}
                borderRadius={"50px"}
                boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
              >
                Join game
              </Button>
            </Flex>
          );
        })}
      </Flex>
      <NavigationBar userData={userData} />
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          borderTopRadius="25px"
          bg={"black"}
          borderTop={"4px solid white"}
        >
          <DrawerBody>
            <div className=" flex flex-col items-center justify-center py-10 text-white gap-3">
              <div className="flex flex-col text-center gap-3 w-[100%] items-center">
                <p className="text-[1.5em] font-semibold flex gap-2 items-center text-center">
                  Pool Prize:
                  <Text
                    fontWeight={100}
                    fontSize={"2em"}
                    color={'black'}
                    sx={{
                      WebkitTextStroke: "2px white", // Custom stroke
                      textStroke: "2px white",
                    }}
                  >
                    {selectedPrize} USDT
                  </Text>
                </p>
                <div className="input flex flex-wrap justify-center gap-2 mt-4 w-['80%]">
                  {allSlots && allSlots?.length > 0 && allSlots.map((number) => (
                    <Button
                      key={number}
                      onClick={() => handleNumberClick(number)}
                      isDisabled={disabledNumbers.has(number)}
                      className={`dialpad-button ${
                        disabledNumbers.has(number)
                          ? "pattern-button"
                          : "bg-[white]"
                      } text-black`}
                      w={"80px"}
                      height={"80px"}
                      fontSize={"28px"}
                      border={"1px solid grey"}
                      borderRadius={"50px"}
                    >
                      {number}
                    </Button>
                  ))}
                </div>
              </div>
               <ModalComponent  selectedNumbers={selectedNumbers} userData={userData} card={selectedCard as Game} />
            </div>
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
     
      
    </Flex>
  );
};



function ModalComponent({selectedNumbers,  userData, card}: {selectedNumbers: number[], userData: User | undefined, card: Game}){
    const {updateGameData} = useRealtimeUserData(userData?.userId, userData?.name)
    const {updateSlots} = useCards("active")
    const toast= useToast()
    const [open, setOpen] = useState(false)

    const purchaseSlots = async ()=>{
      try {
        await updateGameData(card.gameId, selectedNumbers, card.prizePool)
        await updateSlots(card.gameId, selectedNumbers, userData)
        toast({
          title: 'Slots purchased sucessfully',
          duration:3000,
          isClosable: true
        })
        
        setOpen(false)
      } catch (error) {
        console.log(error)
      }
    }
  return(
    <>
     <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger>
      <HStack
                color={"white"}
                w={"90vw"}
                bg={"transparent"}
                rounded={"full"}
                py={10}
                px={3}
                mt={5}
                height="70px"
                alignItems={'center'}
                justifyContent={'center'}
                border={'1px solid white'}
                display={selectedNumbers.length > 0 ? "flex" : "none"}
              >
                <Text fontSize="20px"> Buy slots </Text>
                     {selectedNumbers.length > 0 &&
                  selectedNumbers.map((number, index) => {
                    console.log("mapping the array");
                    return (
                        <Text key={index} fontSize={"20px"} color={"white"}>
                        {" "}
                        {number},
                      </Text>
                    );
                  })}

              </HStack>
  </DialogTrigger>
  <DialogContent className=" h-[50vh] items-center rounded-[10px] border-[2px] bg-black text-white">
    <DialogHeader>
      <DialogTitle>You are about to purchase slot </DialogTitle>
    </DialogHeader>
      <Box
      display={'flex'}
      gap={2}
      textAlign={'center'}
      alignItems={'center'}
      justifyContent={'center'}
      >
      {selectedNumbers.length > 0 &&
                  selectedNumbers.map((number, index) => {
                    console.log("mapping the array");
                    return (
                        <Text key={index} fontSize={"25px"}>
                        {" "}
                        {number},
                      </Text>
                    );
                  })}
      </Box>
      <Button
      border={'2px solid white'}
      h={'60px'}
      borderRadius={'10px'}
      onClick={purchaseSlots}>
        Buy 
      </Button>
  </DialogContent>
  
</Dialog>

          </>
  )
}

