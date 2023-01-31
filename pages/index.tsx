import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Fim do Seminário PWA!
        </h1>

        <p className={styles.description}>
          Obrigado pela atenção!
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h3>Gif</h3>
          </a>
        </div>
      </main>
    </div>
  )
}
