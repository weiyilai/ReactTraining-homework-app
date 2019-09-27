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

class inputProduct extends React.Component {
    render () {
        return (
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
                <input style={{
                    font: 'inherit',
                    padding: '0.1rem 0.25rem',
                    border: 'NONAME',
                    'border-bottom': '2px solid #ccc',
                    'margin-bottom': '1rem',
                    display: 'block',
                    width: '100%'
                }}>
                </input>
                Amount <br />
                <input style={{
                    font: 'inherit',
                    padding: '0.1rem 0.25rem',
                    border: 'NONAME',
                    'border-bottom': '2px solid #ccc',
                    'margin-bottom': '1rem',
                    display: 'block',
                    width: '100%'
                }}>
                </input>
                <button style={{
                    font: 'inherit',
                    background: '#ff2058',
                    padding: '0.5rem 2rem',
                    color: 'white',
                    border: '1px solid #ff2058',
                    margin: '0.5rem 0',
                    'border-radius': '5px',
                    cursor: 'pointer'          
                }}>
                Add Account
                </button>
            </div>
        );
    }
}

class outputProduct extends React.Component {
    render () {
        return (
            <div>
                <h2 style={h2Style}>Loaded Account</h2>
            </div>
        );
    }
}

export { inputProduct, outputProduct };