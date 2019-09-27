import React from 'react'


const hi = () => (
    <>
    <h1>inline style</h1>
    <div style={{
            border: '1px solid #DDD',
            padding: '1rem',
            'border-radius': '5px',
            'box-shadow': '0 2px 8px rgba(0, 0, 0, 0.26)',
            width: '30rem',
            margin: '2rem auto',
            'max-width': '80%'
        }}>
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
        }} onClick={(e) => alert('Hello')}>
        Say Hi!
        </button>
    </div>
    </>
)

export default hi