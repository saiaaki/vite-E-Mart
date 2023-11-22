import React from 'react';  
import './App.css' 
import{ BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './Stores/pages/LandingPage';
import Mobilepage from './Stores/pages/Mobilepage';
import Computerpage from './Stores/pages/Computerpage';
import Menpage from './Stores/pages/Menpage';
import Womenpage from './Stores/pages/Womenpage';
import Acpage from './Stores/pages/Acpage';
// import Bookspage from './Stores/pages/Bookspage';
// import Tvpage from './Stores/pages/Tvpage';
import Watchpage from './Stores/pages/Watchpage';
import Fridgepage from './Stores/pages/Fridgepage';
// import FurniturePage from './Stores/pages/Furniture';
import Kitchenpage from './Stores/pages/Kitchenpage';
// import Speakerpage from './Stores/pages/Speakerpage';
import Mobilesingle from './singles/Mobilesingle';
import Computersingle from './singles/Computersingle';
import Mensingle from './singles/Mensingle';
import Womensingle from './singles/Womensingle';
import Acsingle from './singles/Acsingle';
// import Booksingle from './singles/Booksingle';
// import Tvsingle from './singles/Tvsingle';
import Watchsingle from './singles/Watchsingle';
import Fridgesingle from './singles/Fridgesingle';
// import Furnituresingle from './singles/Furnituresingle';
import Kitchensingle from './singles/Kitchensingle';
import UserCart from './Stores/UserCart';
// import Speakersingle from './singles/Speakersingle';
 function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <LandingPage/>}/> 
          <Route path='/mobiles' element = { <Mobilepage/>}/> 
          <Route path='/computer' element={<Computerpage/>}/> 
          <Route path='/men' element={<Menpage/>}/> 
          <Route path='/women' element={<Womenpage/>}/>
          <Route path='/ac' element={<Acpage/>}/> 
          {/* <Route path='/book' element={<Bookspage/>}/> */}
          {/* <Route path='/tv' element={<Tvpage/>}/> */}
          <Route path='/watch' element={<Watchpage/>}/>
          <Route path='/fridge' element={<Fridgepage/>}/>
          {/* <Route path='/furniture' element={<FurniturePage/>}/> */}
          <Route path='/kitchen' element={<Kitchenpage/>}/>
          {/* <Route path='/speaker' element={<Speakerpage/>}/> */}
          <Route path='/mobiles/:id' element={<Mobilesingle/>}/>
          <Route path='/computer/:id' element={<Computersingle/>}/>
          <Route path='/men/:id' element={<Mensingle/>}/>
          <Route path='/women/:id' element={<Womensingle/>}/>
          <Route path='/ac/:id' element={<Acsingle/>}/>
          {/* <Route path='/book/:id' element={<Booksingle/>}/> */}
          {/* <Route path='/tv/:id' element={<Tvsingle/>}/> */}
          <Route path='/watch/:id' element={<Watchsingle/>}/>
          <Route path='/fridge/:id' element={<Fridgesingle/>}/>
          {/* <Route path='/furniture/:id' element={<Furnituresingle/>}/> */}
          <Route path='/kitchen/:id' element={<Kitchensingle/>}/>
          {/* <Route path='/speaker/:id' element={<Speakersingle/>}/> */}
          <Route path='/cart' element={<UserCart/>}/>
        </Routes>
      </BrowserRouter>
     
     
    </div>
  )
}
export default App
