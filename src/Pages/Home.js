import Navbar from "../Components/Navbar";
import Project from "../Components/Project";
import Members from "../Components/Members";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

const Home=()=>{
    return(
        <>
            <div >
            
            
                <Router>

                 
                
                <Navbar/>
                   <Routes>
                     <Route path="/member" element={<Members/>}/>
                     <Route path="/" element={<Project/>}/>

                   </Routes>
                   


                   </Router>
                   
            </div>
        </>
    )

}


export default Home;