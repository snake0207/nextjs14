"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" || path.includes("/movies") ? "🔥" : ""}
        </li>
        <li>
          <Link href={{ pathname: "/about" }}>About Us</Link>
          {path === "/about" ? "🙎‍♀️" : ""}
        </li>
      </ul>
    </nav>
  );
}
