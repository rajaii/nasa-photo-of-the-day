import React, { useState, useEffect} from 'react';

import './DisplayData.css';

const DisplayData = (props) => {

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

function handleMouseOver(e) {
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
const a = "Click to Go to the Best Developer's Github Page";
let x = true;
function handleLastOver(e) {
 if (e.target.innerHTML != a) {
     e.target.innerHTML = a;
     
 } 
}


    return <div style={{backgroundColor: `${colors}`}}>
                <p onMouseOver={handleMouseOver}>
                    {props.data.media_type}
                </p>
                <p onMouseOver={handleMouseOver}>
                    {`Copyright credit: ${props.data.copyright}`}
                </p>
                <p onMouseOver={handleMouseOver}>
                    {props.data.date}
                </p>
                <a href='https:github.com/rajaii'>
                    <p onMouseOver={handleLastOver}>
                        {`Explanation: ${props.data.explanation}`}
                    </p>
                </a>
            </div>
}

export default DisplayData;