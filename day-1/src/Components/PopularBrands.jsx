import React from 'react'
import { GridItem, Grid } from "@chakra-ui/react"
import { Image, Box } from '@chakra-ui/react'
export default function PopularBrands() {
  return (
    <>
    <div style={{ display: "grid", gridTemplateColumns: "30% 70%", margin: "auto",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",marginTop:"20px",paddingBottom:"70px"}} >
      <div style={{ margin: "10px" }}>
        <img src="https://img.shop.com/Image/homepage/shop-usa-104264-BlackFriday2022-banner-600x600-img-r-min1668720027332.jpg" alt="" width="100%" height={400} />
      </div>
      <div style={{ margin: "5px" }}>
        <h1 style={{ fontSize: "30px", fontWeight: "bolder", textAlign: "center" }}>Popular Brands</h1>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          <GridItem w='100%' h='120' bg="gray.200" bgImage="url('https://img.shop.com/Image/homepage/nike_140x110-img.gif')" bgPosition="center"
            bgRepeat="no-repeat" />
          <GridItem w='100%' h='120' bg="gray.200" bgImage="url('https://img.shop.com/Image/homepage/nike_140x110-img.gif')" bgPosition="center"
            bgRepeat="no-repeat" />   <GridItem w='100%' h='120' bg="gray.200" bgImage="url('https://img.shop.com/Image/homepage/nike_140x110-img.gif')" bgPosition="center"
              bgRepeat="no-repeat" />   <GridItem w='100%' h='120' bg="gray.200" bgImage="url('https://img.shop.com/Image/homepage/nike_140x110-img.gif')" bgPosition="center"
                bgRepeat="no-repeat" />

          <GridItem w='100%' h='120' bg="gray.200" bgImage="url('https://img.shop.com/Image/homepage/nike_140x110-img.gif')" bgPosition="center"
            bgRepeat="no-repeat" />
        </Grid>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", margin:"10px" }}>
          <div >

            <Image src='https://img.shop.com/Image/homepage/us-eng-jcpenny-bf-media-no221668617248581.jpeg' alt='Dan Abramov' boxSize='250px' mx={1} />
            <p>Lorem  Debitis numquam, ab, e, hic sit illo cupiditate repellat.</p>
          </div>
          <div>

            <Image src='https://img.shop.com/Image/homepage/us-eng-jcpenny-bf-media-no221668617248581.jpeg' alt='Dan Abramov' boxSize='250px' mx={1} />
            <p>Lorem  Debitis numquam, ab, e, hic sit illo cupiditate repellat.</p>

          </div>
          <div>

            <Image src='https://img.shop.com/Image/homepage/us-eng-jcpenny-bf-media-no221668617248581.jpeg' alt='Dan Abramov' boxSize='250px' mx={1} />
            <p>Lorem  Debitis numquam, ab, e, hic sit illo cupiditate repellat.</p>

          </div>
          <div>

            <Image src='https://img.shop.com/Image/homepage/us-eng-jcpenny-bf-media-no221668617248581.jpeg' alt='Dan Abramov' boxSize='250px' mx={1} />
            <p>Lorem  Debitis numquam, ab, e, hic sit illo cupiditate repellat.</p>

          </div>
          {/* <Image src='https://img.shop.com/Image/homepage/us-eng-macys-blackfriday-hp-no221668101718116.jpg' alt='Dan Abramov' boxSize='250px' mx={1} />
          <Image src='https://img.shop.com/Image/homepage/us-eng-bbb-memorialday-media-may211668103821188.jpg' alt='Dan Abramov' boxSize='250px' mx={1} />
          <Image src='https://img.shop.com/Image/homepage/us-eng-gap-bf-hp-media-fillin1668700443090.png' alt='Dan Abramov' boxSize='250px' mx={1} />
        */}
        </div>

      


      </div>


    </div>
    <div style={{textAlign:"center",position:"relative",top:"-72px",}}>
    <img src="https://img.shop.com/Image/resources/homepage/shop-homepage-icon.svg" alt="" width={150} style={{display:"inline", }}  />
</div>


    </>
  )
}
