import styles from "../css/Attribution.module.css";

const Attribution: React.FC = () => {
    return(<footer className={styles.attribution}>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
    Coded by <a href="https://devamari.com/" target="_blank" rel="noreferrer">Deva Mari</a>.
  </footer>)
};

export default Attribution;
