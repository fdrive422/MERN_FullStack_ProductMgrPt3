import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const OneProduct = (props) => {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log(err))
    }, [id]);

    const deleteFilter = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                navigate("/")
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="container border rounded p-5 mt-3">
            <header> Product Details </header>
            <div className="align-items-center mt-3">
                <p>Title: {product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
            </div>
            <Link className="btn btn-primary" to="/"> Home </Link>
            &nbsp;
            <button className="btn btn-danger" onClick={deleteFilter}>Delete</button>
        </div>
    );

}




export default OneProduct;