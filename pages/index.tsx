import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [showGif, setShowGif] = useState(false);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Fim do Seminário PWA!</h1>

        <p className={styles.description}>Obrigado pela atenção!</p>

        <div className={styles.grid}>
          <a className={styles.button} onClick={() => setShowGif(!showGif)}>
            <p style={{fontSize: 20}}>Gif</p>
          </a>
        </div>
        {showGif && (
          <>
            <div
              style={{
                width: "100%",
                height: "0",
                paddingBottom: "56%",
                position: "relative",
              }}
            >
              <img
                src="https://media3.giphy.com/media/gG6OcTSRWaSis/giphy.gif?cid=790b7611b9ad38c5ecfe2903b5d2f5007e0cc7963db92632&rid=giphy.gif&ct=g"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                className="giphy-embed"
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
}
