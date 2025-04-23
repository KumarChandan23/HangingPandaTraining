"use client"
import React from 'react';

interface DeleteButtonProps{
        children: React.ReactNode
        onClick?:()=>void
        type?: 'button' | 'submit' | 'reset'
}

const DeleteButton: React.FC<DeleteButtonProps> = ({children, onClick, type='button'}) => {
  return (
    <button type={type} onClick={onClick}>{children}</button>
  )
}

export default DeleteButton