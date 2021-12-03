import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

/*
Footer básico, com poucos componentes, usando os simbolos de
3 redes sociais

*/



function Footer () {
    return (
    <footer className="styles.footer">
        <ul className={styles.social_list}>
            <li>
                <FaFacebook />
            </li>
            <li> 
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin />
            </li>
        </ul>
        <p className={styles.copy_right}>
            <span>Coss</span> &copy; 2021
        </p>
    </footer>
    )
}

export default Footer;