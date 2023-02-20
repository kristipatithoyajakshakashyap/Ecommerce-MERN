import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai";
function UserMenu() {
  return (
    <>
        <div className="text-center">
            <div className="list-group">
                <h4 className='mb-5'>
                  <NavLink to="/dashboard/user" className="navbar-brand">
                    <AiOutlineUser /> Dashboard
                  </NavLink>      
                </h4>
                <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action"> Profile</NavLink>
                <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink>
            </div>
        </div>
    </>
  )
}

export default UserMenu