import { useState } from "react";

function Sum() {
    const [soA, setSoA] = useState(0)

    function handleAChange(e) {
        setSoA(e.target.value)
    }

    console.log('so A = ', soA)

    return (
        <div>
            <input type='number' onChange={handleAChange}/>
            <input type='number' />
            <button>Tinh tong</button>
        </div>
    )
}

export default Sum