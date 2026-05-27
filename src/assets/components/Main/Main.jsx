import styles from './Main.module.css'

const Main = ({titulo, children}) => {
    return (
        <main className={styles.main}>
            <div className={styles.tituloContainer}>
                <img className={styles.placa} src="/placa.png" alt="Imagem de uma placa vazia" />
                <h1 className={styles.titulo}>{titulo}</h1>
            </div>

            <div className={styles.conteudo}>
                {children}
            </div>
        </main>
    )
}

export default Main