import './style.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import DetailPage from './pages/DetailPage/DetailPage';
import { useEffect } from 'react';
import { categoryStore } from './store/store';

function App() {
  const getCategories = categoryStore(s => s.getCategories);

  useEffect(()=>{
    getCategories()
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path='/' element={<HomePage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/category/:category' element={<CategoryPage/>} />
        <Route path='/product/:id' element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
