import React, {useState} from 'react';
import data from "./data/data.json";
import styles from "./css/Slider.module.css";

function App() {
  const [image, setImage] = useState("");
  const [person, setPerson] = useState(0);
  import(`./assets/${data[person].img}`).then((image) =>
    setImage(image.default)
  );


  const nextClickHandler = () =>{
    if(person === 1){
      setPerson(0);
    }else{
      setPerson((prevState) => {
        return (prevState + 1);
      });
    }
    const prevClickHandler = () =>{
      if(person === 0){
        setPerson(1);
      }else{
        setPerson((prevState) => {
          return (prevState - 1);
        });
      }
    }
  }



  return (
    <div>
      <img src={image} alt={data[person].name} />
      <div>Sliderbuttons</div>
      <p className={styles.quote}>" {data[person].quote} "</p>
      <p className={styles.name}>{data[person].name}</p>
      <p className={styles.title}>{data[person].title}</p>
    </div>
  );
}

export default App;
