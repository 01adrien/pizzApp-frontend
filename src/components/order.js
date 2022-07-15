import React from "react";
import CardComponent from "./cardItems/cardComponent";
import Name from "./cardItems/name";
import Picture from "./cardItems/picture";
import BasiqButton from "./basiqButton";

export default function Order({ order, removePizza }) {
    return (
        <>
            {order.length >= 1 ? (
                <div>
                    {order.map((pizza, i) => (
                        <CardComponent key={pizza.name}>
                            <div className="flex flex-col items-center w-[70vw] justify-center">
                                <Name name={pizza.name} />
                                <BasiqButton
                                    text={"Remove"}
                                    setState={() => {
                                        removePizza(
                                            order.filter(
                                                (pizz) => pizz !== pizza
                                            )
                                        );
                                    }}
                                />
                            </div>
                            <Picture picture={pizza.img} />
                        </CardComponent>
                    ))}
                    <BasiqButton text={"Order"} />
                </div>
            ) : (
                <p className="text-2xl text-center mt-36">
                    No pizza here..
                    <br /> Order right now !!
                </p>
            )}
        </>
    );
}
