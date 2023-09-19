import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function ChuyenDoiTien() {
    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [soLuong, setSoLuong] = useState()
    const [ketQua, setKetQua] = useState(0)

    const handleFromChange = (event) => {
        setFrom(event.target.value)
    };

    const handleToChange = (event) => {
        setTo(event.target.value)
    }

    const handleSoLuongChange = (event) => {
        setSoLuong(event.target.value)
    }

    const handleQuyDoiClick = () => {
       setKetQua((soLuong * from) / to)
    }

      console.log({soLuong, from, to})

    return (
        <div>
            
            <TextField id="outlined-basic" label="So luong" onChange={handleSoLuongChange}/>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={from}
            label="From"
            onChange={handleFromChange}
            >
                <MenuItem value={1}>Viet Nam</MenuItem>
                <MenuItem value={24}>USD</MenuItem>
                <MenuItem value={25}>Euro</MenuItem>
            </Select>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={to}
            label="From"
            onChange={handleToChange}
            >
                <MenuItem value={1}>Viet Nam</MenuItem>
                <MenuItem value={24}>USD</MenuItem>
                <MenuItem value={25}>Euro</MenuItem>
            </Select>

            <Button variant="contained" onClick={handleQuyDoiClick}>Quy doi</Button>

            <p>{ketQua}</p>
        </div>
    )
}

export default ChuyenDoiTien