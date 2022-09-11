import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'

import NotFound from './page/NotFound';
import Aside from './components/layout/Aside';
import Main from './components/layout/Main';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import Kindergarten from './page/Kindergarten';
import Activities from './page/Activities';
import Kids from './page/Kids';
import Parent from './page/Parent';
import Guardian from './page/Guardian';
//import NotFound from './page/NotFound';
import Setting from './page/Setting';
import { KidProvider } from './context/kids/KidContext'
function App() {

  return (
    <Router>

      <div className="App">
       
          
      <Navbar />
      
      
        <div className='App-main'>




          <KidProvider>
          
            <Routes>
           
              <Route  path='/' element={<SignIn />} />

              <Route path='/kindergarten' element={<Kindergarten />} />
              <Route path='/activities' element={<Activities />} />
              <Route path='/kids' element={<Kids />} />
              <Route path='/parent' element={<Parent />} />
              <Route path='/guardian' element={<Guardian />} />
              <Route exact path='/*' element={<NotFound />} />

              <Route path='/setting' element={<Setting />} />





            </Routes>
          </KidProvider>

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
