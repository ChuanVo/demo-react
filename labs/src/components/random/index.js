import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./style.css"


function RandomNumber() {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [random, setRandom] = useState(0)

    function handleMinChange(event) {
        setMin(event.target.value)
        // const value = event.target.value
        // setMin(Number(value))
    }

    const handleMaxChange = (event) => {
        console.log(event)
        // const value = event.target.value
        // setMax(Number(value))
    } 

    function handleGenerateButtonClick() {
        const value = Math.floor(Math.random() * (max - min)) + min;
        setRandom(value)
    }



    return(
        <div className='wrapper-random-number'>
            <div className='wrapper-first-row'>
                <div className='random-result'>
                    {random}
                </div>
                <div className='wrapper-min-max'>
                    <TextField 
                        className='wrapper-min' 
                        id="standard-basic" 
                        label="min" 
                        variant="standard" 
                        onChange={handleMinChange}/>
                    <TextField 
                        className='wrapper-max' 
                        id="standard-basic" 
                        label="max" 
                        variant="standard" 
                        onChange={handleMaxChange}/>
                </div>
            </div>
            <Button className='random-button' variant="contained" onClick={handleGenerateButtonClick}>Generate</Button>

        </div>
    )
}
export default RandomNumber;