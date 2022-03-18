const productController = require('../controllers/product.controller');

module.exports = app => {
    app.post("/api/products", productController.createProduct);
    app.get("/api/products", productController.getAllProducts);
    app.get("/api/products/:id", productController.getOneProduct);
    app.put("/api/products/:id", productController.updateProduct);
    app.delete("/api/products/:id", productController.deleteProduct);
}
