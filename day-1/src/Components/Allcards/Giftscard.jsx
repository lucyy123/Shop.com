import React from 'react'

export default function Giftscard() {
  return (
    <div style={{margin:"auto" ,display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"10px",border:"2px solid", }} >
      
      <div>
        <img src="https://www.shop.com/feo-cdn/p/O/pYwDnWPhg.webp"  width="80%"  alt="" />
      </div>
      <div>
        <img src="https://www.shop.com/feo-cdn/k/2/dByx9Zp7o.webp"  width="80%" alt="" />
      </div>
      <div>
        <img src="https://www.shop.com/feo-cdn/d/Y/AsftFQ1uc.webp" width="80%"  alt="" />
      </div>
    </div>
  )
}
