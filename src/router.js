import { useState } from "react";
import PizzaList from "./components/pizzaList";
import Layout from "./components/layout";
import Order from "./components/order";
import Home from "./components/home";

function Router() {
    const [route, setRoute] = useState("home");
    const [order, setOrder] = useState([]);
    const router = {
        pizzasList: <PizzaList addPizza={setOrder} order={order} />,
        order: <Order order={order} removePizza={setOrder} />,
        home: <Home />,
    };

    return (
        <Layout setRoute={setRoute} route={route}>
            {router[route]}
        </Layout>
    );
}

export default Router;
