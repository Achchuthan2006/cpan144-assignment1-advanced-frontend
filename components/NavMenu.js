"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/tasks", label: "Task Dashboard" },
  { href: "/feedback", label: "Feedback Form" }
];

export default function NavMenu() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((previous) => !previous)}
      >
        {menuOpen ? "Hide Menu" : "Show Menu"}
      </button>
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={pathname === link.href ? "active" : ""}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
