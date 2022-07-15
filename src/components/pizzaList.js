import { useEffect, useState } from "react";
import { API } from "../utils";
import CardComponent from "./cardItems/cardComponent";
import BasiqButton from "./basiqButton";
import Picture from "./cardItems/picture";
import Description from "./cardItems/description";
import Name from "./cardItems/name";

export default function PizzaList({ addPizza, selectedPizza }) {
    const [allPizzas, setAllPizzas] = useState([]);

    function addPizzaToOrder(pizza) {
        return addPizza((prevState) => {
            return [...prevState, pizza];
        });
    }

    useEffect(() => {
        API.get("/pizzas").then((res) => setAllPizzas(res.data));
    }, []);

    return (
        <div>
            {allPizzas.map((pizza, i) => (
                <CardComponent key={i}>
                    <div className="flex flex-col justify-between items-center">
                        <div>
                            <Name name={pizza.name} />
                            <Description description={pizza.description} />
                        </div>
                        <BasiqButton
                            text={"add"}
                            setState={() => addPizzaToOrder(pizza)}
                            item={selectedPizza}
                        />
                    </div>
                    <Picture picture={pizza.img} />
                </CardComponent>
            ))}
        </div>
    );
}
