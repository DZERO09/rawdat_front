import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Kids from '../../page/Kids';
import Kindergarten from '../../page/Kindergarten';
import Activities from '../../page/Activities';
import Parent from '../../page/Parent';
import Guardian from '../../page/Guardian';
import Setting from './../../page/Setting'
import NotFound from '../../page/NotFound';
import './css/main.css'
import {KidProvider} from './../../context/kids/KidContext'
function Main() {
  return (
    <KidProvider>
    <div className='main-wrapper'>

    </div>
    </KidProvider>
  )
}

export default Main