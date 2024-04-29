import React from "react";
import styles from "../styles/ItemCard.module.css";
import { itemContext, useValue } from "../itemContext";
// import { useContext } from "react";
// import { totalContext } from "../totalContext";

function ItemCard({id , name, price }) {

  // const value = useContext(itemContext);
  const {handleAdd,handleRemove}  = useValue();
  // const {item,setItem} = useContext(itemContext);
  // const {total,setTotal} = useContext(totalContext);

  // const handleAdd = () => {
  //     setTotal(total+price);
  //     // setItem((prev)=>prev+=1);
  //     setItem(item+1);
  // };

  // const handleRemove = () => {
  //     if(total>0) setTotal((prev)=>prev-=price);

  //     // setTotal((prev)=>{
  //     //   if(prev>=price) return prev-=price;
  //     //   else return prev=0;
  //     // });
    
  //     setItem((prev)=>{
  //       if(prev>0) return prev-=1;
  //       else return prev=0;
  //     });
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({id,name,price})}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
