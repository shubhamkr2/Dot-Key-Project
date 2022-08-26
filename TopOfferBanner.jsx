import React from 'react'
import {Box,Center,Text} from "@chakra-ui/react"

function TopOfferBanner(){
  return (
    <Center border="1px" w="100%" bg="#3c3c3c" color="white" h="38px">
    <Box>
        <Text cursor="pointer" as='u'>SERUMS & MASKS AT FLAT 499</Text>
    </Box>
    </Center>
  )
}
export default TopOfferBanner;
