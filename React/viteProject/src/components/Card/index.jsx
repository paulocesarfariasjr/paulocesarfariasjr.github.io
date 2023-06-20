import posterImg from "../../assets/starwars.jpg"
import styles from "./styles.module.css"

export default function Card() {
  return (
    <div className={styles.container}>

       <img src={posterImg} alt="" className={styles.poster} />

       <div>

        <h2 className={styles.title}>Pôster: Filme do Star Wars </h2>
        <p className={styles.text}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
        <button className={styles.button}>Comprar Agora</button>
       </div>


    </div>
  )
}