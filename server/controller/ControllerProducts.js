const dataBase = require ("../db/models")

class ProductsController{
    static async getProducts (req, res) {
        const products = await dataBase.Products.findAll()
        return res.status(200).json(products)
    }

    static async getProductById (req, res) {
        const { productid } = req.params
        const product = await dataBase.Products.findAll({
            where:{
                id: Number(productid)
            }
        })
        return res.status(200).json(product)
    }

    static async createProduct (req, res) {
        const {name, flavor, complement, price, image, type, subtype} = req.body;
        const productNew = await dataBase.Products.create({
            name,
            flavor,
            complement,
            price,
            image,
            type,
            subtype
        })
        return res.status(201).json(productNew)
    }

    static async updateProduct (req, res) {
        const {name, flavor, complement, price, image, type, subtype} = req.body;
        const {productid} = req.params
        const product = await dataBase.Products.update({
            name,
            flavor,
            complement,
            price,
            image,
            type,
            subtype
        },
        {
            where:{
                id: Number(productid)
            }
        })
        return res.status(200).json(product)
    }

    static async deleteProduct (req, res) {
        const {productid} = req.params
        const product = await dataBase.Products.destroy({
            where:{
                id: Number(productid)
            }
        })
        return res.status(200).json(product)
    }
}

module.exports = ProductsController