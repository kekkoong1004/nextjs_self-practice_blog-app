import Link from 'next/link';
import Logo from './logo';
import styles from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={'/'}>
          <Logo />
        </Link>
      </div>

      <nav className={styles.mainNavigation}>
        <ul className={styles.navbar}>
          <li>
            <Link href={'/posts'}>Posts</Link>
          </li>
          <li>
            <Link href={'/my-skills'}>Skills</Link>
          </li>

          <li>
            <Link href={'/contact'}>Contact me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
