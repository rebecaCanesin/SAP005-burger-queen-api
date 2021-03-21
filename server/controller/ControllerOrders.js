const orders = require ("../db/models/orders")

module.exports = { 
all (req, res) {
    orders.findAll().
    then((result) => {
        res.json(result);
    })
    
},

create(req, res){
    const {client_name, user_id, table, status, products} = req.body;

    orders.create({
        client_name,
        user_id,
        table,
        status,
        products,
    })
    .then((result) => {
        res.status(201).json(result);
    })
    
},

// const GetOrderIdRouter = (req, res) => {
//     res.send("Order Id")    
// };

// const PutOrderIdRouter = (req, res) => {
//     res.send("Update Orders")
// };

// const DeleteOrderIdRouter = (req, res) => {
//     res.send("Delete Orders")
// };

 
    // GetOrdersRouter,
    // GetOrderIdRouter,
    // PostOrdersRouter,
    // PutOrderIdRouter,
    // DeleteOrderIdRouter,
};