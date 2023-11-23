import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { FaEye } from "react-icons/fa"
import { RiDeleteBin5Fill } from "react-icons/ri"

function ViewData({el}) {

    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayTwo />)
  
    return (
      <>
        <FaEye 
          ml='4'
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }} />
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Remove from Favourite</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Package : {el.fav}</Text>
              <Text>Resion : {el.resion}</Text>
            </ModalBody>
            <ModalFooter>
              <Button bgColor={"#6558f5"} color={"white"} _hover={{ bgColor: "#877fff" }} onClick={() => {
                onClose();
              }}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ViewData;