import { createContext, useState , useContext } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

// Creating a Custom Hook-->>
function useValue(){
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext(props){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart , setShowCart] = useState(false);
    const [cart , setCart] = useState([]);

    const handleAdd = (prod) => {
        
        const index = cart.findIndex((i)=>i.id==prod.id);
        if(index===-1)
        {
            setCart([...cart,{...prod,qty:1}]);
        } 
        else {
            cart[index].qty++;
            setCart(cart);
        }
        setTotal(total+prod.price);
        setItem(item+1);

        console.log(cart);
    };
  
    const handleRemove = (id) => {
        const index = cart.findIndex((i)=>i.id===id);
        if(index!==-1){
            cart[index].qty--;
            setItem(item-1);
            setTotal(total-cart[index].price);
            // If qty becomes 0...remove it from cart permanently.
            if(cart[index].qty==0) cart.splice(index,1);
        }
        setCart(cart);
        // if(total>=price) setTotal((prev)=>prev-=price);
        // setItem((prev)=>{
        //   if(prev>0) return prev-=1;
        //   else return prev=0;
        // });
    };

    const handleReset = () => {
        setTotal(0);
        setItem(0);
        setCart([]);
    };

    const toggleCart = () =>{
        setShowCart(!showCart);
    }

    return (
        <itemContext.Provider value={{total,item,handleAdd,handleRemove,handleReset,toggleCart,cart}}>
            {showCart && <CartModal />}
            {props.children}
        </itemContext.Provider>
    )
}

export {itemContext,useValue};
export default CustomItemContext;