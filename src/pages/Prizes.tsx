import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    Icon,
} from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../index.css'
export default function Prizes() {
    return(
        <Box display={'flex'} bgColor={'rgba(122, 134, 235, 0.9)'} width={'100vw'} height={'100vh'} flexDirection={'column'} color={'white'} alignItems={'center'} justifyContent={'space-around'} overflow={'hidden'}>
            <Flex flexDirection={'column'} alignItems={'center'}>
           <Box className="prizeIcon w-[300px] h-[300px] max-h-600:w-[200px] max-h-600:h-[200px]"  display={'flex'} alignItems={'center'} bg={'rgba(255, 255, 255, 0.1)'} justifyContent={'center'} borderRadius={'50%'}> 
                <Image className="w-[300px] max-h-600:w-[200px]" src="/giftBox.png"/>
            </Box>           
            <Text display={'flex'} flexDirection={'column'} fontSize={'80px'} fontWeight={800} gap={''} p={'0px'} height={'250px'} mt={'-20px'} alignItems={'center'}>
                Real
            <Text color={'rgb(102 252 255)'} mt={'-50px'} 
            fontSize={'35px'} lineHeight={'90px'}
            >
                Rewards!
            </Text> 
            </Text>
            </Flex>
            <Text mt={'-150px'} w={'70%'} textAlign={'center'}>
            Every smart decision brings you closer to the top! Accumulate wealth and unlock achievements to earn real-world rewards.
            </Text>
            <Flex width={'80%'} justifyContent={'space-between'} alignItems={'center'}>
                <Box display={'flex'} gap={'5px'}>
                    <Box w={'10px'} h={'10px'} bgColor={"rgba(255, 255, 255, 0.6)"} borderRadius={'50%'}></Box>
                    <Box w={'10px'} h={'10px'} bgColor={"#fff"} borderRadius={'50%'}></Box>
                    <Box w={'10px'} h={'10px'} bgColor={"rgba(255, 255, 255, 0.6)"} borderRadius={'50%'}></Box>
                </Box>
                <Link to={"/modes"}>                
                <Button w={'50px'} h={'50px'} borderRadius={'50%'} border={'none'} outline={'none'} bgColor={'rgb(80 252 242)'}>
                    <Icon as={FaAngleRight} fontSize={25} />
                </Button>
                </Link>
            </Flex>
        </Box>
    );
}