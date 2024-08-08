import { useSelector } from "react-redux";
import React from "react";
import { BsBasketFill } from "react-icons/bs";
function Navbar() {
    const {quantity} = useSelector((store)=> store.cart)
  return (
    <nav>
      <div className="navbar">
        <h3>Almak istediğniz kursu seçiniz</h3>
        <div className="navDiv">
            <div className="ItemsDiv"><p>{quantity}</p></div>
          <BsBasketFill className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
