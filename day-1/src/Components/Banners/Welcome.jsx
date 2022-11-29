import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  Text,
  ModalBody,
  ModalCloseButton, useDisclosure
} from '@chakra-ui/react'
export default function Welcome() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleclik = () => {
    onOpen()
  }
  useEffect(() => {
    setTimeout(() => {
      handleclik()
    }, 2000)
  }, [])
  return (


    <>
      {/* <Button onClick={handleclik}>Open Modal</Button> */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
    
          <ModalCloseButton />
          <ModalBody  textAlign={"center"}>
            <Text fontSize={30}  my={10}>
              
              <h2> Choose your shopping destination</h2>
             <h2> Choisissez votre destination de magasinage</h2>
              
              <div>
              
              🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️

              </div>
              <div >

              🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️
              </div>
            </Text>
              <Link  to="">visit our global site</Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

