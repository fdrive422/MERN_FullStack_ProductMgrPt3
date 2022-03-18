import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const { product, setProduct } = props;
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8000/api/products', {
                title,
                price,
                description
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProduct([...product, res.data]);
                setTitle('');
                setPrice('');
                setDescription('');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="border rounded p-3 m-5">
            <form onSubmit={submitHandler}>
                <h2 className="text-center">Product Manager III</h2>

                <div className="mb-3 text-left">
                    <label> Title: </label>
                    <input type="text" className="form-control" value={title} onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    />
                </div>

                <div className="mb-3">
                    <label> Price: </label>
                    <input type="number" className="form-control" value={price} onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                    />

                </div>
                <div className="mb-3">
                    <label > Description: </label>
                    <input type="text" className="form-control" value={description} onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    />
                </div>

                {/* <button type="submit" className="btn btn-primary"> Submit </button> */}
                <button type="submit" className="btn btn-primary"> Submit</button>
            </form>
        </div>
    );
}

export default ProductForm;