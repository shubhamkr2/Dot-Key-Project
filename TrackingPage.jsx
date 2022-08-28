import { Box, Center, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import TopOfferBanner from '../Components/TopOfferBanner'

export const TrackingPage = () => {
  return (
    <>
    {/* <TopOfferBanner/> */}
    <Navbar />
    <Center mt="150px">
        <Box mb="50px" mt="50px" h="450px" w="380px" border="1px">
            <Text fontWeight="semibold" fontSize="25px" borderBottom="1px" textAlign="center" mt="90px">Track Shipment</Text>
            <Box padding="15px"  w="100%" >
                <Text fontWeight="semibold" mb="15px" textAlign="center" mt="30px">ENTER ORDER ID</Text>
                <Input mb="30px" h="50px" placeholder='Enter Order Id' />
                <Text fontWeight="semibold" mb="15px" textAlign="center">ENTER EMAIL ID</Text>
                <Input  h="50px" placeholder='Enter Email Id' />
            </Box>
        </Box>
    </Center>
 
    <Footer />
    </>
  )
}

