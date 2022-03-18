import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import OneProduct from './components/OneProduct';
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/products/:id" element={<OneProduct />} />
                    <Route path="/products/edit/:id" element={<Update />} />


                </Routes>
            </div>
        </BrowserRouter>
    );
}



export default App;
