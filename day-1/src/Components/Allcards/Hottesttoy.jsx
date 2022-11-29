import React from 'react'
import MyCard from "./Card"
import { useState } from 'react'
import Item from "./Item";
import Carousel from 'react-elastic-carousel';
// import MyCard from './Card';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

// const images = [
//   "https://www.shop.com/feo-cdn/k/s/un06UjF2A.webp",
//   "https://www.shop.com/feo-cdn/q/u/Leakm6IZA.webp",
//   "https://www.shop.com/feo-cdn/W/V/X-DlVujyM.webp",
//   "https://www.shop.com/feo-cdn/o/S/AjtJ3ZrMY.webp",
//   "https://www.shop.com/feo-cdn/o/S/AjtJ3ZrMY.webp",
//   "https://www.shop.com/feo-cdn/3/j/3X5ngOmcM.webp",

// ]
function Hottesttoy(props) {
  const {images ,title ,mainimg}=props
  const [items, setItems] = useState(images);

  return (
    <><h1 style={{fontSize:"35px",margin:"0px 15px"}}>{title}</h1>
    <div style={{ display: "grid", border: "1px solid", gridTemplateColumns:"70% 30%" }}>

      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
        
              <div>
              <img src={item} alt="" />
              <h4>dfjfjdsjfdsfjds</h4>
              <p>fdsfjkdshfjhdsjflksd</p>
              </div>

           
          ))}
        </Carousel>
      </div>
      <div>
        <img src={mainimg} alt="" />
      </div>
    </div>
    </>
  );
}

export default Hottesttoy