import { border } from "@chakra-ui/react"

const Styles={
    Navbar:{
display:"flex",
border:"1px solid",
marginTop:"20px",

searchicon:{
    display:"in-line",
    border:"2px solid ",
}
    },
    Menu:{
        display:"flex",
border:"1px solid",
justifyContent:"space-between",
gap:"10px",
padding:"0px 25px"
    }, shoppingicons:{
        display:"flex",
border:"1px solid",
justifyContent:"space-around",
gap:"25px"
    },  
     searchbar:{
        display:"flex",
        // border:"1px solid",
        width:"50%",
        marginLeft:"40px"
        // margin:"auto",
        
     },
     loginpage:{
inputs:{
width:"350px",
border:"1px solid black",
padding:"8px 4px"
},
sub_btn:{
    width:"350px",
    padding:"8px 4px",
    color:"white",
    backgroundColor:"gray",
    borderRadius:"20px"

}


     },
     signinpage:{
        inputs:{
         margin:"0px 30px",
        width:"450px",
        border:"1px solid black",
        padding:"8px 4px",
        },
        sub_btn:{
            width:"450px",
            padding:"8px 4px",
            color:"white",
            backgroundColor:"#333336",
            borderRadius:"20px"
        
        }
        
        
             },

}
export default Styles