import { useEffect, useState } from "react";

const useCart = () => {
    const [cart, setCart] = useState([]);

    const data = JSON.parse(localStorage.getItem("cart"));

    useEffect(() => {
        fetch("http://localhost:5000/allProducts")
            .then((res) => res.json())
            .then((data) => {
                handleSubtotal(data);
            });
    }, []);

    const handleSubtotal = (products) => {
        const cartItems = products.filter((product) => data[product._id]);
        const newCart = cartItems.map((item) => {
            item.quantity = data[item._id];
            return item;
        });
        // console.log(newCart);
        setCart(newCart);
    };
    return { cart };
};

export default useCart;
