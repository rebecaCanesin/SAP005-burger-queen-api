const products = require ("../db/models/products")

module.exports = { 
all (req, res) {
    products.findAll().
    then((result) => {
        res.json(result);
    })
    
},

create(req, res){
    const {name, flavor, complement, price, image, type, subtype} = req.body;

    products.create({
        name,
        flavor,
        complement,
        price,
        image,
        type,
        subtype
    })
    .then((result) => {
        res.status(201).json(result);
    })
    
},

// const GetProductIdRouter = (req, res) => {
//     res.send("Product Id")
// };


// const PutProductIdRouter = (req, res) => {
//     res.send("Update Products")
// };

// const DeleteProductIdRouter = (req, res) => {
//     res.send("Delete Products")
// };


    // GetProductsRouter,
    // GetProductIdRouter,
    // PostProductsRouter,
    // PutProductIdRouter,
    // DeleteProductIdRouter,
};