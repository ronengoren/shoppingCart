
const saveToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const getFromLocalStorage = () => {
    const emptyCart = { items: []}
    const cart = JSON.parse(localStorage.getItem('cart'))
    return cart || emptyCart;
}

export const fetch = async () => getFromLocalStorage();

export const addToCart = async (productId, quantity = 0) => {
    const cart = await fetch();
    const exists = cart.items.findIndex(item => item.productId === productId) > -1;

    if (exists) {
        throw { message: 'item already exists'};
    }
    const newItem = { productId, quantity};
    const newCart = {
        ...cart,
        items: [
            ...cart.items,
            newItem,
        ],

    };
    saveToLocalStorage(newCart);

    return newCart;
}

// addToCart('599598ac9040faa901d2bc76', 5)

console.log('cart', getFromLocalStorage())