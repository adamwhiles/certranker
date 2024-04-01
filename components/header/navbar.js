import Link from "next/link";
import NavLink from "./navlink";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo + " text-white"} href="/">
        CertRanker
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/signin">Sign-in</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
