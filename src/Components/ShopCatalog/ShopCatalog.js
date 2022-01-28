import React from "react";
import DressGallery from "../DressGallery/DressGallery";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const allProducts = [
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

const sortItems = [
    { name: "Best Sellers", href: "" },
    { name: "Lower Prices", href: "" },
    { name: "Higher Prices", href: "" },
    { name: "Most Popular", href: "" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const ShopCatalog = () => {
    return (
        <>
            <div className="container mx-auto">
                <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                    Dress Collection /{" "}
                    <span className=" bg-black text-yellow-400 p-2">
                        Shop Catalog
                    </span>
                </p>
            </div>
            <div className="bg-white py-10">
                <div className="container mx-auto px-10 flex justify-between">
                    <div>
                        <h1 className="uppercase tracking-wide text-4xl text-left">
                            Shop Catalog
                        </h1>
                    </div>
                    {/* Sort By Dropdown */}
                    <Menu as="div" className="ml-3 relative">
                        <div>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                Sort By
                                <ChevronDownIcon
                                    className="-mr-1 ml-2 h-5 w-5"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute z-40 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                {sortItems.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-700 text-white"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            <DressGallery></DressGallery>
        </>
    );
};

export default ShopCatalog;
