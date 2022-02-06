import { useEffect, useState } from "react";

const useCart = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    const data = JSON.parse(localStorage.getItem("cart"));

    useEffect(() => {
        fetch("http://localhost:5000/allProducts")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                handleSubtotal();
            });
    }, []);

    const handleSubtotal = () => {
        const cartItems = products.filter((product) => data[product._id]);
        const newCart = cartItems.map((item) => {
            item.quantity = data[item._id];
            return item;
        });
        // console.log(newCart);
        setCart(newCart);
    };

    const total = parseFloat(
        cart.reduce(
            (previous, current) => previous + current.price * current.quantity,
            0
        )
    ).toFixed(2);

    return { cart, total };
};

export default useCart;
