import React, { useState, useEffect } from 'react';

function TitleLinker (props) {
    const [colors, setColors] = useState('');
    useEffect(
    function colorchanger() {
        let c = [
        "#FFBAAA",
        "#27576B",
        "#D47F6A",
        "#AA7539",
        "#003D19",
        "#6E91A1",
        "#552D00"
    ];
    let dc = c[Math.floor(Math.random() * c.length)];
    
    setColors(dc);
}, []);

function handleClick(e) {
    let c = [
        "#FFBAAA",
        "#27576B",
        "#D47F6A",
        "#AA7539",
        "#003D19",
        "#6E91A1",
        "#552D00"
    ];
    let dc = c[Math.floor(Math.random() * c.length)];
    e.target.style.color = dc;
}


    return <div style={{backgroundColor: `${colors}`}}>
                <h1 onClick={handleClick}>{props.data.title}</h1>
            </div>
}

export default TitleLinker;