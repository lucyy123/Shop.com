import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    Input,
    Button,
  } from '@chakra-ui/react'
import { Link,} from "react-router-dom";
  
  import { Avatar } from '@chakra-ui/react'
import React from 'react'
import {AddIcon,RepeatClockIcon } from "@chakra-ui/icons"
function LoginDrawer({gap}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <p onClick={onOpen}>
        <Avatar bg='Black' size="xs" mx={2} /> Sign in
        </p>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader><Avatar bg='Black' size="md" mx={2} /> Account</DrawerHeader>
  
            <DrawerBody>
            <ul style={{ listStyle: "none", }}>
                      <li >Your Shop Consultant is <b>SHOP.COM</b></li>
                     <Link to="/loginpage" > <li style={gap}><Avatar bg='Black' size="xs"  /> Sign in</li></Link>
                      <li style={gap}> <RepeatClockIcon/> Track Orders</li>
                     <Link><li style={gap}> <AddIcon/> Create Account</li></Link> 
                     <Link> <li style={gap}><Avatar bg='Black' size="xs"  /> My Account</li> </Link> 
</ul>
            </DrawerBody>
  
        
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default LoginDrawer