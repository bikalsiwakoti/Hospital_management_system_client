import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MenuList } from "./MenuList";
import "./navbar.css";
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown } from 'react-bootstrap';
import { Logout } from "../../Redux/Slices.js/UserSlice";


function Navbar() {
  const [clicked, setClicked] = useState(false);
  const user = useSelector(state => state?.user)
  const cart = useSelector(state => state?.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index} className="navLinks">
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    dispatch(Logout())
  }
  console.log(user.user)
  return (
    <nav>
      <div className="logo">
        MED<font>Care</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
      {!user?.user ? <div className="loginBtnNav">
        <Link to={'/login'}><button type="button" class="btn btn-outline-danger">Login</button></Link>
      </div> :
        <div className="userData">
          <div className="userCart">
            <Link to={`/cart`} style={{ textDecoration: 'none', color: 'initial' }}>
              <i class='bx bx-cart-alt position-relative'>
                {cart?.cartData?.length > 0 && <span class="position-absolute top-0 start-100 translate-middle w-50 h-50 bg-danger border border-light rounded-circle">
                  <span class='position-absolute top-0 p-1 text-center w-100' style={{ fontSize: "12px", color: "white" }}>{cart?.cartData?.length}</span>
                </span>}
              </i>
            </Link>
          </div>

          <Dropdown>
            <Dropdown.Toggle variant=" primary" id="dropdown-basic">
              <div className="userImg" >
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="user image"></img>
                <i class='bx bxs-down-arrow'></i>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ padding: "5px 10px" }}>
              {user?.user?.role === "staff" && <Dropdown.Item style={{ fontSize: "15px" }} onClick={()=> navigate('/attendance') }>Attendance</Dropdown.Item>}
              <Dropdown.Item style={{ fontSize: "15px" }} onClick={()=> navigate('/myorders') }>My Orders</Dropdown.Item>
              <Dropdown.Item style={{ fontSize: "15px" }} onClick={handleLogout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>}
    </nav>
  )
}

export default Navbar