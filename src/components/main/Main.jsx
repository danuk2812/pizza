import {useEffect, useState} from 'react';
import "./main.css"

function Main () {
    const [pizzaList, setPizzaList] = useState([]);
    const pizzaData = [
        {
            image:"pizzas/focaccia.jpg",
            name: "Focaccia",
            description: "Bread with italian olive oil and rosemary",
            price: "6",
            soldOut:false
        },
        {
            image:"pizzas/margherita.jpg",
            name: "Pizza Margherita",
            description: "Tomato and mozarella" ,
            price: "10",
            soldOut:false
        },
        {
            image:"pizzas/spinaci.jpg",
            name: "Pizza Spinaci",
            description: "Tomato, mozarella, spinach, and ricotta cheese",
            price: "12",
            soldOut:false
        },
        {
            image:"pizzas/funghi.jpg",
            name: "Pizza Funghi",
            description: "Tomato, mozarella, mushrooms, and onion",
            price: "12",
            soldOut:false
        },
        {
            image:"pizzas/salamino.jpg",
            name: "Pizza Salamino",
            description: "Tomato, mozarella, and pepperoni.",
            soldOut:true
        },
        {
            image:"pizzas/prosciutto.jpg",
            name: "Pizza Prosciutto",
            description: "Tomato, mozarella, ham, aragula, and burrata cheese",
            price: "18",
            soldOut:false
        }
    ];
    useEffect(() => {
        setPizzaList(pizzaData);
    }, []);
    function renderItems(arr) {
        return arr.map((item, i) => (
            <div key={i} className={`pizza_item ${item.soldOut ? 'sold_out' : ''}`}>
                <img src={item.image} alt={item.name} className="pizza_img" />
                <div className='pizza_info'>
                    <div className="pizza_name"><h3>{item.name}</h3></div>
                    <div className="pizza-description"><p>{item.description}</p></div>
                    <div className="pizza_price">{item.price}</div>
                    {item.soldOut && <span className="sold_out_text">SOLD OUT</span>}
                </div>
            </div>
        ));
    }
    const items = renderItems(pizzaList);
    return (
        <div className="pizzas">
            {items}
        </div>
    );
}

export default Main;
