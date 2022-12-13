const addToDb = (id) =>{

    let shippingCart = checkCart();

    if(id in shippingCart){
        
        let quantity = shippingCart[id]+1;
        shippingCart[id] = quantity;
    }
    else{
        shippingCart[id] = 1;
    }

    localStorage.setItem("shipping" , JSON.stringify(shippingCart));
}


const removeToDb = (id) =>{

    let shippingCart = checkCart();

    if(id in shippingCart){
        delete shippingCart[id];
    }

    localStorage.setItem("shipping" , JSON.stringify(shippingCart));

}


const checkCart = ()=>{

    let shippingCart = {};

    const storedCart = localStorage.getItem("shipping");

    if(storedCart){
        shippingCart = JSON.parse(storedCart);
    }

    return shippingCart;
}




export {

    addToDb,
    removeToDb
};