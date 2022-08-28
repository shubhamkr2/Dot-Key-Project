import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import TopOfferBanner from '../Components/TopOfferBanner';
import { HStack, Image,Text, Menu,
  MenuButton,
  MenuList,
  MenuItem,
Button,
 } from '@chakra-ui/react';
 import {ChevronDownIcon} from  "@chakra-ui/icons"
import Card from '../Components/Card';
import getdata from '../Components/data';


function Home(){
  
  // console.log(getdata())
  return (
    <div>
        {/* <TopOfferBanner/> */}
        <Navbar />
        <Image mt="150px" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_desk_7f3df301-1d23-4327-800b-8b63bccfd0a6_1.jpg?v=1658910526" alt="error" />
        <Text textAlign="center" mt="30px" fontSize="25px">Loved By</Text>
        <Text textAlign="center" fontStyle="italic" fontSize="35px" mb="20px" fontWeight="semibold">10 Lakh+ Customers</Text>
        <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5_Sale_Banner_Desktop_copy_1.jpg?v=1661422829" alt='error' />
        <Text textAlign="center" mt="30px" fontSize="25px">Shop Our</Text>
        <Text textAlign="center" fontStyle="italic" fontSize="35px" mb="20px" fontWeight="semibold">NEW ARRIVALS</Text>
        <HStack mb="30px" ml="105px" gap={10}>
          <Card
              imageUrl={"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_16_1a9d9d52-bb4b-44b4-a0f3-e83b0696c320.jpg?v=1658907159" }
              title={"VITAMIN C SUPER BRIGHT FOAMING FACE WASH | TRIPLE"}  
              oldformattedPrice={"295"}  
              formattedPrice={"280"} 
              reviewCount={"11"} 
              rating={"5.0"} 
            />
          <Card 
              imageUrl={"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN_2.jpg?v=1656934758" }
              title={"CICA + NIACINAMIDE FACE SUNSCREEN SPF 50 PA+++|.."}  
              oldformattedPrice={"595"}  
              formattedPrice={"565"} 
              reviewCount={"63"} 
              rating={"4.7"}
          />
          <Card 
              imageUrl={"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20VITC_2.png?v=1658907052" }
              title={"20 % VITAMIN C SERUM WITH BLOOD ORANGE & FERULIC ACL..."}  
              oldformattedPrice={"665"}  
              formattedPrice={"499"} 
              reviewCount={"60"} 
              rating={"4.7"}
          />
          <Card 
              imageUrl={"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_15.webp?v=1658907103" }
              title={"AHA BHA & PINEAPPLE FOAMING FACE WASH | 5% LACTIC, ...."}  
              oldformattedPrice={"295"}  
              formattedPrice={"280"} 
              reviewCount={"9"} 
              rating={"4.7"}
          />
        </HStack>
        <Text textAlign="center" mt="30px" fontSize="25px">Our</Text>
        <Text textAlign="center" fontStyle="italic" fontSize="35px" mb="20px" fontWeight="semibold">BESTSELLERS</Text>
        <HStack mb="30px" ml="105px" gap={10}>
          <Card
              imageUrl={"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20VITC_2.png?v=1658907052" }
              title={"20 % VITAMIN C SERUM WITH BLOOD ORANGE & FERULIC ACL..."}  
              oldformattedPrice={"295"}  
              formattedPrice={"280"} 
              reviewCount={"11"} 
              rating={"5.0"} 
            />
          <Card 
              imageUrl={"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_25_1.jpg?v=1660731137" }
              title={"CICA + NIACINAMIDE FACE SUNSCREEN SPF 50 PA+++|.."}  
              oldformattedPrice={"595"}  
              formattedPrice={"565"} 
              reviewCount={"63"} 
              rating={"4.7"}
          />
          <Card 
              imageUrl={"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_3_8124891e-d162-491c-b41e-43ea643926f1.png?v=1658906811" }
              title={"CICA NIACINAMIDE NIGHT GEL WITH GREEN TEA, TEA TREE OIL ...."}  
              oldformattedPrice={"665"}  
              formattedPrice={"499"} 
              reviewCount={"60"} 
              rating={"4.7"}
          />
          <Card 
              imageUrl={"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASKW_APPLI_1.png?v=1658907666" }
              title={"VITAMIN C+E PINEAPPLE FOAMING FACE WASH | 5% LACTIC, ...."}  
              oldformattedPrice={"295"}  
              formattedPrice={"280"} 
              reviewCount={"9"} 
              rating={"4.7"}
          />
        </HStack>
        <Text textAlign="center" mt="30px" fontSize="25px">IN THE</Text>
        <Text textAlign="center" fontStyle="italic" fontSize="35px" mb="20px" fontWeight="semibold">SPOTLIGHT</Text>
        

        <HStack>
        <Image w="50%" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_7.jpg?v=1660219323" alt="error" />
        <Image w="50%" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/hyaluronic_1.png?v=1659682274" alt="error" />
        </HStack>
        <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_8.jpg?v=1660219412" alt="error" />
        <Text textAlign="center" mt="30px" fontSize="25px">Shop Our</Text>
        <Text textAlign="center" fontStyle="italic" fontSize="35px" mb="20px" fontWeight="semibold">TOP CATEGORIES</Text>
        <HStack mb="30px" ml="105px" gap={10}>
          <Card
              imageUrl={"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_25_1.jpg?v=1660731137" }
              title={"VITAMIN C+E SERUM WITH BLOOD ORANGE & FERULIC ACL..."}  
              oldformattedPrice={"295"}  
              formattedPrice={"280"} 
              reviewCount={"276"} 
              rating={"4.8"} 
            />
          <Card 
              imageUrl={"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/nightcream_2_2e3e7434-5b2f-4cf6-aef9-ade90482eea2.png?v=1658906872" }
              title={"RETANOL+ NIACINAMIDE FACE SUNSCREEN SPF 50 PA+++|.."}  
              oldformattedPrice={"595"}  
              formattedPrice={"565"} 
              reviewCount={"63"} 
              rating={"4.7"}
          />
          <Card 
              imageUrl={"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_3_8124891e-d162-491c-b41e-43ea643926f1.png?v=1658906811" }
              title={"CICA NIACINAMIDE NIGHT GEL WITH GREEN TEA, TEA TREE OIL ...."}  
              oldformattedPrice={"665"}  
              formattedPrice={"499"} 
              reviewCount={"60"} 
              rating={"4.7"}
          />
          <Card 
              imageUrl={"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_1_1_e0123849-0a5d-4c37-9ef6-96ad3836c842.jpg?v=1660732568" }
              title={"72 HR HYDRATING FOAMING FACE WASH | 5% LACTIC, ...."}  
              oldformattedPrice={"295"}  
              formattedPrice={"280"} 
              reviewCount={"9"} 
              rating={"4.7"}
          />
        </HStack>
        <Image mb="70px" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/0_new_appArtboard_1_1_1.png?v=1656572545" alt="error1" />
        <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/D_K_Homepage_BOGO_Banner_Desktop_Version.gif?v=1659006084" alt="error" />
        <Text textAlign="center" mt="30px" fontStyle="italic" fontSize="35px"  fontWeight="semibold">LOVE IS GREATER</Text>
        <Text textAlign="center" mb="20px" fontSize="25px">WHEN STARTED</Text>
        <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-2_6_1.png?v=1656572658" alt="error" />
        <Text textAlign="center" mt="30px" fontStyle="italic" fontSize="35px" fontWeight="semibold">CLEAN BEAUTY</Text>
        <Text textAlign="center" mb="20px" fontSize="25px">WITH UNCOMPROMISED EFFICACY</Text>
        <Text textAlign="center" fontSize="25px">At Dot & Key, we strive to find the missing "dots" in your skincare regime and are obsessed with providing</Text>
        <Text textAlign="center" mb="20px" fontSize="25px">solutions or "keys" to these.</Text>

        <HStack p="20px" justifyContent="center" gap={16}>
          <Image w="150px" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3-ICONS.png?v=1645770027" alt="error" />
          <Image w="150px" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-ICONS_b6233563-9f3e-43f6-b158-5205886e2120.png?v=1645779546" alt="error" />
          <Image w="150px" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4-ICONS.png?v=1645770027" alt="error" />
          <Image w="150px" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-ICONS.png?v=1645770027" alt="error" />
        </HStack>

        
        <Footer/>
    </div>
  )
}
export default Home;