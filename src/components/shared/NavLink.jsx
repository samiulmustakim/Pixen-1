'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ children, href }) => {
    const pathName = usePathname()

    const isActive = href === pathName
    return (
        <div>
            <Link className={`${isActive && "border-b-2 border-green-600"}`}  href={href}>{children}</Link>
        </div>
    );
};

export default NavLink;