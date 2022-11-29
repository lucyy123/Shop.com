import Menubar from './Components/Menubar';
import './App.css';
import Navbar from './Components/Navbar';
import MyCard from './Components/Allcards/Card';
import Welcome from './Components/Banners/Welcome';
import { useEffect } from 'react';
// import Categories from './Components/Sidebars/Categories';
function App(){
  
  useEffect(()=>{
{/* <Welcome value={true}/> */}
console.log("below welcome")
  },[])


  return (
    <>
    <Navbar/>
    <Menubar/>
    <Welcome/>
   </>
  );
}

export default App;
