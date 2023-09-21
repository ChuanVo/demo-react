import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./style.css"


function RandomNumber() {


    return(
        <div className='wrapper-random-number'>
            <div className='wrapper-first-row'>
                <div className='random-result'>
                    2
                </div>
                <div className='wrapper-min-max'>
                    <TextField className='wrapper-min' id="standard-basic" label="min" variant="standard" />
                    <TextField className='wrapper-max' id="standard-basic" label="max" variant="standard" />
                </div>
            </div>
            <Button className='random-button' variant="contained">Generate</Button>

        </div>
    )
}
export default RandomNumber;