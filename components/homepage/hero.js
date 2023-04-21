import Image from 'next/image';
import styles from './hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/webdev-profile.webp"
          alt="Profile image"
          width={200}
          height={300}
        />
      </div>
      <div className={styles.heroText}>
        <h3>
          Hi, my name is Shawn and I am a web developer specialized in ReactJS,
          NextJS, and NodeJS
        </h3>
      </div>
    </section>
  );
}

export default Hero;
