import styles from './Container.module.css'

/*
Esse pacote contém algumas funções que são muito repetidas em um layout

Componentes que vão ser comum em um layout de aplicação

Responsável por fazer mudar a disposição nos itens no container

*/


function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container