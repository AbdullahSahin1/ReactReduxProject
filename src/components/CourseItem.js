import React from 'react'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeItem } from "../control/cardSlice";
function CourseItem({id,title,price,img,quantity}) {
    const dispatch = useDispatch();
  return (
    <div className='cartItem' >
        <img src={img} alt=""/>
        <div className='cartInfo'>
            <h4>{title}</h4>
            <h4>{price}</h4>
            <div>
               <button className="cartquantitybtn" onClick={()=>{dispatch(increase(id))}}>
            <FaChevronUp />
          </button>
          <p className="cartquantity">{quantity}</p>
          <button className="cartquantitybtn" onClick={()=>{dispatch(decrase(id))}}>
            <FaChevronDown />
          </button>
            </div>
            <button className='cartdeletebtn' onClick={()=>{dispatch(removeItem(id))}}>Sil</button>
        </div>
    </div>
    
export default CourseItem
