import React, { useState } from "react";
import data from "./data/data.json";
import styles from "./css/Slider.module.css";
import prev from "./assets/icon-prev.svg";
import next from "./assets/icon-next.svg";
import Attribution from "./components/Attribution";

function App() {
  const [image, setImage] = useState("");
  const [person, setPerson] = useState(0);
  import(`./assets/${data[person].img}`).then((image) =>
    setImage(image.default)
  );

  const nextClickHandler = () => {
    if (person === 1) {
      setPerson(0);
    } else {
      setPerson((prevState) => {
        return prevState + 1;
      });
    }
  };
  const prevClickHandler = () => {
    if (person === 0) {
      setPerson(1);
    } else {
      setPerson((prevState) => {
        return prevState - 1;
      });
    }
  };

  return (
    <div>
      <main className={styles.slider}>
        <div className={styles["img-buttons"]}>
          <img
            className={styles["profile-img"]}
            src={image}
            alt={data[person].name}
          />
          <div className={styles["slider-buttons"]}>
            <img src={prev} alt="previous" onClick={prevClickHandler} />
            <img src={next} alt="next" onClick={nextClickHandler} />
          </div>
        </div>
        <p className={styles.quote}>
          <i>"</i> {data[person].quote} <i>"</i>
        </p>
        <p className={styles.name}>{data[person].name}</p>
        <p className={styles.title}>{data[person].title}</p>
      </main>
      <Attribution />
    </div>
  );
}

export default App;
