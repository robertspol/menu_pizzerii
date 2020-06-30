// import React from 'react';
// import Header from './Header';
// import ListOfProducts from './ListOfProducts';
// import './style.css';

class App extends React.Component {
    state = {
        offer: [
            { id: 1, name: "margherita", price: 18, amount: 0, active: false },
            { id: 2, name: "prosciutto", price: 20, amount: 0, active: false },
            { id: 3, name: "prataiolo", price: 30, amount: 0, active: false, },
            { id: 4, name: "salame", price: 25, amount: 0, active: false, },
            { id: 5, name: "cacciatore", price: 22, amount: 0, active: false, },
            { id: 6, name: "diavolo", price: 28, amount: 0, active: false },
            { id: 7, name: "spinace", price: 26, amount: 0, active: false },
            { id: 8, name: "parma", price: 31, amount: 0, active: false },
            { id: 9, name: "sok pomarańczowy", amount: 0, price: 5, active: false },
            { id: 10, name: "kawa", price: 5, amount: 0, active: false }
        ],
        toPay: 0,
    }

    handleClick = id => {
        const chosen = this.state.offer.map(item => {
            if (id === item.id) {
                item.active = true;
                item.amount += 1;
                this.state.toPay = this.state.toPay + item.price;
            }
            return item;
        })
        this.setState({
            offer: chosen,
        })
    }

    handleDelete = id => {
        const chosen = this.state.offer.map(item => {
            if (id === item.id && item.amount > 0) {
                item.amount -= 1;
                this.state.toPay = this.state.toPay - item.price;
            }
            if (item.amount === 0) {
                item.active = false;
            }
            return item;
        })
        this.setState({
            offer: chosen,
        })
    }

    handleReset = () => {
        const cancellation = this.state.offer.map(item => {
            item.active = false;
            item.amount = 0;
            this.state.toPay = 0;
            return item;
        })

        this.setState({
            offer: cancellation,
        })
    }

    handleOrder = () => {
        alert("Jesteś pewny, że chcesz złożyć zamówienie?")
    }

    render() {
        return (
            <>
                <Header offer={this.state.offer} toPay={this.state.toPay}></Header>
                <ListOfProducts click={this.handleClick} clickDeleteItem={this.handleDelete} offer={this.state.offer}></ListOfProducts>
                <button className="cancellation" onClick={this.handleReset}>Anuluj zamówienie</button>
                <button onClick={this.handleOrder}>Zamawiam!</button>
            </>
        )
    }
}

// export default App;