import React, {useState} from "react"
import { Box, Image, Flex, Center, Button } from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons"

const initialcart={
imgurl:"",
title: "",
size: "60ml",
price:0
}
function Card({imageUrl, title, oldformattedPrice, formattedPrice, reviewCount, rating }) {
const [cart, setCart] = useState([initialcart])
const [cartData, setCartData] = useState([])
    
    const property = {
      imageUrl,
      title,
      oldformattedPrice,
      formattedPrice,
      reviewCount,
      rating,
    }
    function handleCart(){
        setCart({
            imgurl:imageUrl,
            title: title,
            size: "60ml",
            price:formattedPrice
        })
        setCartData(...cartData, cart);
        localStorage.setItem("cartData", JSON.stringify(cartData));
        console.log(imageUrl)
    }
    return (
      <Box w="250px" h="390px" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image w="250px" h="220px" src={imageUrl} alt="error" />
  
        <Box pl="7px" pr="7px">
                                {/* rating  */}
            <Center>
            <Box display='flex' mt='2' alignItems='center'>
                <StarIcon
                  color='yellow.400'
                />
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {rating}/5 ({reviewCount})
                </Box>
          </Box>
          </Center>

          
  
          <Box
            text-align= "justify"
            mt='1'
            fontWeight='semibold'
            // as='h4'
            // lineHeight='tight'
            noOfLines={2}
          >
            {title}
          </Box>
            <Flex justifyContent="space-around" fontWeight='semibold' >
            <Box mt="5px" color="gray">
                <del>Rs: {oldformattedPrice}</del>
            </Box>
            <Box mt="5px" color="pink.400">
                Rs: {formattedPrice}
            </Box>
            </Flex>
        </Box>
        <Button onClick={handleCart} h="45px" mt="15px" color="white" bg="gray" w="250px">ADD TO CART</Button>
      </Box>
    )
    // return(
    
    // )
  }
  export default Card;