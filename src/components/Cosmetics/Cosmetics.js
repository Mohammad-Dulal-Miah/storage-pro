import React, {useState, useEffect } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';

const Cosmetics = () => {

   const [cosmetics , setCosmetics] = useState([]);

   useEffect(()=>{

    fetch('data.json')
    .then(res=> res.json())
    .then(data=>setCosmetics(data))

   },[]);

    return (
       <div>
          <h1>Total cosmetics: {cosmetics.length}</h1>
         <div className='cosmetics-container'>
          
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)
            }
        </div>
       </div>
    );
};

export default Cosmetics;