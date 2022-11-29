import React from 'react'

export default function SimpleCard(props) {
  const {src,name,price}=props
  
    return (
    <div style={{display:"flex"}}>
      
      <div>
      <img src={src} alt=""  width={250}/>
    <p>{name}</p>
    <h5>{price}</h5>
      </div>
      <div>
      <img src={src} alt=""  width={250}/>
    <p>{name}</p>
    <h5>{price}</h5>
      </div>
      <div>
      <img src={src} alt=""  width={250}/>
    <p>{name}</p>
    <h5>{price}</h5>
      </div>
      <div>
      <img src={src} alt=""  width={250}/>
    <p>{name}</p>
    <h5>{price}</h5>
      </div>
      <div>
      <img src={src} alt=""  width={250}/>
    <p>{name}</p>
    <h5>{price}</h5>
      </div>
      <div>
      <img src={src} alt=""  width={250}/>
    <p>{name}</p>
    <h5>{price}</h5>
      </div>
   
   
   
    </div>
  )
}
