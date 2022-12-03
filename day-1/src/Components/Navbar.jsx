// import React from 'react'
import Styles from './Styles'
import { Input, Icon, Avatar, } from '@chakra-ui/react'
import { SearchIcon, CloseIcon, RepeatClockIcon, HamburgerIcon } from '@chakra-ui/icons'
import Menubar from './Menubar'
// import Categories from './Sidebars/Categories'
import { Link, Route, Routes } from "react-router-dom";
// import { useState } from 'react'
import React, { useState } from 'react'
// import { Icon, , } from "@chakra-ui/icons"
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useDisclosure, DrawerHeader } from "@chakra-ui/react"
import LoginDrawer from "./Alldrawers/LoginDrawer"


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()



  const handleClick = () => {
    onOpen()
  }

  const sizes = ['xs']

  const gap = {
    margin: "5px 15px", fontSize: "18px"
  }

  return (
    <>

      <div style={Styles.Navbar}>
        <div style={{ marginLeft: "20px" }}>
         <Link to="/"><img src="https://img.shop.com/Image/resources/logos/shop-logo-us-thanksgiving.svg" alt="image not available" width="200px" /></Link>  
        </div>
        <div style={Styles.searchbar}>


          <div style={{
            border: "1px solid",
            padding: "10px 20px", borderTopLeftRadius: "80px 80px", borderBottomLeftRadius: "80px 80px"
          }}>
            <select name="" id="sort-by-category">
              <option value="All Departments">All Departments</option>
              <option value="Auto">Auto</option>
              <option value="Beauty">Beauty</option>
              <option value="Clothes">Clothes</option>
              <option value="Electronics">Electronics</option>
              <option value="Video Games">Food and Drinks</option>
              <option value="Video Games">Jewelry</option>
              <option value="Music">Music</option>
              <option value="Video Games">Tools</option>
              <option value="Video Games">Video Games</option>
            </select>
          </div>
          <div style={{ border: "1px solid", width: "70%", padding: "10px 5px" }}>
            <Input placeholder='Search SHOP.COM....' size="md" variant='unstyled' />
          </div>
          <div style={{
            display: "in-line",
            border: "2px solid ", padding: "10px 10px", backgroundColor: "black", color: "white", borderTopRightRadius: "50%", borderBottomRightRadius: "50%", marginLeft: "-1px"
          }}>
            <SearchIcon boxSize={5} />

          </div>

        </div>
      </div>
      <div style={Styles.Menu}>
        <div>

          {
            sizes.map((size) => (
              <p
                onClick={() => handleClick(size)}
                key={size}
                variant='ghost'
              >{<HamburgerIcon margin={2}></HamburgerIcon>}Categories</p>
            ))
          }
          <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"xs"}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                    <img style={{ display: "inline", marginBottom: "-10px" }} src="https://img.shop.com/Image/resources/logos/shop-s-logo-icon.svg" alt="" width={40} />
                    <h2 style={{ display: "inline", fontFamily: "monospace", fontSize: "30px", fontWeight: "bolder", marginLeft: "10px" }}>SHOP.COM</h2> 

                  </DrawerHeader>
              <DrawerBody>
           
                 

             

                  <div>
                
                    <ul style={{ listStyle: "none" }}>
                      <li  style={{ fontWeight: "bolder",margin: "15px 15px" }}>Categories</li>
                      <li style={gap}>Gift Center</li>
                      <li style={gap} >Shop Sale</li>
                      <li style={gap}>Clothes</li>
                      <li style={gap}>Shoes</li>
                      <li style={gap}>Beauty</li>
                      <li style={gap}>Electronics</li></ul>

                  </div>




                
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>

        <div style={{ display: "flex", border: "1px solid red",justifyContent:"space-between",gap:"25px"}}>
          <Link to="/exclusive">Exclusive Brands</Link>
          <Link to>Stores</Link>
          <Link to>Deals</Link>
          <Link to>SHOP Travels</Link>
          <Link to>Department</Link>

        </div>
        <div style={Styles.shoppingicons} >
          {<LoginDrawer gap={gap}/> }
          <Link to="/orderPage"> <RepeatClockIcon size="xs"  mx={2} />Orders</Link>
          <Link  to="/cartPage"> <img src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg" alt="" style={{ display: "inline",marginRight:"5px" }} />
          <p style={{display:"inline",position:"relative",top:"-4px"}}>Cart</p>  </Link>
        </div>
      </div>
    </>
  )
}
