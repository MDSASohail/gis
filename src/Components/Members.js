
import Arbaz from '../Images/Arbaz.jpeg'
import Vidhan from '../Images/Vidhan.jpeg'
import Ali from '../Images/Ali.jpeg'
import Sonali from '../Images/Sonali.jpeg'
import Dristi from '../Images/Dristi.jpeg'
import './member.css'
function Members()
{
    const data=[
        {name:"Md Aquib Ali",reNo:16202039957,roll:211720200019,img:Ali},
        {name:"Arbaz Khan",reNo:16202039954,roll:211720200021,img:Arbaz},
        {name:"Dristi Kumari",reNo:16202039955,roll:211720200020,img:Dristi},
        {name:"Sonali Sah",reNo:16202039953,roll:211720200022,img:Sonali},
        {name:"Vidhan Kumar Yadav",reNo:16202039962,roll:211720200015,img:Vidhan}
    ]
    return(
        <>
           <div id="main" >
                
                 <h1 className="mid">All Team Members</h1>
                 <div className="memberDiv">
                 {
                    data.map((item)=><EachMember eachm={item}/>)
                 }
                 </div>
                
           </div>
        </>
    )
}


function EachMember({eachm})
{
    return(
        <>
           <div class="eachMember">
              
              <div className="imgDiv">
                <img style={{width:"100%"}} src={eachm.img}></img>
              </div>
              <div class="dataDiv">
                  <p className="textt"><strong>Name</strong> :{eachm.name}</p>
                  <p className="textt"><strong>University Roll No.</strong> : {eachm.roll}</p>
                  <p className="textt"><strong>Registration No.</strong> : {eachm.reNo}</p>
              </div>
           </div>
        </>
    )
}

export default Members