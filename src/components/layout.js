import React from "react";

export default function Layout({ children, setRoute, route }) {
    const links = [
        ["pizzasList", "All Pizzas"],
        ["order", "Order"],
        ["home", "Home"],
    ];

    return (
        <div className="flex flex-col justify-between">
            <div className="flex justify-around cursor-pointer h-20 items-center border-b-8">
                {links.map((link) => (
                    <p
                        key={link[0]}
                        className={route === link[0] ? "text-blue-800" : null}
                        onClick={() => setRoute(link[0])}
                    >
                        {link[1]}
                    </p>
                ))}
            </div>
            {children}
        </div>
    );
}
