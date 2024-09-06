import React, { useState } from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Icon } from '@chakra-ui/react';
import { MdFormatListBulletedAdd } from "react-icons/md";

interface LotteryData {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
}

const Admin: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lotteryData, setLotteryData] = useState<LotteryData[]>([]);
  const [tempData, setTempData] = useState<LotteryData>({ question1: '', question2: '', question3: '', question4: '' });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempData({ ...tempData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLotteryData([...lotteryData, tempData]);
    setTempData({ question1: '', question2: '', question3: '', question4: '' });
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
              name="question1"
              value={tempData.question1}
              placeholder="Location"
              onChange={handleInputChange}
              className="p-4 mb-4 h-[55px]"
              borderRadius={'10px'}
            />
            <Input
              name="question2"
              value={tempData.question2}
              placeholder="Prize"
              onChange={handleInputChange}
              className="p-4 mb-4 h-[55px]"
              borderRadius={'10px'}
            />
            <Input
              name="question3"
              value={tempData.question3}
              placeholder="Number of Players"
              onChange={handleInputChange}
              className="p-4 mb-4 h-[55px]"
              borderRadius={'10px'}
            />
            <Input
              name="question4"
              value={tempData.question4}
              placeholder="Ticket Required"
              onChange={handleInputChange}
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
        <h2 className="text-xl font-bold mb-4">Lottery Entries</h2>
        {lotteryData.length > 0 ? (
          <ul>
            {lotteryData.map((data, index) => (
              <li key={index} className="mb-2 p-2 bg-gray-100 rounded border-2 border-black" >
                <p><strong>Location:</strong> {data.question1}</p>
                <p><strong>Prize:</strong> {data.question2}</p>
                <p><strong>Number of Players:</strong> {data.question3}</p>
                <p><strong>Ticket Required:</strong> {data.question4}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No lotteries created yet.</p>
        )}
      </Box>
    </Box>
  );
};

export default Admin;
