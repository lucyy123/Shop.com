import React, { useState } from 'react'
import Styles from './Styles'
import Fotter from './Fotter'
import ReCAPTCHA from "react-google-recaptcha";
const userdetails={
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    mobile_phone:"",
    alert:"",
}
export default function CreateAccount() {
    const [data,setData]=useState(userdetails)
    const {firstname,lastname,email,password,mobile_phone,alert}=data
    const [able, setAble] = useState(true)
    function onChange(value) {
        console.log("Captcha value:", value);
        setAble(false)
    }
    const handleclick=(e)=>{
e.preventDefault()
        console.log(data)
       
    }
    const handleChange=(e)=>{
        e.preventDefault()
let {name,value,type,checked}=e.target
value=type==="checkbox"? checked:value;
setData({...data,[name]:value})


    }

   
    return (
        <>
            <div style={{ margin: "80px 200px",}}>
                <form  onSubmit={handleclick}>
                    <h1 style={{ fontSize: "30px" }}> <b> Create an account</b> </h1>  &nbsp; &nbsp; &nbsp; &nbsp;
                    <label htmlFor="" >First name</label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <label htmlFor="" >Last name</label> <br />
                    <input  name="firstname" value={firstname}  onChange ={handleChange} type="text" style={Styles.signinpage.inputs} placeholder="First name here" />
                    <input  name="lastname" value={lastname}  onChange ={handleChange} type="text" style={Styles.signinpage.inputs} placeholder="Last name here" />
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp;<label htmlFor="">Email address</label> <br />
                    <input name="email" value={email}   onChange ={handleChange} type="Email" style={Styles.signinpage.inputs} placeholder='yourname@example.com' />

                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <label htmlFor="" >Password(At least 7 characters)</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <label htmlFor="" >Confirm password</label> <br />
                    <input  name="password" value={password} onChange ={handleChange}  type="text" style={Styles.signinpage.inputs} placeholder="Please enter a minimum of 7 characters" />
                    <input type="text" style={Styles.signinpage.inputs} placeholder="please reenter your password" />
                    <h2><b>Text Message (SMS) Alerts: (Optional)</b></h2>
                    <input type="checkbox" name="alert" checked={alert} onChange={handleChange} style={{ padding: "10px", marginRigth: "10px" }} />Do you want to sign up for Shopper alerts from SHOP.COM? (Message and data rates may apply.)
                    <br />
                    &nbsp; &nbsp; &nbsp;&nbsp;<label htmlFor="">Mobile Phone</label><br />
                    <input  name="mobile_phone" value={mobile_phone}  onChange ={handleChange} type="text" style={Styles.signinpage.inputs} placeholder='please enter your 10 digit mobile number(i.e. 9999 999 999)' />

                    <div style={{ border: "1px solid gray", margin: "30px 0px",padding:"5px" }}>
                        <p>Were you referred by a friend?</p>
                        <p>Enter their email address (Optional)</p>
                        <input type="text" style={Styles.signinpage.inputs} />
                    </div>
                    <p><b>Email deals: (Optional)</b></p>
                    <input type="checkbox" name="" id="" checked />Do you want to sign up for sweet email offers and discounts from SHOP.COM?
                    <br />
                    <input type="checkbox" name="" id="" checked />Do you want to sign up for sweet email offers and discounts from MarketAmerica.com and its brands?
                    <br /><br />
                    <p><b>Also please confirm you are not robot</b>
                    </p>
                    <ReCAPTCHA
                        sitekey=" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                    />
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button style={Styles.signinpage.sub_btn} disabled={able}>Creat your new account</button> <br />
                    
                    <br /><p style={{marginLeft:"260px"}}>By creating an account, you are agreeing to our Terms of Service and Privacy Policy.</p>
                </form>
            </div>

            <Fotter></Fotter>
        </>
    )
}
