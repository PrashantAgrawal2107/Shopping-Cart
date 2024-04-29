import './App.css';
// import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';

import CustomItemContext from './itemContext';
// import { totalContext } from './totalContext';


function App() {
  
  return (
        <div className='App'>
          <h2>Shopping Cart</h2>
            {/* <totalContext.Provider value={{total,setTotal}}> */}

              {/* <itemContext.Provider value={{item,setItem,total,setTotal}}> */}
               <CustomItemContext>
                    <Navbar />
                    <Items />
               </CustomItemContext>
              {/* </itemContext.Provider> */}

            {/* </totalContext.Provider> */}
           
        </div>
  );
}
export default App;
