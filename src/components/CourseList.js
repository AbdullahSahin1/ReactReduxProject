import React from 'react'
import { useSelector } from "react-redux";

function CourseList() {
    const {cartItems,quantity,total} = useSelector((store)=> store.cart)

  return (
    
  )
}

export default CourseList
