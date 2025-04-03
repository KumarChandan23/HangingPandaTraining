import React from 'react'

export const Modal = ({isOpen, children}) => {
    if(!isOpen) return null
  return (
    <div>
        <div>
            {children}
        </div>
    </div>
  )
}

export const ModalHeader = ({children}) => {
    return (
        <div style={{backgroundColor: "lightblue"}}>
            {children}
        </div>
    )
}

export const ModalBody = ({children}) => {
    return (
        <div style={{backgroundColor: "lightgreen"}}>
            {children}
        </div>
    )
}

export const ModalFooter = ({children}) => {
    return (
        <div style={{backgroundColor: "lightcoral"}}>
            {children}
        </div>
    )
}