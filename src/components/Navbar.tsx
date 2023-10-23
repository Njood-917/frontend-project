import React from 'react'
import styles from './Navbar.module.css'
import * as data from './links.json'
const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

type Link = {
  label: string
  href: string
}

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['links-container']}>
        {links.map((link: Link) => (
          <div className={styles.link} key={link.label}>
            <a href={link.href}>{link.label}</a>
          </div>
        ))}
        <div className={styles.icons}>🛒 👤</div>
      </div>
    </nav>
  )
}

export default Navbar
