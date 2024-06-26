import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../itemContext";
// import { useContext } from "react";
// import { totalContext } from "../totalContext";

function Navbar() {

  // const {item,total} = useContext(itemContext);  
  const {item , total , handleReset,toggleCart} = useValue();
  // const {total} = useContext(totalContext)
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonsWrapper}>
      <button className={styles.button} onClick={toggleCart}>Cart</button>
        <button className={styles.button} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
