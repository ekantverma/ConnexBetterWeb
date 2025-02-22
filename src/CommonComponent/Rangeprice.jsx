import React from 'react'
import { useState } from 'react';
function Rangeprice() {
    const options = [
        { price: 1000, contacts: 830 },
        { price: 2500, contacts: 1660 },
        { price: 5000, contacts: 2490 },
        { price: 10000, contacts: 4150 },
        { price: 15000, contacts: 6225 },
        { price: 20000, contacts: 8300 },
        { price: 25000, contacts: 10375 },
        { price: 30000, contacts: 12450 },
        { price: 35000, contacts: 14525 },
        { price: 40000, contacts: 16600 },
        { price: 45000, contacts: 18675 },
        { price: 50000, contacts: 19090 },
        { price: 60000, contacts: 19920 },
        { price: 70000, contacts: 23240 },
        { price: 80000, contacts: 25896 },
        { price: 90000, contacts: 29133 },
        { price: 100000, contacts: 31540 },
        { price: 110000, contacts: 34694 },
        { price: 120000, contacts: 37848 },
        { price: 130000, contacts: 41002 },
        { price: 140000, contacts: 44156 },
        { price: 150000, contacts: 46065 },
        { price: 160000, contacts: 49136 },
        { price: 170000, contacts: 50207 },
        { price: 180000, contacts: 55278 },
        { price: 190000, contacts: 58349 },
        { price: 200000, contacts: 59760 },
        { price: 220000, contacts: 63910 },
        { price: 240000, contacts: 69720 },
        { price: 260000, contacts: 75530 },
        { price: 280000, contacts: 81340 },
        { price: 300000, contacts: 87150 },
        { price: 320000, contacts: 92960 },
        { price: 340000, contacts: 98770 },
        { price: 360000, contacts: 104580 },
        { price: 380000, contacts: 110390 },
        { price: 400000, contacts: 112880 },
        { price: 420000, contacts: 118524 },
        { price: 440000, contacts: 124168 },
        { price: 460000, contacts: 129812 },
        { price: 480000, contacts: 135456 },
        { price: 500000, contacts: 141100 },
        { price: 520000, contacts: 146744 },
        { price: 540000, contacts: 152388 },
        { price: 560000, contacts: 158032 },
        { price: 580000, contacts: 163676 },
        { price: 600000, contacts: 169320 },
      ];
      
      const [selectedIndex, setSelectedIndex] = useState(0);
      const handleRangeChange = (e) => {
        setSelectedIndex(Number(e.target.value)); // Ensure it's numeric
      };
  return (
    <div>
        <input
        type="range"
        min={0}
        max={options.length - 1}
        step={1}
        value={selectedIndex}
        onChange={handleRangeChange}
        className='cursor-pointer'
      />
      <div>
        <h2 className='text-2xl text-primery font-semibold'>
          {options[selectedIndex].price} Contacts - {options[selectedIndex].contacts} Rs
        </h2>
      </div>
      <div>
        <p>Select between {options[0].price}Contacts-{options[options.length - 1].price}Contacts ranges.</p>
    </div>
    </div>
  )
}

export default Rangeprice
