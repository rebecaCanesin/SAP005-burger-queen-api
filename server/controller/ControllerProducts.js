const GetProductsRouter = (req, res) => {
    res.send("All Products")
};

const GetProductIdRouter = (req, res) => {
    res.send("Product Id")
};

const PostProductsRouter = (req, res) => {
    res.send("New Product")
};

const PutProductIdRouter = (req, res) => {
    res.send("Update Products")
};

const DeleteProductIdRouter = (req, res) => {
    res.send("Delete Products")
};

module.exports = { 
    GetProductsRouter,
    GetProductIdRouter,
    PostProductsRouter,
    PutProductIdRouter,
    DeleteProductIdRouter,
};