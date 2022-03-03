import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import { useEffect } from "react";

const navigation = [
    { name: "Home", to: "/home", current: true },
    { name: "Shop Catalog", to: "/shopCatalog", current: false },
    { name: "Blogs", to: "/blogs", current: false },
    { name: "Deals", to: "/deals", current: false },
    { name: "About Us", to: "/about", current: false },
    { name: "Contact", to: "/contact", current: false },
];
const userNavigation = [
    { name: "Your Profile", to: "/profile" },
    { name: "Settings", to: "/settings" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Navigation = () => {
    const [admin, setAdmin] = useState(false);
    const { user, loading } = useFirebase();

    useEffect(() => {
        setAdmin(false);
        fetch(`https://ancient-dawn-22893.herokuapp.com/user/${user?.email}`)
            .then((res) => res.json())
            .then((user) => {
                if (user?.role === "admin") {
                    setAdmin(true);
                }
            });
    }, [user?.email]);

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-yellow-400">
                    {({ open }) => (
                        <>
                            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    {/* main navigation */}
                                    <div className="flex items-center">
                                        <div className="hidden lg:block">
                                            <div className="flex items-center space-x-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.to}
                                                    >
                                                        <button
                                                            className={classNames(
                                                                item.current
                                                                    ? "bg-gray-900 text-white"
                                                                    : "text-black hover:bg-gray-900 hover:text-white",
                                                                "px-3 py-2 rounded-md text-sm font-medium"
                                                            )}
                                                            aria-current={
                                                                item.current
                                                                    ? "page"
                                                                    : undefined
                                                            }
                                                        >
                                                            {item.name}
                                                        </button>
                                                    </Link>
                                                ))}
                                                {!loading && user.email && (
                                                    <Link to="/orders">
                                                        <button className="px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-gray-900 hover:text-white">
                                                            My Orders
                                                        </button>
                                                    </Link>
                                                )}
                                                {!loading &&
                                                    user.email &&
                                                    admin && (
                                                        <>
                                                            <Link to="/manageOrders">
                                                                <button className="px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-gray-900 hover:text-white">
                                                                    Manage
                                                                    Orders
                                                                </button>
                                                            </Link>
                                                            <Link to="/manageProducts">
                                                                <button className="px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-gray-900 hover:text-white">
                                                                    Manage
                                                                    Products
                                                                </button>
                                                            </Link>
                                                        </>
                                                    )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* userNavigation */}
                                    <div className="hidden lg:block">
                                        <div className="flex items-center ml-4 md:ml-6">
                                            <button
                                                type="button"
                                                className="p-1 text-gray-400 bg-gray-900 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            >
                                                <span className="sr-only">
                                                    View notifications
                                                </span>
                                                <BellIcon
                                                    className="w-6 h-6"
                                                    aria-hidden="true"
                                                />
                                            </button>

                                            {/* Profile dropdown */}
                                            {(user?.email || user?.uid) && (
                                                <Menu
                                                    as="div"
                                                    className="relative ml-3"
                                                >
                                                    <div>
                                                        <Menu.Button className="flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                            <span className="sr-only">
                                                                Open user menu
                                                            </span>
                                                            {user?.photoURL ? (
                                                                <img
                                                                    className="w-8 h-8 rounded-full"
                                                                    src={
                                                                        user?.photoURL
                                                                    }
                                                                    alt=""
                                                                />
                                                            ) : (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-8 h-8"
                                                                    viewBox="0 0 20 20"
                                                                    fill="gray"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            )}
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
                                                        <Menu.Items className="absolute right-0 z-40 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            {userNavigation.map(
                                                                (item) => (
                                                                    <Menu.Item
                                                                        key={
                                                                            item.name
                                                                        }
                                                                    >
                                                                        {({
                                                                            active,
                                                                        }) => (
                                                                            <Link
                                                                                to={
                                                                                    item.to
                                                                                }
                                                                            >
                                                                                <button
                                                                                    className={classNames(
                                                                                        active
                                                                                            ? "bg-gray-700 text-white"
                                                                                            : "text-gray-700",
                                                                                        "block w-full px-4 py-2 text-sm"
                                                                                    )}
                                                                                >
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </button>
                                                                            </Link>
                                                                        )}
                                                                    </Menu.Item>
                                                                )
                                                            )}
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            )}
                                        </div>
                                    </div>

                                    {/* hamburger */}
                                    <div className="flex -mr-2 lg:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white bg-gray-900 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">
                                                Open main menu
                                            </span>
                                            {open ? (
                                                <XIcon
                                                    className="block w-6 h-6"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <MenuIcon
                                                    className="block w-6 h-6"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="lg:hidden">
                                {/* main navigation */}
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {navigation.map((item) => (
                                        <Link key={item.name} to={item.to}>
                                            <Disclosure.Button
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-black hover:bg-gray-900 hover:text-white",
                                                    "block w-full px-3 py-2 rounded-md text-base font-medium"
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        </Link>
                                    ))}
                                    {user?.email && (
                                        <Link to="/orders">
                                            <Disclosure.Button className="block w-full px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-900 hover:text-white">
                                                My Orders
                                            </Disclosure.Button>
                                        </Link>
                                    )}
                                    {user?.email && admin && (
                                        <>
                                            <Link to="/manageOrders">
                                                <Disclosure.Button className="block w-full px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-900 hover:text-white">
                                                    Manage Orders
                                                </Disclosure.Button>
                                            </Link>
                                            <Link to="/manageProducts">
                                                <Disclosure.Button className="block w-full px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-900 hover:text-white">
                                                    Manage Products
                                                </Disclosure.Button>
                                            </Link>
                                        </>
                                    )}
                                </div>

                                {/* user Navigation */}
                                {user?.email && (
                                    <div className="pt-4 pb-3 border-t border-gray-700">
                                        <div className="flex items-center px-5">
                                            {user?.photoURL ? (
                                                <div className="flex-shrink-0 border-2 rounded-full">
                                                    <img
                                                        className="w-10 h-10 rounded-full"
                                                        src={user?.photoURL}
                                                        alt=""
                                                    />
                                                </div>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-10 h-10"
                                                    viewBox="0 0 20 20"
                                                    fill="white"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                            <div className="p-2 ml-3 text-white bg-gray-900 border-2 rounded-md">
                                                <div className="text-base font-medium leading-none">
                                                    {user?.displayName}
                                                </div>
                                                <div className="text-sm font-medium leading-none">
                                                    {user?.email}
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 border-2 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            >
                                                <span className="sr-only">
                                                    View notifications
                                                </span>
                                                <BellIcon
                                                    className="w-6 h-6"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                        <div className="px-2 mt-3 space-y-1">
                                            {userNavigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.to}
                                                >
                                                    <Disclosure.Button className="block w-full px-3 py-2 text-base font-medium text-black rounded-md hover:text-white hover:bg-gray-900">
                                                        {item.name}
                                                    </Disclosure.Button>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    );
};

export default Navigation;
