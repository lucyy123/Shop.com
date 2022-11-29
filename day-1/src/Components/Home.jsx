import React, { useEffect } from 'react'
import Navbar from './Navbar'
import MyCard from './Allcards/Card'
import Dailybanner from './Banners/Dailybanner'
import CashbackCount from './Banners/CashbackCount'
import Blackfriday from './Allcards/Blackfriday'
import PopularBrands from './PopularBrands'
import Hottesttoy from './Allcards/Hottesttoy'
import Welcome from './Banners/Welcome'
import Giftscard from './Allcards/Giftscard'
import FullCaraousel from "./Allcards/FullCaraousel"
import SimpleCard from './Allcards/SimpleCard'
import Fotter from './Fotter'
const images = [
    "https://www.shop.com/feo-cdn/k/s/un06UjF2A.webp",
    "https://www.shop.com/feo-cdn/q/u/Leakm6IZA.webp",
    "https://www.shop.com/feo-cdn/W/V/X-DlVujyM.webp",
    "https://www.shop.com/feo-cdn/o/S/AjtJ3ZrMY.webp",
    "https://www.shop.com/feo-cdn/o/S/AjtJ3ZrMY.webp",
    "https://www.shop.com/feo-cdn/3/j/3X5ngOmcM.webp",
  
  ]
  const images1=[
    "https://www.shop.com/feo-cdn/Q/u/NWDUoKt-I.webp",
"https://www.shop.com/feo-cdn/Z/F/EAg6_hWBY.webp",
"https://www.shop.com/feo-cdn/b/F/nyqwQthX4.webp",
    "https://www.shop.com/feo-cdn/Q/u/NWDUoKt-I.webp",
"https://www.shop.com/feo-cdn/Z/F/EAg6_hWBY.webp",
"https://www.shop.com/feo-cdn/b/F/nyqwQthX4.webp",

  ]
  const images2=[
"https://www.shop.com/feo-cdn/9/N/6w7SnOjhk.webp",
"https://www.shop.com/feo-cdn/u/A/1kXbsE9bI.webp",
"https://www.shop.com/feo-cdn/3/M/xF7gLahyo.webp",
"https://www.shop.com/feo-cdn/Y/o/6RhJHBW4c.webp",
"https://www.shop.com/feo-cdn/u/A/1kXbsE9bI.webp",
"https://www.shop.com/feo-cdn/3/M/xF7gLahyo.webp",
  ]

  const images3=[
    "https://www.shop.com/feo-cdn/5/Y/xeoMgYsVU.webp",
    "https://www.shop.com/feo-cdn/c/5/TekwqZ_Uc.webp",
    "https://www.shop.com/feo-cdn/T/5/fLKx30I_A.webp",
    "https://www.shop.com/feo-cdn/k/H/Eh5_7fUBQ.webp",
    "https://www.shop.com/feo-cdn/c/5/TekwqZ_Uc.webp",
   
  ]
  const images4= [
    "https://www.shop.com/feo-cdn/t/I/LtR4AJ_gE.webp",
    "https://www.shop.com/feo-cdn/t/I/LtR4AJ_gE.webp",
    "https://www.shop.com/feo-cdn/b/O/g6E6ASXKU.webp",
    "https://www.shop.com/feo-cdn/t/I/LtR4AJ_gE.webp",
    "https://www.shop.com/feo-cdn/t/I/LtR4AJ_gE.webp",
    "https://www.shop.com/feo-cdn/q/G/cOIri0TQo.webp",
    "https://www.shop.com/feo-cdn/t/I/LtR4AJ_gE.webp",
    "https://www.shop.com/feo-cdn/t/I/LtR4AJ_gE.webp",
    "https://www.shop.com/feo-cdn/t/I/LtR4AJ_gE.webp",
  "https://www.shop.com/feo-cdn/r/F/WdrQKMhwQ.webp",
  
  ]
  const images5=[
    "https://www.shop.com/feo-cdn/a/F/JLnh1zz4k.webp",
    "https://www.shop.com/feo-cdn/H/u/uwrPc6nhI.webp",
    "https://www.shop.com/feo-cdn/a/F/JLnh1zz4k.webp",
    "https://www.shop.com/feo-cdn/H/u/uwrPc6nhI.webp",
    "https://www.shop.com/feo-cdn/w/_/uHhYHPT1k.webp",
  
    "https://www.shop.com/feo-cdn/H/u/uwrPc6nhI.webp",
    "https://www.shop.com/feo-cdn/w/_/uHhYHPT1k.webp",
  ]
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
 
export default function Home() {
    useEffect(()=>{
        <Welcome/>
    },[])
    const arr = [1, 2, 3, 4]
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className='Cashbackcount'>
                <CashbackCount></CashbackCount>
            </div>
            <div className='daily-banner'>
                <Dailybanner></Dailybanner>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                {/* <MyCard></MyCard> */}
                {arr.map(card => <MyCard></MyCard>)}
            </div>

            <div className='popular-brands'>
                <PopularBrands></PopularBrands>
            </div>

            <div style={{ display: "flex", gap: "10px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", textAlign: "center", position: "relative", top: "-133px" }}>
                {arr.map(card => <div style={{ marginTop: "60px" }}><MyCard></MyCard></div>)}

            </div>
            <div style={{marginTop:"-85px",padding:"20px 0px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
            <Blackfriday src="https://bit.ly/dan-abramov" title="Black Friday Special"  />
            </div>

           
            <div>
           <Hottesttoy images={images} title="Hottest Toy" mainimg="https://www.shop.com/feo-cdn/_/W/gi6rvkrrs.webp" />
            </div>

<div>
<Giftscard/>
</div>
        
        <div>
            <Blackfriday src="https://www.shop.com/feo-cdn/t/b/bOOcKZ1A0.webp" title="Gift ideas" ></Blackfriday>
        </div>

<div>
<FullCaraousel images={images4} breakPoints={breakPoints} title=" A new take on Turkey: Lobster anyone?" />
</div>
<div>
<Giftscard/>
</div>
<div> 
           <Hottesttoy title="NEW Layered Holiday Collection" mainimg="https://www.shop.com/feo-cdn/M/L/Pe4IAdzE0.jpg" images={images1}/>
            </div>

            <div>
                <Hottesttoy images={images2} title="Lexury Beauty Gifts from Motives" mainimg="https://www.shop.com/feo-cdn/p/0/Ya40gCGxs.webp"/>
            </div>

            <div>
                <Hottesttoy images={images3} title="Lexury Beauty Gifts from Motives" mainimg="https://www.shop.com/feo-cdn/Q/l/CTfnC54RU.webp"/>
            </div>

            <div >
                <SimpleCard src={"https://img.shop.com/Image/210000/214100/214196/products/561800349.jpg?plain&size=600x600"} name="Isotonix vitamin-D with K2" />
              </div>

<div > 
    <FullCaraousel images={images5}  breakPoints={breakPoints} title="CLEANING AND HEALTH HAVE NEVER BEEN MORE IMPORTANT" />
</div>

<div>
<Fotter/>
</div>
        </div>
    )
}
