import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import './style.css'
// import style from './style.module.css'

import styled from 'styled-components'

const WrapperRandomNumber = styled('div')``

const WrapperFirstRow = styled('div')`
    display: flex;
    justify-content: space-between;
`

const RandomResult = styled('div')`
    margin: 2rem;
`

const WrapperMinMax = styled('div')`
    display: flex;
    flex-direction: column;
`

const WrapperMin = styled(TextField)`
`

const RandomButton = styled(Button)`
    width: 100%;
    margin-top: 10px !important;
`

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
        const value = event.target.value
        setMax(Number(value))
    } 

    function handleGenerateButtonClick() {
        const value = Math.floor(Math.random() * (max - min)) + min;
        setRandom(value)
    }

    return(
        <WrapperRandomNumber>
            <WrapperFirstRow>
                <RandomResult>
                    {random}
                </RandomResult>
                <WrapperMinMax>
                    <WrapperMin 
                        id="standard-basic" 
                        label="min" 
                        variant="standard" 
                        onChange={handleMinChange}/>
                    <WrapperMin 
                        id="standard-basic" 
                        label="max" 
                        variant="standard" 
                        onChange={handleMaxChange}/>
                </WrapperMinMax>
            </WrapperFirstRow>
            <RandomButton variant="contained" onClick={handleGenerateButtonClick}>Generate</RandomButton>
        </WrapperRandomNumber>
    )
}
export default RandomNumber;