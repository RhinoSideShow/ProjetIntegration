import Link from 'next/link';

import styles from './Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="/">
                        <a>Accueil</a>
                    </Link>
                </li>
                <li>
                    <Link href="/add-post">
                        <a>nouvelle entrée</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}