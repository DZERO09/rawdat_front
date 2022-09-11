import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Kids from '../../page/Kids';
import './css/asideCss.css'

function Aside() {
  return (
    <aside>
      
      <Link to="/kindergarten">Kindergarten</Link>
      <Link to="/activities">Activities</Link>
       <Link to="/kids">Kids</Link>
       <Link to="/parent">Parent</Link>
       <Link to="/guardian">Guardian</Link>
      
    </aside>
  )
}

export default Aside