import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => console.log(err))

    }, [])
    //id is not needed, but removes a warning

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate(`/products/${id}`);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="border rounded p-5 m-5">
            <form onSubmit={submitHandler}>
                <header className="mb-4 text-center">Update Product Information</header>

                <div className="mb-3 text-left">
                    <label> Title: </label>
                    <input className="form-control" onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>

                <div className="mb-3 text-left">
                    <label> Price: </label>
                    <input className="form-control" onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>

                <div className="mb-3 text-left">
                    <label > Description: </label>
                    <input className="form-control" onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                <div className="mb-3 text-center">
                    <input type="submit" className="btn btn-success mt-3" value="Update" />
                    <br />
                    <button className="btn btn-primary mt-3" onClick={() => navigate("/")} > Home </button>
                </div>
            </form>
        </div >
    );
};

export default Update;