import Link from "next/link";
import NavLink from "./navlink";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        CertRanker
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink href="/signout">Signout</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
