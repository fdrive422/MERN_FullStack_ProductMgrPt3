const Product = require("../models/product.model.js");

module.exports = {
    getAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts) => {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err) => console.log(err));
    },

    getOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then((oneProduct) => {
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err) => console.log(err));
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err) => console.log(err));
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id },
            req.body, { new: true, runValidators: true }
        )
            .then(updatedProdcut => {
                console.log(updatedProdcut);
                res.json(updatedProdcut);
            })
            .catch(err => console.log(err))
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((deletedProduct) => {
                console.log(deletedProduct);
                res.json(deletedProduct);
            })
            .catch((err) => console.log(err));
    },

};