import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Home Services Agency.</h1>
        <p className={styles.desc}>
          We can handle professionally home and office Maintenance, Relocation,
          Shifting, Camera Installation and Cleaning, or Other Handyman
          Services in all over UAE.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brandImage"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/hero.gif"
          alt="brandImage"
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
