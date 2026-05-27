import Main from '../../components/Main/Main'
import styles from './Mapa.module.css'

const Mapa = () => {
    return (
        <Main titulo="Mapa">
            <div className={styles.mapaContainer}>
                <img className={styles.mapa} src="/imagens/mapa.png"/>
                
                <div className={styles.infosContainer}>
                    <h2>Localizações</h2>
                    <h3>Lago da Montanha</h3>
                    <p>Fica ao nordeste do mapa, sua principal estação de pesca é o <strong>Outono</strong></p>
                    <h3>Floresta Cinzaseiva</h3>
                    <p>Fica ao sul do mapa, sua principal estação de pesca é o <strong>Inverno</strong></p>
                    <h3>Praia</h3>
                    <p>Fica ao sudeste do mapa, sua principal estação de pesca é o <strong>Verão e Primavera</strong></p>
                </div>
            </div>
        </Main>
    )
}

export default Mapa