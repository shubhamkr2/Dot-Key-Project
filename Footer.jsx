import React from 'react'
import {Stack,Box,Image,Text,Flex,Input,Button} from "@chakra-ui/react"

function Footer() {
  return (
    <Stack borderTop="1px">
        <Flex m="60px">
            <Box w="33%" fontSize='xl'>
                <Text mb="20px" fontSize='2xl'>GET TO KNOW US</Text>
                <Text cursor="pointer" mb="10px">ABOUT US</Text>
                <Text cursor="pointer" mb="10px">CONTACT US</Text>
                <Text cursor="pointer" mb="10px">EARTHCARE</Text>
                <Text cursor="pointer" mb="10px">AFFILIATE PROGRAM</Text>
                <Text cursor="pointer" mb="10px">TERMS & CONDITION</Text>
                <Text cursor="pointer" mb="10px">REFUND & CANCELLATION</Text>
                <Text cursor="pointer" mb="10px">PRIVACY POLICY</Text>
                <Text cursor="pointer" mb="10px">ORDER & SHIPPING</Text>
                <Text cursor="pointer" mb="10px">PAYMENT TERMS</Text>
                <Text cursor="pointer" mb="10px">TERMS OF SERVICE</Text>
                <Text cursor="pointer" mb="10px">REFUND POLICY</Text>
            </Box>
            <Box w="33%" fontSize='xl'>
                <Text mb="20px" fontSize='2xl'>ALSO AVAILABLE ON</Text>
                <Text cursor="pointer" mb="10px">NYKAA</Text>
                <Text cursor="pointer" mb="10px">AMAZON</Text>
                <Text cursor="pointer" mb="10px">FLIPKART</Text>
                <Text cursor="pointer" mb="10px">MYNTRA</Text>
            </Box>
            <Box w="33%" fontSize='xl'>
                <Text mb="20px" fontSize='2xl'>STAY UPDATED</Text>
                <Flex>
                    <Input w="280px" h="47px" border="none" borderRadius="0px" borderBottom="2px" placeholder="example@example.com" />
                    <Button ml="10px" color="white" h={12} bg="#3c3c3c">SUBMIT</Button>
                </Flex>
                <Button _hover="none" borderRadius={"none"} color={"white"} h={12} bg="#967a9b" mt="15px" mb="30px">DOWNLOAD THE APP</Button>
                <Flex mt="10px">
                    <Text mr="10px">FOLLOW US</Text>
                    <Image cursor="pointer" mt="4px" mr="8px" w="22px" h="18px" src='https://img.favpng.com/6/13/13/computer-icons-facebook-font-awesome-blog-font-png-favpng-W3n9waKdUygqZHRc8ANVV8XMG.jpg' alt='Error'/>
                    <Image cursor="pointer" mr="10px" w="22px" h="24px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Font_Awesome_5_brands_instagram.svg/1200px-Font_Awesome_5_brands_instagram.svg.png' alt='Error'/>
                    <Image cursor="pointer" mr="10px" w="23px" h="28px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Font_Awesome_5_brands_youtube.svg/1152px-Font_Awesome_5_brands_youtube.svg.png' alt='Error'/>
                </Flex>    
                <Text mt="23px" fontSize='15px' >&copy; 2022 Dot & Key</Text>        
            </Box>
        </Flex>
    </Stack>
  )
}
export default Footer;
