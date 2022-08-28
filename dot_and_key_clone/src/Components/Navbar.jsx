import { HStack, Image, Box, CloseButton, MenuItem, Menu,Button,MenuButton, MenuList } from '@chakra-ui/react';
import { SearchIcon, Icon, HamburgerIcon } from '@chakra-ui/icons';
import {NavLink} from "react-router-dom"
import TopOfferBanner from './TopOfferBanner';

import React, { useState } from 'react'

function Navbar() {
  const [status, setStatus] = useState(false);
  
  function handleOption(){
    status?setStatus(false):setStatus(true);
  }
  return (
    <>
    <Box top={0} w="100%" overflow="auto" >
    {/* <TopOfferBanner/> */}
    <HStack bg="white" position="fixed" paddingLeft={10} paddingRight={10} w="100%" h="115px" border="1px" justifyContent="space-between">
        <Box >
          {/* {status?<CloseButton size='lg'/>:<Icon cursor="pointer" w={8} h={8} as={HamburgerIcon}/>} */}
          <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} cursor="pointer" w={8} h={8} as={HamburgerIcon} >
        {isOpen ? <CloseButton size='lg'/> : <Icon cursor="pointer" w={8} h={8} as={HamburgerIcon}/>}
      </MenuButton>
      <MenuList >
        <MenuItem>WHAT'S NEW?</MenuItem>
       <NavLink to="./bestseller"><MenuItem>BEST SELLERS</MenuItem></NavLink>
        <MenuItem>499 STORE</MenuItem>
        <MenuItem>SHOP BY INGREDIENTS</MenuItem>
        <MenuItem>SHOP BY CONCERN</MenuItem>
        <MenuItem>SHOP ALL PRODUCTS</MenuItem>
        <MenuItem>HAIR CARE</MenuItem>
        <MenuItem>IKWI NUTRITION</MenuItem>
        <MenuItem>DOWNLOAD THE APP</MenuItem>
        <MenuItem>KNOW US BETTER</MenuItem>
        <MenuItem>PROFILE</MenuItem>
        <MenuItem>LOG IN</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
        </Box>
        <NavLink to="/"><Box ml="90px"><Image cursor="pointer" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348" alt="error"/></Box></NavLink>
        <HStack gap={6}> 
          <Icon cursor="pointer" w={6} h={6} as={SearchIcon}/> 
          <NavLink to="/track"><Image cursor="pointer" h="30px" w="30px"  src="https://cdn-icons-png.flaticon.com/512/67/67347.png" alt="error" /></NavLink>
          <NavLink to="/cart"><Image cursor="pointer" h="30px" w="30px"  src='https://img.icons8.com/ios/500/shopping-bag--v1.png' alt="error" /></NavLink>
          <NavLink to="/login"><Image cursor="pointer" h="30px" w="30px"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52bxYirKiV_rO6crCt-WRlTlvGolfBrl_uWFtHlHglkW7YHPl69VDu3qw6qfFiRxcVws&usqp=CAU" alt='Error' /></NavLink>
        </HStack>
    </HStack>
    </Box>
   
    </>
  )
}
export default Navbar;

