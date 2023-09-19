import React, { useState } from 'react';
import { InputNumber, Button } from 'antd';


const RandomNumber = () => {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [result, setResult] = useState(0);
    
    const handleGetValueMin = (e) =>{{
        setMin(e);
    }}

    const handleGetValueMax = (e) => {
        setMax(e);
    }

    const handleClick = () => {
        setResult(min + Math.random() *  [max - min]);
    }
    
    return (
    <div>
        <InputNumber onChange={handleGetValueMin}/>
        <InputNumber onChange={handleGetValueMax}/>
        <Button type="primary" onClick={handleClick}>Generate Number</Button>
        <p>Result from {min} to {max} = {result}</p>
    </div>
    )
}
export default RandomNumber;