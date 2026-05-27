import styles from './Card.module.css'

const Card = ({nome, img, local, clima, estacao}) => {
    return (
        <div className={styles.cardContainer}>
            <h2 className={styles.nome} >{nome}</h2>
            <img className={styles.img} src={img}/>
            <div className={styles.infosContainer}>
                <h3 className={styles.infos}>Estação: {estacao}</h3>
                <h3 className={styles.infos}>Clima: {clima}</h3>
                <h3 className={styles.infos}>Local: {local}</h3>
            </div>
        </div>
    )
}

export default Card