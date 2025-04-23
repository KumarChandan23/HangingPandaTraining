"use client"
import DeleteButton from '@/components/DeleteButton'
import React from 'react'

const AboutPage = () => {
  const handleclick = ()=>{
      alert("Deleted")
  }
  return (
    <div>
      <h1>This is About page</h1>
      <DeleteButton type="button" onClick={handleclick}>Delete something</DeleteButton>
    </div>
  )
}

export default AboutPage