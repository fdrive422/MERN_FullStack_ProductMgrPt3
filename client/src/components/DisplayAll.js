import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"

const DisplayAll = (props) => {
    const { product, setProduct } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log(err))
    }, [])


    // deleteFilter is just a function, we're not routing to anything
    const deleteFilter = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProduct(product.filter((product, index) =>
                    product._id !== deleteId
                ))
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="container border rounded p-5 mt-3">
            <header> Product List </header>
            {
                product.map((product, index) => (
                    <div key={product._id} className="align-items-center mt-3">
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <br />
                        <button className="btn btn-light" onClick={() => navigate(`/products/edit/${product._id}`)} > Edit </button>
                        &nbsp;
                        <button className="btn btn-light" onClick={() => deleteFilter(product._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAll;