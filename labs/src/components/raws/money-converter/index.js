

import React, { useState } from 'react';
import { Input, Button, Select } from 'antd';
import './style.css'

const fromOtp = [
  {
    value: '1',
    label: 'VND'
  },
  {
    value: '23',
    label: 'USD'
  },
  {
    value: '30',
    label: 'ERO'
  }
]

const toOtp = [
  {
    value: '1',
    label: 'VND'
  },
  {
    value: '22',
    label: 'USD'
  },
  {
    value: '28',
    label: 'ERO'
  }
]

function MoneyConverter() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState(1)
  const [to, setTo] = useState(1)
  const [result, setResult] = useState(null)

  function handleChange(data) {
    setAmount(data.target.value)
  }

  function handleFromChange(data) {
    setFrom(data)
  }

  function handleToChange(data) {
    setTo(data)
  }

  function handleOnClick() {
    console.log({amount, from, to})
    const result = (amount * from) / to

    console.log('result: ', result)

    setResult(result)
  }


  return (
    <div className='money-converter-wrapper'>
      <div className='wapper-info'>
        <div className='convert-amount'>
          <div className='convert-item-label'>Amount</div>
          <Input type='number' placeholder="Nhập số tiền cần chuyển đổi" onChange={handleChange} value={amount}/>
        </div>
        <div className='convert-item'>
          <div className='convert-item-label'>From</div>
          <Select
            className='selector'
            size={'middle'}
            style={{
              width: 200,
            }}
            defaultValue="1"
            options={fromOtp}
            onChange={handleFromChange}
          />
        </div>
        <div className='convert-item'>
          <div className='convert-item-label'>To</div>
          <Select
            className='selector'
            size={'middle'}
            style={{
              width: 200,
            }}
            defaultValue="1"
            options={toOtp}
            onChange={handleToChange}
          />
        </div>
      </div>
      <div className='wrapper-convert-button'>
        <Button type="primary" onClick={handleOnClick}>Convert</Button>
      </div>
      <div className='wrapper-convert-value'>
        <div>Result: {result}</div>
      </div>
    </div>
  )
}

export default MoneyConverter