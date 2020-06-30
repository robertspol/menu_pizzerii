// import React from 'react';
// import Item from './Item';
// import './style.css';

const ListOfProducts = props => {

    const items = props.offer.map(item => (
        <Item
            key={item.id}
            id={item.id}
            name={item.name}
            click={props.click}
            clickDeleteItem={props.clickDeleteItem}
            price={item.price}
            amount={item.amount}
            active={item.active}
        />
    ))

    return (
        <div className="list">
            <h1>Twoje zamówienie:</h1>
            <ul>
                {items}
            </ul>
        </div>
    )
}

// export default ListOfProducts;