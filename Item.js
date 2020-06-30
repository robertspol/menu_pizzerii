// import React from 'react';
// import './style.css';

const Item = props =>
    <li>
        <div id="li" className={props.active ? "active" : null}>
            {props.name} {props.amount ? <span>, {props.amount} {props.amount === 1 ? "raz" : "razy"}</span> : null} <p>{props.price} zł</p>
        </div>
        <button className="order" onClick={() => props.click(props.id)}>dodaj</button>
        <button className="deleteItem" onClick={() => props.clickDeleteItem(props.id)}>usuń</button>
    </li>

// export default Item;