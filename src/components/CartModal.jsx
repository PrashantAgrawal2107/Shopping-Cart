import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemContext";

function CartModal() {

    const {total,toggleCart,handleReset,cart} = useValue();


  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggleCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={handleReset}>
        Clear
      </div>
      <div className={styles.itemContainer}>
         {cart.map((i)=>{
             return (
              <div className={styles.cartCard} key={i.id}>
                  <h1>{i.name}</h1>
                  <h3>X {i.qty}</h3>
                  <h3>X {i.qty*i.price}</h3>
                </div>
             )
         })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
