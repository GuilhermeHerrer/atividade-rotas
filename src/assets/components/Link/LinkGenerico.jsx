import { Link, useLocation } from "react-router"
import styles from './LinkGenerico.module.css'

const LinkGenerico = ({Nome, Destino}) => {
    
    let localizacao = useLocation()
    
    return(
        <Link 
            className={`${styles.link} 
            ${localizacao.pathname === Destino ? styles.linkDestacado : ""}`} 
            to={Destino}>
                {Nome}
        </Link>
    )
}

export default LinkGenerico