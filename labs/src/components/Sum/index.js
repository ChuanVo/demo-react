import { useState } from "react";

function Sum() {
    const [soA, setSoA] = useState(0)//tinh so A
    const [soB, setSoB]=useState(0)//tinh so B
    const [totalAB, setTotal]=useState(0)//ham tinh tong

    function handleAChange(e) {
        setSoA(e.target.value)
    }

    function handleBChange(e) {
        setSoB(e.target.value)
    }

    function total(e) {
        setTotal(Number(soA)+Number(soB))//dang o chuoi string phai chuyen qua number
    }


    return (
        <div>
            <div>
                <input type='number' onChange={handleAChange}/>
                <input type='number' onChange={handleBChange}/>
                <button onClick={total}>Tinh tong</button>
                <p>{soA} + {soB}={totalAB}</p>
            </div>
            <div>abl</div>
        </div>

    )
}

export default Sum