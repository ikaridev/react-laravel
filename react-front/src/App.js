import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes admin
import { ShowProducts } from './components/admin/ShowProducts';
import { CreateProduct } from './components/admin/CreateProduct';
import { EditProduct } from './components/admin/EditProduct';
//Componentes home
import { Banner } from "./components/Banner.js";
import { Catalogue } from './components/Catalogue';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='admin/' element={<ShowProducts/>}/>
          <Route path='admin/create' element={<CreateProduct/>}/>
          <Route path='admin/edit/:id' element={<EditProduct/>}/>

          <Route path='/' element={[
            <Banner/>,
            <Catalogue/>,
            <Footer/>
          ]}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
