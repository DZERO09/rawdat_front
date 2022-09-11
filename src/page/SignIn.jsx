import  {useState}  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import passwordVisibility_icone from './../asset/signIn/hide.png'
import arrowRight_icone from './../asset/signIn/next.png'
import './css/signIn.css' 
function SignIn() {
  const [showPwd , setShowPwd] = useState(false);
    const [formData , setFormData] = useState({
        username : '',
        password : ''
    });
    /*const [username , setUsername ] = useState("");
    const [password , setPassword ] = useState("");*/
    const {username , password} = formData
    const naviagte = useNavigate();
    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id] : e.target.value,
        }))
    }
  
    
  return (
    <>
    <form>
        <input type="email" placeholder='Email' id='username' 
        value={username} onChange={onChange}/><br/>
        <div className='signIn-pwd-container'>
           <input type={setShowPwd ? 'text' : 'password'} placeholder='password' id='password' 
        value={password} onChange={onChange}/>
        <img src={passwordVisibility_icone} alt="" id="signIn-pwd-visible-imd" onClick={
          () => setShowPwd((prevState) => !prevState )
        }/>
        </div>
        <Link to='/forgot-password' >forget password ?</Link>
    </form>
    </>
  )
}

export default SignIn
/**
 *   <form>
        <input type="email" placeholder='Email' id='email' 
        value={username} onChange={onChange}/>
           <input type="password" placeholder='password' id='password' 
        value={password} onChange={onChangePwd}/>

    </form>

const [showPwd , setShowPwd] = useState(false);
    const [formData , setFormData] = useState({
        username : '',
        password : ''
    });
    const [username , password ] = formData;
    const naviagte = useNavigate();
    const onChange = () => {
        
    }
    const onChangePwd= () => {}


 */