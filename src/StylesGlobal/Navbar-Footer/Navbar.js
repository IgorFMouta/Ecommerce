// import {Link} from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../img/logo.png';

/*
Barra de navegação
Navbar "simples" está parcialmente componentizada

*/
function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                {/* <Link to="/"> */}
                  <img src={logo} alt="Cos" width="60px" height="60px"  />
                {/* </Link> */}
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            {/* <Link to="/">Home</Link> */}
                        </li>
                        <li className={styles.item}>
                            {/* <Link to="/cadastro">Cadastro</Link> */}
                        </li>
                        <li className={styles.item}>
                            {/* <Link to="/company">Empresa</Link> */}
                        </li>    
                        <li className={styles.item}>
                            {/* <Link to="/contact">Contato</Link> */}
                        </li>       
                    </ul>
            </Container>
        </nav>
    )

}

export default Navbar;