import {
    Box,
    Flex,
    Text,
    Image,
    Button
} from "@chakra-ui/react";
import '../index.css'
export default function Login() {
    return(
        <Box display={'flex'} bgColor={'rgb(166, 234, 124, 0.9)'} width={'100vw'} height={'100vh'} flexDirection={'column'} color={'white'} alignItems={'center'} overflow={'hidden'}>
            <Flex flexDirection={'column'} alignItems={'center'}>
           <Box display={'flex'} alignItems={'center'}  justifyContent={'center'} className=" w-[400px] h-[400px] max-h-600:w-['200px'] max-h-600:h-['200px']"> 
                <Image className="w-[400px] max-h-600:w-[200px] max-h-600:-mt-12" src="/dragon.png"/>
            </Box>           
            <Text display={'flex'} flexDirection={'column'} fontSize={'80px'} fontWeight={800} p={'0px'} alignItems={'center'} className="mt-[20px] max-h-600:-mt-36">
                Select
            <Text mt={'-50px'} 
            lineHeight={'90px'} fontSize={'32px'}
            >
                a login method
            </Text> 
            </Text>

            </Flex>
            <Flex flexDirection={'column'} gap={4} width={'70%'}>
                <Button bgColor={'black'} color={'white'}
                borderRadius={'30px'} w={'100%'} p={'30px'} h={'55px'} gap={2}>
                    <Image className="w-[25px]" src="/apple.png"/>
                    <Text className="font-bold">
                        Continue with Apple
                    </Text>                    
                </Button>
                <Button borderRadius={'30px'} w={'100%'} p={'30px'} h={'55px'} gap={2}>
                <Image className="w-[20px]" src="/google.png"/>
                    <Text className="font-bold">
                        Continue with Google
                    </Text>
                </Button>
                <Button borderRadius={'30px'} w={'100%'} p={'30px'} h={'55px'} gap={2}>
                <Image className="w-[20px]" src="/facebook.png"/>
                    <Text className="font-bold">
                        Continue with Facebook
                    </Text>
                </Button>
            </Flex>
        </Box>
    );
}