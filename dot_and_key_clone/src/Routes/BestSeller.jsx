import React, { useEffect, useState } from 'react'
import { Image, Grid } from '@chakra-ui/react';
import Card from '../Components/Card';
import getdata from '../Components/data';
import TopOfferBanner from '../Components/TopOfferBanner';
import Navbar from '../Components/Navbar';


function BestSeller() {
  const [bestData, setBestData] = useState([])
    useEffect(()=>{
     setBestData(getdata());

    },[])
    bestData.map((item)=>{
  console.log(item.rating)

    })

  return (
    <div>
        {/* <TopOfferBanner/> */}
        <Navbar />
        <Image mt="150px" borderRadius="8px" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/collections/shop-all_mobile_1512x.jpg?v=1660730662" alt="error" />
       <Grid mt="50px" ml="80px" templateColumns='repeat(4, 1fr)' rowGap={10} gap={6}>
        {bestData?.map((item)=>(
            <Card
              imageUrl={item.images[0]}  
              title={item.title}  
              oldformattedPrice={item.price}  
              formattedPrice={item.price-item.discount} 
              reviewCount={item.discount} 
              rating={item.rating} 

             />
        ))}
        </Grid>
    </div>
  )
}
export default BestSeller;