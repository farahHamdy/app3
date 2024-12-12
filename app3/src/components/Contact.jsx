import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Contact() {
  return (
      <div className="contact_page">
          <div className="contact_Link">
              <NavLink to={""} end>Contact Us Form</NavLink>
              <NavLink to={"Emails"}>Emails</NavLink>
              <NavLink to={"Locations"}>Locations</NavLink>
              <NavLink to={"Phone Number"}>Phone Number</NavLink>
          </div>
          <div className="contact_Text">
              <Outlet />
          </div>
      </div>
  );
}
