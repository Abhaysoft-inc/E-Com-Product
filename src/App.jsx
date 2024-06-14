
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Product from './screens/Product';
import LoginScreen from './screens/LoginScreen';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomeScreen />} />
          <Route path='/product' element={<Product />} />
          <Route path='/login' element={<LoginScreen />} />
        </Routes>

      </BrowserRouter>





    </>
  )
}

export default App
