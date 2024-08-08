import React from 'react'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

function CourseItem({id,title,price,img,quantity}) {
  return (
    <div className='cartItem' >
        <img src={img} alt=""/>
        <div className='cartInfo'>
            <h4>{title}</h4>
            <h4>{price}</h4>
            <div>
                <button className='cartquantitybtn'><FaChevronUp /></button>
                <p className='cartquantity'>{quantity}</p>
                <button className='cartquantitybtn'><FaChevronDown/></button>
            </div>
            <button className='cartdeletebtn'>Sil</button>
        </div>
    </div>
    
export default CourseItem
