import React, { useState } from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Icon } from '@chakra-ui/react';
import { MdFormatListBulletedAdd } from "react-icons/md";
import { useCards } from '../hooks/usecards';
import NavigationBar from '../components/NavigationBar';
import { User } from '../helper-functions/getUser';


interface adminProps{
  userData: User | undefined
}


const Admin: React.FC<adminProps> = ({userData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('')
  const [prize, setPrize] = useState<number>(0)
  const [slots, setSlots] = useState<number>(0)
  const [slotPrice, setSlotPrice] = useState<number>(0)

  const {cards, addGame} = useCards()

  console.log(cards)

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

 const handleSubmit = async () => {
  console.log(prize, location, slotPrice, slots);
  
  // Generate available slots starting from 1
  const availableSlots = Array.from({ length: slots }, (_, i) => i + 1);

  // Add the game with the generated available slots
  await addGame({
    gameId: location,
    prizePool: prize,
    ticketPrice: slotPrice,
    totalSlots: slots,
    participants: [],
    status: 'active',
    availableSlots: availableSlots, 
    winner: null,
    createdAt: new Date(), 
    drawnAt: null,
  });

  setLocation('')
  setPrize(0)
  setSlotPrice(0)
  setSlots(0)
  closeModal();
};

  return (
    <Box display={"flex"}
    width={"100vw"}
    minH={"100vh"}
    flexDirection={"column"}
    // color={"white"}
    // justifyContent={'center'}
    gap={6}
    alignItems={"center"}
    paddingY={"20px"}
    // bgColor={'red'}
    >
      {/* First Card: Create New Lottery */}
      <Box className="bg-white w-[90%] p-4 rounded-lg shadow-md mb-6 gap-4 flex items-center text-center">
        <Icon as={MdFormatListBulletedAdd} fontSize={24}/>
        <Button onClick={openModal} fontSize={'24px'}>
          Create New Lottery
        </Button>
      </Box>

      {/* Modal for lottery creation */}
      <Modal isOpen={isOpen} onClose={closeModal} isCentered>
        <ModalOverlay 
        // bg={'pink'}
        display={'flex'}
        height={'100vh'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'} 
        style={{
            backdropFilter: 'blur(10px)', // Blur intensity (e.g., 10px)
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional: a dark overlay for better contrast
          }}
        />
        <ModalContent
        w={'90%'}
        bg={'black'}
        boxShadow="0px 0px 4px 6px rgba(223, 223, 223, 0.6)"
        color={'white'}
        borderRadius={'25px'}
        height={'500px'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        position={'absolute'}
        bottom={20}
        left={'5%'}
        px={3}
        
        >
          <ModalHeader
          fontSize={'24px'}
          fontWeight={'600'}
          mb={4}
          >Create New Lottery</ModalHeader>
          <ModalBody
          display={'flex'}
          flexDirection={'column'}
          color={'black'}
        //   bg={'blue'}
        //   h={'50%'}
          >
            <Input
              
              value={location}
              placeholder="Location"
              onChange={(e)=>setLocation(e.target.value)}
              className="p-4 mb-4 h-[55px]"
              borderRadius={'10px'}
            />
            <Input
              value={prize <= 0 ? '': prize > 0 ? prize: ''}
              placeholder="Prize"
              onChange={(e)=>setPrize(parseInt(e.target.value))}
              className="p-4 mb-4 h-[55px]"
              borderRadius={'10px'}
            />
            <Input
              value={slots <= 0 ? '' : slots > 0? slots: ''}
              placeholder="Number of Slots"
              onChange={(e)=>setSlots(parseInt(e.target.value))}
              className="p-4 mb-4 h-[55px]"
              borderRadius={'10px'}
            />
            <Input
              value={slotPrice <= 0 ? '' : slotPrice > 0 ? slotPrice: ''}
              placeholder="Price per ticket"
              onChange={(e)=>setSlotPrice(parseInt(e.target.value))}
              className="p-4 mb-4 h-[55px]"
              borderRadius={'10px'}
            />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={handleSubmit}
            fontSize={'20px'}  p={3} borderRadius={'10px'}>
              Submit
            </Button>
            <Button variant="ghost" onClick={closeModal}
            fontSize={'20px'} border={'1px solid white'} p={3} borderRadius={'10px'}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Second Card: Display lottery data */}
      <Box className="bg-white w-[90%] p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Created Lotteries</h2>
        {cards.length > 0 ? (
          <ul>
            {cards && cards.map((data, index) => (
              <li key={index} className="mb-2 p-2 bg-gray-100 rounded border-2 border-black" >
                <p><strong>Location:</strong> {data.gameId}</p>
                <p><strong>Prize:</strong> {data.prizePool}</p>
                <p><strong>Slots:</strong> {data.totalSlots}</p>
                <p><strong>Price Per Ticket:</strong> {data.ticketPrice}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No lotteries created yet.</p>
        )}
      </Box>

      <NavigationBar userData={userData} />
    </Box>
  );
};

export default Admin;
