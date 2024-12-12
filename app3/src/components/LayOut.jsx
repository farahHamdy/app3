import React from 'react'

import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function LayOut() {
  return (
      <div>
        <Nav />
          {/* changes */}
          <Outlet />
      </div>
  );
}
