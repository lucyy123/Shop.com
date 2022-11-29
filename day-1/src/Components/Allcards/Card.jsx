import React from 'react'
import { Card, CardHeader,Divider, CardBody,ButtonGroup, CardFooter,Button,Stack,Image,Heading,Text } from '@chakra-ui/react'
export default function MyCard(){
  return (
    <div>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://img.shop.com/Image/homepage/shop-en-us-Marshalls-FreeShip-300x2501668727246227-img.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  <Divider />
</Card>
    </div>
  )
}
