import { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const coffees = [
    {
      name: "Perspiciatis",
      image: "/images/coffee1.jpg",
    },
    {
      name: "Voluptatem",
      image: "/images/coffee2.jpg",
    },
    {
      name: "Explicabo",
      image: "/images/coffee3.jpg",
    },
    {
      name: "Rchitecto",
      image: "/images/coffee4.jpg",
    },
    {
      name: " Beatae",
      image: "/images/coffee5.jpg",
    },
    {
      name: " Vitae",
      image: "/images/coffee6.jpg",
    },
    {
      name: "Inventore",
      image: "/images/coffee7.jpg",
    },
    {
      name: "Veritatis",
      image: "/images/coffee8.jpg",
    },
    {
      name: "Accusantium",
      image: "/images/coffee9.jpg",
    },
  ];

  return (
    <div className={styles.main}>
      <main>
        <nav>
          <h1>Dev'Coffee</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div className={styles.container}>
          {coffees.map(({ name, image }) => (
            <div className={styles.card}>
              <Image
                className={styles["card--avatar"]}
                src={image}
                width={240}
                height={160}
                alt={name}
              />
              <h1 className={styles["card--title"]}>{name}</h1>
              <a className={styles["card--link"]} href="#">
                Taste
              </a>
            </div>
          ))}
        </div>
      </main>
      <script src="js/app.js"></script>
    </div>
  );
}
