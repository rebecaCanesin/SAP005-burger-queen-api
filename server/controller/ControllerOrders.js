const GetOrdersRouter = (req, res) => {
    res.send("All Orders")
};

const GetOrderIdRouter = (req, res) => {
    res.send("Order Id")
};

const PostOrdersRouter = (req, res) => {
    res.send("New Order")
};

const PutOrderIdRouter = (req, res) => {
    res.send("Update Orders")
};

const DeleteOrderIdRouter = (req, res) => {
    res.send("Delete Orders")
};

module.exports = { 
    GetOrdersRouter,
    GetOrderIdRouter,
    PostOrdersRouter,
    PutOrderIdRouter,
    DeleteOrderIdRouter,
};