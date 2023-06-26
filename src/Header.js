import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="loc">
      <PlaceOutlinedIcon />
        
      </div>

      <Link to="/" className="header_clearlink"><div className="header__option">

          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Select Your Address</span>
        </div>
      </Link> 

  
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        <div class="header__option"><span class="header__optionLineOne">English</span><span class=""><img class="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADpSURBVChTY7QwT7gmJSWjzMzMzPD58zcGNjZWBmYmRoZcnncMLIwMOMHzPz/vMPr5Vv/n4uJgYGVjYfj54xdY87dvPxjafTQYWFmYoEqxA8bAgNr/HBzsQE0sDL9+/QYawsrwBeiCSXnuDGwszFBl2AFQcx1QMxsDGztQ888/YENAzi8S+szAisfZIMAYFFj3H6QB5Nzfv0GaWRk+fvzK0BdvCbSZgLO3bDn+n4kJouj///9gmpGRkUHnzwcGJgYIHxdgPJlaiF8FHsD46vAJ8jXfW7CCfM2nMkuv/vn2TQXKJxqwcHHdAQAUnEjIHeqApwAAAABJRU5ErkJggg=="/> </span></div>
      </div>
      

      <div className="header__nav">
      <Link to={!user && '/login'} className="header_clearlink">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
       <Link to="/orders" className="header_clearlink"><div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link> 
        <Link to="/checkout" className="header_clearlink">
          <div className="header__optionBasket">
            <ShoppingCartOutlinedIcon />
            <span className="header__optionLineTwo header__basketCount header_clearlink">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
