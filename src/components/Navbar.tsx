import Image from "next/image";
import React from "react";
import { FunctionComponent, ReactElement } from "react";
import images from "../../public/images";
import styles from '../styles/navbar.module.scss';

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = ():ReactElement => {
    return ( 
    <nav className={`${styles.navbar} ${styles.container}`}>
        <div className={styles.navbar__logo}>
            <div className={styles.logoImage}>
                <Image src={images.logo} alt='Logo' />
            </div>
            <p className={styles.name}>Ticketwave</p>
        </div>
        <div className={styles.navbar__button}>
            <button>Get early access</button>
        </div>
    </nav> 
    );
}
 
export default Navbar;