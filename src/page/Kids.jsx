import React , {useEffect , useContext}from 'react'
import {Link} from "react-router-dom"
import Button from '../shared/Button';
//import axios from 'axios';
import boy from './../asset/boy.svg'
import girl from './../asset/girl.svg'
import Spinner from '../shared/Spinner';
import Kid from '../components/kids/Kid';
import KidContext from '../context/kids/KidContext';
import './kidProfile.css'
function Kids() {
  //const [kids , setKids] = useState([])
  //const [isLoading , setIsLoading] = useState(true);
const {kids , isLoading , getKids} = useContext(KidContext);

  /*const getKids =async () => {
      const res = await axios.get(`/kid/all`,{
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_BACK_TOKEN}`
        }})
      setIsLoading(false)
      const data = await res.data;
      setKids(data)
  }*/ 
  useEffect(() => 
  {
   getKids();
  },[]
);
if(kids){
  return isLoading ? (<Spinner/>)  :(
      
      <div >
           <Link to="/kid/new"><Button>New Kid</Button></Link>

      <section >
  <ul >
     {kids.map((kid)=>
     (
      <li key={kid.id}>
     
          <div className='Kid-hole-wrapper' >
          <Link to={`/kid/${kid.id}/profile`}>
        { (kid.picture === undefined )&&(kid.sex === "BOY")? <img src={boy} className="Kid-profile-picture"/> :(kid.picture === undefined )&&(kid.sex === "GIRL") ?
          
          <img src={girl} className="Kid-profile-picture"/> :  <img src={`data:${kid.picture.type};base64,${kid.picture.image}`} className="Kid-profile-picture"/>//<img src={`http://localhost:8080/picture/get/${kid.picture_id}`} className="Kid-profile-picture"/>
  
        
        }
  
  </Link>
  
  <div className='Kid-wrapper'>
        
        <label>Nom : {kid.lastname}</label>
        <label>Prénom : {kid.firstname}</label>
        <label>Date de naissence : {kid.birthday}</label>
       <label>{kid.sex}</label>  
       <br />
     
        </div>
        </div>
       
        </li>
    )
      )} 
      </ul>
      </section>
      </div>
  )
}
return  <Link to="/">Home</Link>
}



export default Kids