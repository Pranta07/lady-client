import { useEffect, useState } from "react";

const useCart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/allProducts")
            .then((res) => res.json())
            .then((data) => handleSubtotal(data))
            .finally(() => setLoading(false));
    }, []);

    const handleSubtotal = (products) => {
        const data = JSON.parse(localStorage.getItem("cart"));
        if (data) {
            const cartItems = products?.filter((product) => data[product._id]);
            const newCart = cartItems?.map((item) => {
                item.quantity = data[item._id];
                return item;
            });
            setCart(newCart);
        }
    };

    const total = parseFloat(
        cart?.reduce(
            (previous, current) => previous + current.price * current.quantity,
            0
        )
    ).toFixed(2);

    return { cart, total, loading };
};

export default useCart;
