import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import { Home } from './Pages/Home/Home';
import { Products } from './Pages/Products/Products';
import { ProductPage } from './Pages/ProductPage/ProductPage';
import { products } from './utils/products';

function App() {
  const params = useParams();
  console.log(params);
  return (
    <div id="app-container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<Products />} />
        <Route
          path={`/products/:productId`}
          element={<ProductPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
