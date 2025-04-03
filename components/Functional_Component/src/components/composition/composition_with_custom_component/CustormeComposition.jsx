import React from 'react';
import {useState} from "react"
import { Modal, ModalBody, ModalFooter, ModalHeader } from './Modal';
const CustormeComposition = () => {
  const [openModel, setOpenModel] = useState(false)
  return (
    <div>
      <button onClick={()=> setOpenModel(state => !state)}>
      {openModel ? "Close Model" : "Open Model"}
      </button>
      <Modal isOpen={openModel}>
        <ModalHeader> Mobile</ModalHeader>
        <ModalBody> Ram: 190GB</ModalBody>
        <ModalFooter> copyright.com </ModalFooter>
      </Modal>

    </div>
  )
}

export default CustormeComposition