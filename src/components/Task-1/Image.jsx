import React, { useState } from 'react';
import "./Image.css"

export default function Image() {
    const [width, setWidth] = useState(450);
    const [display, setDisplay] = useState({ display: "none", borderRadius: 0});
    function add() {
        setWidth(450);
        setDisplay({ display: "block", borderRadius: 10});
    };
    function increase() {
        setWidth(width + 10);
    };
    function reduce() {
        setWidth(width - 10);
    };
    function remove() {
        setDisplay({ display: "none", borderRadius: 0});
    };
    const Margin = { marginRight: "10px" }
    return <>
        <div>
            <button className="buttons-padding" onClick={add} style={Margin}>Додати</button>
            <button className="buttons-padding" onClick={increase} style={Margin}>Збільшити</button>
            <button className="buttons-padding" onClick={reduce} style={Margin}>Зменшити</button>
            <button className="buttons-padding" onClick={remove} style={Margin}>Видалити</button>
        </div>
        <div><img src="https://www.letemps.ch/sites/default/files/styles/original/public/media/2022/02/14/59f42e4_2022-02-14t163144z-1603015918-rc2rjs9t1m9w-rtrmadp-3-ukraine-crisis-russia-germany_0.JPG?itok=v-3lZRc3" width={width} style={display} /></div>
    </>
}


