import Main from '../../components/Main/Main'
import styles from './Info.module.css'

const Info = () => {
    return (
        <div className={styles.titulo}>
            <Main titulo="Como pescar?">
                <div className={styles.conteudoPesca}>
                    <h2>Guia Básico do Pescador 🎣</h2>
                    <p>Pescar em Stardew Valley exige paciência e sincronia. Siga os passos abaixo para dominar as águas:</p>
                    
                    <ol>
                        <li><strong>Arremesse a linha:</strong> Vá até a beira da água (mar, rio ou lago) com a vara equipada. Segure o botão de ação e solte quando a barra de força estiver cheia para arremessar mais longe.</li>
                        <li><strong>Aguarde a fisgada:</strong> Fique atento! Quando ouvir um som de alerta e aparecer uma exclamação (❗) na cabeça do seu personagem, aperte o botão de ação imediatamente.</li>
                        <li><strong>O Mini-jogo:</strong> Uma barra vertical vai aparecer. O seu objetivo é manter o ícone do peixe dentro do retângulo verde.</li>
                        <li><strong>Controle a barra verde:</strong> Clique repetidamente (ou segure e solte) o botão de ação para fazer a barra verde subir ou descer. Se o peixe ficar fora dela, a barra de progresso na direita vai cair.</li>
                        <li><strong>Capture o peixe:</strong> Assim que a barra de progresso do lado direito encher completamente até o topo, você pegará o peixe!</li>
                    </ol>
                    <blockquote>
                        💡 <strong>Dica de ouro:</strong> Dias chuvosos são perfeitos para encontrar peixes raros. Se o mini-jogo estiver muito difícil no começo, compre a <em>Vara de Treinamento</em> na loja do Willy por 25 ouros; ela aumenta o tamanho da sua barra verde!
                    </blockquote>
                </div>
            </Main>
        </div>
    )
}

export default Info