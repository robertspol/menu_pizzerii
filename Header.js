// import React from 'react';
// import './style.css';

const Header = props => {
    let number = 0;
    const selectedProduct = props.offer.filter(item => item.amount);
    selectedProduct.forEach(item => number += item.amount);
    const { toPay } = props;

    return (
        <>
            <header>
                <div className="logo">Pizzeria u <span>R</span>oberta</div>
                <p>Ilość zamówionych produktów: <span>{number}</span></p>
                <p>Przy kwocie minimum 100 zł dajemy upust 20 zł!</p>
                <p className="inline">Do zapłaty: {number ? <span>{toPay} zł</span> : <span>niczego nie zamówiłeś...</span>}</p>
                <span>{toPay >= 100 ? <span>- 20 zł = {toPay - 20} zł</span> : null}</span>
            </header>
        </>
    )
}

// export default Header;