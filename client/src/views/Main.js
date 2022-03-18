import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import DisplayAll from '../components/DisplayAll';

const Main = (props) => {
    const [product, setProduct] = useState([]);

    return (
        <div>
            <ProductForm product={product} setProduct={setProduct} />
            <DisplayAll product={product} setProduct={setProduct} />
        </div>
    )
}

export default Main;

