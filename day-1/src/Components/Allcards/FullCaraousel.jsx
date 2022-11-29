import React ,{useState}from 'react'
import Item from './Item'
import Carousel from "react-elastic-carousel"

 
 function FullCaraousel(props) {
    const {images,breakPoints,title}=props
    console.log(images)
    const [items, setItems] = useState(images);
    return (
    <div>
        <h1> {title}</h1>
       <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
        
              <div style={{border:"1px solid",width:"310px" }} >
              <img src={item} alt=""/>
              <h4>dfjfjdsjfdsfjds</h4>
              <p>fdsfjkdshfjhdsjflksd</p>
              </div>

           
          ))}
        </Carousel>
      </div>
    </div>
  )
}
export default FullCaraousel
