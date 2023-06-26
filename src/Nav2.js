import React from "react";
import "./Nav2.css";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

function Nav2() {
  return (
      <div className="nav2">
        <ul>
          <li><MenuTwoToneIcon/>
            </li>
          <li className="mx-2"><a href="#">All</a></li>

          <li className="mx-2"><a href="#">Amazon basics</a></li>
          <li className="mx-2 "><a href="#">Coupons</a></li>
          <li className="mx-2"><a href="#">Pharmacy</a></li>
          <li className="mx-2 "><a href="#">Pet Supplies</a></li>
          <li className="mx-2 "><a href="#">Health & Household</a></li>
          <li className="mx-2 "><a href="#">Amazon Home</a></li>
          <li className="mx-2"><a href="#">Careers</a></li>
          <li className="mx-2 "><a href="#">Early Black Friday Deals</a></li>
          <li className="mx-2 "><a href="#">Beauty & Personal Care</a></li>
          <li className="mx-2 "><a href="#">Home Improvement</a></li>
          <li className="mx-2 "><a href="#">Find a Gift</a></li>
          <li className="mx-2 "><a href="#">Buy Again</a></li>
          <li className="mx-2 "><a href="#">Handmade</a></li>
          <li className="mx-2 "><a href="#">Smart Home</a></li>
          <li className="mx-5"><a href="#">Early Black Friday Deals are Here</a></li>
        </ul>
      </div>
  );
}

export default Nav2;
