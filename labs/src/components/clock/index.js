import './style.css'

function Clock() {
    const data = new Date()

    return(
        <div>
            <div className='title'>Hello, I am clock</div>
            <div>Now is {data.toLocaleTimeString()}</div>
        </div>
    )
}

export default Clock