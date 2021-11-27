import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <Link to="/other"> 其他页面</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}

export default Layout
