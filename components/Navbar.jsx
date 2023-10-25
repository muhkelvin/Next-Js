import Link from 'next/link';
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo atau Nama Situs */}
        <Link href="/">
          Home
        </Link>

        {/* Menu Navbar */}
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/anime">Anime</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/consume">Consume</Link></li>
        </ul>
      </div>
    </nav>
  );
};

  

