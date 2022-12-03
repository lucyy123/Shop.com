import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Fotter from './Fotter'
import Styles from './Styles'
import{Button} from "@chakra-ui/react"

export default function LoginPage() {
    // const [data,setData]=useState(userdetails)
  return (
    <>
        <div style={{display:"grid",gridTemplateColumns:"40% 40%",marginBottom:"170px",gap:"20px"}}>
        <div style={{padding:"30px" ,display:"flex",justifyContent:"center",alignItems:"center",margin:"20px 0px"}}>
        <form action="">
        <h1 style={{fontSize:"30px"}}> <b> Sign in</b> </h1>
            <label htmlFor="">Email address: </label> <br />
<input style={Styles.loginpage.inputs}  type="text"  placeholder='yourname@example.com'/><br />
<label htmlFor=""> Password:</label> <br />
<input  style={Styles.loginpage.inputs} type="text" placeholder='please enter your password' /><br />
<br />
<Link to="/forgetpassword"> Forget your password?</Link>
<br /><br />
        <input style={Styles.loginpage.sub_btn} type="submit" value="Sign in" />
        </form>
     </div>
     <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<div>
<h2 style={{fontSize:"25px"}}>
        Don't Have An Account
     </h2>
     <p style={{margin:"10px 0px"}}>With a SHOP.COM account, you can enjoy the following benefits: up to 50% Cashback on eligible purchases, redeem discount coupons, order status and history, saved payment options and addresses, exclusive emails and more. Learn more</p>
     <Button colorScheme='black' variant='outline'>
   <Link to="/createpage"> <b> Create your new account</b></Link> 
  </Button>

</div>
    
     </div>
        </div>
   


<div>
    <Fotter/>
</div>
    </>
  )
}
