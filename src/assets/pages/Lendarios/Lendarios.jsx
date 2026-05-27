import Main from '../../components/Main/Main'
import Card from '../../components/Card/Card'
import styles from "./Lendarios.module.css"

const Lendarios = () => {
    return (
        <Main titulo="Os peixes lendarios">
            <div className={styles.containerCards}>
                <Card nome="Peixe Lenda"
                    img="/imagens/lenda.png"
                    estacao="Primavera"
                    clima="Chuvoso"
                    local="Lago da Montanha"
                />
                <Card nome="Peixe Gelo"
                    img="/imagens/peixegelo.png"
                    estacao="Inverno"
                    clima="Qualquer"
                    local="Floresta Cinzaseiva"
                />
                <Card nome="Peixe-Carmim"
                    img="/imagens/carmim.png"
                    estacao="Verão"
                    clima="Qualquer"
                    local="Pier leste da praia"
                />
                <Card nome="Tamboril"
                    img="/imagens/tamboril.png"
                    estacao="Outono"
                    clima="Qualquer"
                    local="Norte do Mercado Joja"
                />
                <Card nome="Carpa Mutante"
                    img="/imagens/mutante.png"
                    estacao="Todas"
                    clima="Qualquer"
                    local="Esgotos da Vila"
                />
            </div>
        </Main>
    )
}

export default Lendarios