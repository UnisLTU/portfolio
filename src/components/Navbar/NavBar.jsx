import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { RiGithubLine } from 'react-icons/ri'
import styles from './NavBar.module.css'
import { LinksData } from '../../utils/data'

function NavBar() {
    const [isShown, setIsShown] = useState(false)

    return (
        <nav className={styles.navbar_container}>
            <a className={styles.logo} href='/'>
                Ut.
            </a>
            <button type='button' className={styles.menu} onClick={() => setIsShown(!isShown)}>
                Menu.
            </button>
            <ul className={isShown ? styles.navbar_list : styles.navbar_list_hide}>
                {LinksData.map((link) => (
                    <Link
                        className={styles.nav_buttons}
                        to={link.to}
                        spy
                        smooth
                        offset={link.offset}
                        duration={500}
                        onClick={() => setIsShown(false)}
                    >
                        {link.title}
                    </Link>
                ))}
                <a className={styles.nav_buttons} href='https://github.com/UnisLTU'>
                    <RiGithubLine size={24} />
                    GitHub
                </a>
            </ul>
        </nav>
    )
}

export default NavBar
