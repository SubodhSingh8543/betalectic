import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { RiDeleteBin5Fill } from "react-icons/ri"

function DeleteModal({deletefav,i}) {

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
        <RiDeleteBin5Fill 
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
              <Text>Are you sure that you wan to remove it!</Text>
            </ModalBody>
            <ModalFooter>
              <Button bgColor={"#6558f5"} color={"white"} _hover={{ bgColor: "#877fff" }} onClick={() => {
                deletefav(i)
                onClose();
              }}>Yes</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default DeleteModal;