import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams; //this process is identical to the one we used with our Details.js component
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    const navigate = useNavigate();
    const { product, setProduct } = props;
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,        // this is shortcut syntax for title: title,
            price,        // this is shortcut syntax for price: price
            description   // this is shortcut syntax for description: description
        })
            .then(res => {
                console.log(res);
                navigate("/home"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container border rounded mt-3">
            <form onSubmit={updateProduct}>
                <header>Update Product</header>
                <div className="align-items-center mt-3">
                    <p>
                        <label>Title:</label><br />
                        <input type="text"
                            name="title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }} />
                    </p>
                    <p>
                        <label>Price:</label><br />
                        <input type="text"
                            name="price"
                            value={price}
                            onChange={(e) => { setPrice(e.target.value) }} />
                        <p>
                            <label>Description:</label><br />
                            <input type="text"
                                name="description"
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }} />
                        </p>
                    </p>
                    <input type="submit" />
                </div>
                <Link className="btn btn-primary" to="/"> Home </Link>
            </form>
        </div>
    )
}
export default Update;

