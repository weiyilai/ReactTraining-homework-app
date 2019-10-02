import React from 'react'

// 整體最外圍樣式
const listStyle = {
    width: '30rem',
    maxWidth: '80%',
    margin: 'auto'
};
  
// Loaded Accounting 字樣採用 h2
const h2Style = {
    borderBottom: '3px solid #ccc',
    paddingBottom: '1rem'
};
  
// 條列資料用
const ulStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
};
  
// 條列資料用
const liStyle = {
    margin: '1rem 0',
    padding: '0.5rem 1rem',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.26)',
    display: 'flex',
    justifyContent: 'space-between',
};

var numbers = [];

const listItems = numbers.map((number) =>
  <li>{number}</li>
);

class inputProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '', amount: 0 };
    }    

    nameChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    amountChangeHandler = (event) => {
        this.setState({ amount: event.target.value });
    }

    submitHandle = (event) => {
        numbers.push(this.state.username + ' ' + this.state.amount.toString());
        console.log(numbers);
    }

    render () {
        return (
            <form>
                <div style={{
                    border: '1px solid #DDD',
                    padding: '1rem',
                    'border-radius': '5px',
                    'box-shadow': '0 2px 8px rgba(0, 0, 0, 0.26)',
                    width: '30rem',
                    margin: '2rem auto',
                    'max-width': '80%'
                    }}>
                    <h1>inline style</h1>
                    Name <br />
                    <input type="text" style={{
                        font: 'inherit',
                        padding: '0.1rem 0.25rem',
                        border: 'NONAME',
                        'border-bottom': '2px solid #ccc',
                        'margin-bottom': '1rem',
                        display: 'block',
                        width: '100%'
                    }} onChange={this.nameChangeHandler}>
                    </input>
                    Amount <br />
                    <input type="text" style={{
                        font: 'inherit',
                        padding: '0.1rem 0.25rem',
                        border: 'NONAME',
                        'border-bottom': '2px solid #ccc',
                        'margin-bottom': '1rem',
                        display: 'block',
                        width: '100%'
                    }} onChange={this.amountChangeHandler}>
                    </input>
                    <button type="button" style={{
                        font: 'inherit',
                        background: '#ff2058',
                        padding: '0.5rem 2rem',
                        color: 'white',
                        border: '1px solid #ff2058',
                        margin: '0.5rem 0',
                        'border-radius': '5px',
                        cursor: 'pointer'          
                    }} onClick={this.submitHandle}>
                    Add Account
                    </button>
                </div>
            </form>
        );
    }
}

class outputProduct extends React.Component {    

    constructor(props) {
        super(props);
        this.state = { List: listItems };
    }

    render () {
        return (
            <div style={listStyle}>
                <h2 style={h2Style}>Loaded Account</h2>
                <ul style={ulStyle}>
                    {this.state.List}
                </ul>
            </div>
        );
    }
}

export { inputProduct, outputProduct };