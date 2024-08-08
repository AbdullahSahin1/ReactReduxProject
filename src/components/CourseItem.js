import React from 'react'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

function CourseItem({id,title,price,img,quantity}) {
  return (
    <div>
        <img src={img} alt=""/>
        <div>
            <h4>{title}</h4>
            <h4>{price}</h4>
            <div>
                <button><FaChevronUp /></button>
                <p>{quantity}</p>
                <button><FaChevronDown/></button>
            </div>
        </div>
    </div>
    
  )
}

export default CourseItem
