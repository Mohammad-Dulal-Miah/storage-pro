import React from 'react';
import { addToDb, removeToDb } from '../../utilities/database';
import './Cosmetic.css';

const Cosmetic = ({cosmetic}) => {
    const {name , price} = cosmetic;

    const addToCart = (cosmetic)=>{
       addToDb(cosmetic.id);
    }

    const removeToCart = (cosmetic)=>{
        removeToDb(cosmetic.id);
    }

    return (
        <div className='cosmetic'>
            <h3>Name: {name}</h3>
            <h4>It's only: {price}</h4>
            <button onClick={()=> addToCart(cosmetic)}> Add to Cart </button>
            <button onClick={()=> removeToCart(cosmetic)}>Remove item</button>
        </div>
    );
};

export default Cosmetic;