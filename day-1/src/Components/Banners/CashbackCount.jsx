import { Button } from '@chakra-ui/react'
import React ,{useState}from 'react'
// import { Button } from '@chakra-ui/react'
export default function CashbackCount() {
    const [cashback,setCashback]=useState(50009502)
  return (
    <div style={{padding:"15px" ,textAlign:"center",border:"2px solid teal"}}>
      <h2 style={{fontSize:"26px",display:"inline",marginRight:"10px"}}>${cashback}</h2>
      <span >awarded in <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt="" width={50} style={{display:"inline"}} />Cashback! <Button colorScheme='teal' variant='outline'>
    Learn more
  </Button>
        </span> 
      
      
      
    </div>
  )
}
