import LinkGenerico from '../Link/LinkGenerico'
import styles from './Menu.module.css'

const Menu = () => {
    return(
        <header className={styles.cabecalho}>
            <nav className={styles.menuCabecalho}>
                <h1 className={styles.logo}>Fish's Valley</h1>
                <div className={styles.linksContainer}>
                    <LinkGenerico Nome="Como pescar?" Destino="/"/>
                    <LinkGenerico Nome="Peixes Lendários" Destino="/lendarios"/>
                    <LinkGenerico Nome="Localizações" Destino="/localizacoes"/>
                </div>
            </nav>
        </header>
    )
}

export default Menu