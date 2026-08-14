import React from 'react'

export default function Navbar() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <a href='/' >
        LOGO
      </a>

      <nav>
        <ul style={{ display: "flex", gap: 40 }}>
          <li>
            <a href="">
              Home
            </a>
          </li>
          <li>
            <a href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
