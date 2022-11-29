import React from 'react'
import { Image } from '@chakra-ui/react'
export default function Blackfriday( props ) {
  const { src,title }=props
  return (
    <div style={{textAlign:"center",border:"1px solid"}}>
      <h2 style={{fontSize:"40px"}}>{title}</h2>
      
      <div style={{display:"flex",padding:"15px 0px", textAlign:"center",margin:"auto",border:"1px solid",justifyContent:"center"}}>
      <Image
  borderRadius='full'
  boxSize='150px'
  src={src}
  
  alt='Dan Abramov'
/>
      <Image
  borderRadius='full'
  boxSize='150px'
  src={src}
  alt='Dan Abramov'
/>
      <Image
  borderRadius='full'
  boxSize='150px'
  src={src}
  alt='Dan Abramov'
/>
      <Image
  borderRadius='full'
  boxSize='150px'
  src={src}
  alt='Dan Abramov'
/>
      <Image
  borderRadius='full'
  boxSize='150px'
  src={src}
  alt='Dan Abramov'
/>
      <Image
  borderRadius='full'
  boxSize='150px'
  src={src}
  alt='Dan Abramov'
/>
      </div>

    </div>
  )
}
