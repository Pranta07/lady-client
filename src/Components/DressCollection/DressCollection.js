import React, { useState } from "react";

const PopularProducts = [
    {
        imgUrl: "https://i.ibb.co/0fWRMGf/jonathan-borba-Mkq-Vie-Spi5-U-unsplash.jpg",
        name: "FLARE STRAP DRESS",
        price: "19.6",
    },
    {
        imgUrl: "https://i.ibb.co/zsJV92D/aiony-haust-IXYxq-P4zejo-unsplash.jpg",
        name: "ABSTRACT DOOTED DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/8M6wWCd/tamara-bellis-21fa847g-ZBs-unsplash.jpg",
        name: "CHIFON & FLORAL DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/WWVtBMp/oleg-ivanov-sg-g-Rhb-YXhc-unsplash.jpg",
        name: "CAMI STRAP DRESS",
        price: "23.5",
    },
    {
        imgUrl: "https://i.ibb.co/17jgrXW/tamara-bellis-Rqp-HXWNHep8-unsplash.jpg",
        name: "FLARE STRAP DRESS",
        price: "19.6",
    },
    {
        imgUrl: "https://i.ibb.co/PzxPXPW/tamara-bellis-3t6rfs-Ca-Wi-Q-unsplash.jpg",
        name: "ABSTRACT DOOTED DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/DDXsh69/dmitry-vechorko-y-Xh-J-e-QK0m-E-unsplash.jpg",
        name: "CHIFON & FLORAL DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/cDnQrFb/valerie-elash-Rfo-ISVd-KM4-U-unsplash.jpg",
        name: "CAMI STRAP DRESS",
        price: "23.5",
    },
];

const RecentProducts = [
    {
        imgUrl: "https://i.ibb.co/17jgrXW/tamara-bellis-Rqp-HXWNHep8-unsplash.jpg",
        name: "FLARE STRAP DRESS",
        price: "19.6",
    },
    {
        imgUrl: "https://i.ibb.co/PzxPXPW/tamara-bellis-3t6rfs-Ca-Wi-Q-unsplash.jpg",
        name: "ABSTRACT DOOTED DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/DDXsh69/dmitry-vechorko-y-Xh-J-e-QK0m-E-unsplash.jpg",
        name: "CHIFON & FLORAL DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/cDnQrFb/valerie-elash-Rfo-ISVd-KM4-U-unsplash.jpg",
        name: "CAMI STRAP DRESS",
        price: "23.5",
    },
    {
        imgUrl: "https://i.ibb.co/0fWRMGf/jonathan-borba-Mkq-Vie-Spi5-U-unsplash.jpg",
        name: "FLARE STRAP DRESS",
        price: "19.6",
    },
    {
        imgUrl: "https://i.ibb.co/zsJV92D/aiony-haust-IXYxq-P4zejo-unsplash.jpg",
        name: "ABSTRACT DOOTED DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/8M6wWCd/tamara-bellis-21fa847g-ZBs-unsplash.jpg",
        name: "CHIFON & FLORAL DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/WWVtBMp/oleg-ivanov-sg-g-Rhb-YXhc-unsplash.jpg",
        name: "CAMI STRAP DRESS",
        price: "23.5",
    },
];

const RandomProducts = [
    {
        imgUrl: "https://i.ibb.co/DDXsh69/dmitry-vechorko-y-Xh-J-e-QK0m-E-unsplash.jpg",
        name: "CHIFON & FLORAL DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/cDnQrFb/valerie-elash-Rfo-ISVd-KM4-U-unsplash.jpg",
        name: "CAMI STRAP DRESS",
        price: "23.5",
    },
    {
        imgUrl: "https://i.ibb.co/8M6wWCd/tamara-bellis-21fa847g-ZBs-unsplash.jpg",
        name: "CHIFON & FLORAL DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/WWVtBMp/oleg-ivanov-sg-g-Rhb-YXhc-unsplash.jpg",
        name: "CAMI STRAP DRESS",
        price: "23.5",
    },
    {
        imgUrl: "https://i.ibb.co/17jgrXW/tamara-bellis-Rqp-HXWNHep8-unsplash.jpg",
        name: "FLARE STRAP DRESS",
        price: "19.6",
    },
    {
        imgUrl: "https://i.ibb.co/PzxPXPW/tamara-bellis-3t6rfs-Ca-Wi-Q-unsplash.jpg",
        name: "ABSTRACT DOOTED DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/0fWRMGf/jonathan-borba-Mkq-Vie-Spi5-U-unsplash.jpg",
        name: "FLARE STRAP DRESS",
        price: "19.6",
    },
    {
        imgUrl: "https://i.ibb.co/zsJV92D/aiony-haust-IXYxq-P4zejo-unsplash.jpg",
        name: "ABSTRACT DOOTED DRESS",
        price: "21.5",
    },
];

const DressCollection = () => {
    const [popular, setPopular] = useState("text-4xl font-bold");
    const [recent, setRecent] = useState("text-2xl font-bold");
    const [random, setRandom] = useState("text-2xl font-bold");

    const [products, setProducts] = useState(PopularProducts);

    const handlePopular = () => {
        setProducts([]);
        setProducts(PopularProducts);
        setPopular("text-4xl font-bold");
        setRecent("text-2xl font-bold");
        setRandom("text-2xl font-bold");
    };
    const handleRecent = () => {
        setProducts([]);
        setProducts(RecentProducts);
        setPopular("text-2xl font-bold");
        setRecent("text-4xl font-bold");
        setRandom("text-2xl font-bold");
    };
    const handleRandom = () => {
        setProducts([]);
        setProducts(RandomProducts);
        setPopular("text-2xl font-bold");
        setRecent("text-2xl font-bold");
        setRandom("text-4xl font-bold");
    };

    return (
        <div className="container mx-auto">
            {/* Heading */}
            <div className="my-3">
                <p className="uppercase py-4 tracking-widest">
                    Dress Collecton
                </p>
                <h1 className="uppercase tracking-widest text-3xl cursor-pointer">
                    <span className={popular} onClick={() => handlePopular()}>
                        Popular
                    </span>
                    {" / "}
                    <span className={recent} onClick={() => handleRecent()}>
                        Recent
                    </span>
                    {" / "}
                    <span className={random} onClick={() => handleRandom()}>
                        Random
                    </span>
                </h1>
                <p className="w-1/5 h-3 bg-yellow-400 my-4 mx-auto"></p>
            </div>

            {/* Products Section */}
            <div className="">
                <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product, index) => (
                            <div key={index} className="group relative product">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none group-hover:scale-110 duration-300">
                                    <img
                                        src={product.imgUrl}
                                        alt=""
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="absolute top-32 left-10 z-20 price">
                                    <button className="bg-black text-yellow-400 tracking-wider px-6 py-3 m-4 hover:bg-gray-900 cursor-pointer">
                                        VIEW DETAILS
                                    </button>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-sm text-gray-700 py-3">
                                        <a href={product.href}>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="text-xl font-medium text-gray-900">
                                        $ {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DressCollection;
