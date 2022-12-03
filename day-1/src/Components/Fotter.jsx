import React from 'react'
import { Button, } from '@chakra-ui/react'
import { CopyIcon, EmailIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
export default function Fotter() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "5px", backgroundColor: "#333336", color: "white", padding: "15px 5px", border: "1px solid white" }} >
        <p>Link To This Page & Tell All Your Friends!</p>
        <Button colorScheme='teal' variant='solid' size={8} fontSize={15} px={3} bgColor="white" color="black">
          Copy Link <CopyIcon />
        </Button>

      </div>

      <div style={{display:"grid", gridTemplateColumns:"90% 10%",backgroundColor: "#333336"}} >
        <div style={{ display: "flex", padding: "2px 10px", backgroundColor: "#333336", color: "white" }} >
          <Link to="/About" style={{ borderRight: "1px solid", padding: "5px 8px" }} > About us</Link>
          <Link to="/About" style={{ borderRight: "1px solid", padding: "5px 8px" }} >Help</Link>
          <Link to="/About" style={{ borderRight: "1px solid", padding: "5px 8px" }} > Accsessibility Statement</Link>
          <Link to="/About" style={{ borderRight: "1px solid", padding: "5px 8px" }} > Contact Us</Link>
          <Link to="/About" style={{ borderRight: "1px solid", padding: "5px 8px" }} >Partner With US</Link>
          <Link to="/About" style={{ borderRight: "1px solid", padding: "5px 8px" }} >Country/ Region</Link>
          <Link to="/About" style={{ borderRight: "1px solid", padding: "5px 8px" }} >Connect</Link>
         

        </div>
        <div style={{ display: "Absolute", right: "100px", border: "1px solid red" }} >
            <Link to="" > <EmailIcon color="white"  fontSize={25}/></Link>
            <Link to="" > <EmailIcon color="white"  fontSize={25}/></Link>
            <Link to="" > <EmailIcon color="white"  fontSize={25}/></Link>
            <Link to="" > <EmailIcon color="white"  fontSize={25}/></Link>
          </div>

      </div>

<div>
  <p style={{fontSize:"12px",width:"55%"}} >© 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks, copyrights, and brands are the property of their respective owners.Only Customers will receive cashback on qualifying purchases. UnFranchise Owners/Shop Consultants will receive increased IBV instead of cashback on qualifying purchases.Privacy Policy | Terms of Use | Advertising Disclosure | Return Policy | Shipping Information</p>

<div style={{display:"flex",justifyContent:"center", gap:"5px" ,marginTop:"10px"}} >
<img src="https://www.shop.com/feo-cdn/7/F/BIyWLz__s.webp" alt="" width={100} />
<img src="https://www.shop.com/feo-cdn/7/F/BIyWLz__s.webp" alt="" width={100} />
<img src="https://www.shop.com/feo-cdn/7/F/BIyWLz__s.webp" alt="" width={100} />
<img src="https://www.shop.com/feo-cdn/7/F/BIyWLz__s.webp" alt="" width={100} />
<img src="https://www.shop.com/feo-cdn/7/F/BIyWLz__s.webp" alt="" width={100} />
<img src="https://www.shop.com/feo-cdn/K/F/E44Pe49Qs.webp" alt=""  width={100} />
<img src="https://www.shop.com/feo-cdn/7/F/BIyWLz__s.webp" alt=""  width={100} />

</div>

</div>

    </div>
  )
}
