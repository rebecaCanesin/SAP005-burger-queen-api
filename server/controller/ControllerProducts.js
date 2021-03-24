const data = require ("../db/models")

class ProductsController{
    static async getProducts (req, res) {
        const products = await data.Products.findAll()
        return res.status(200).json(products)
    }

    static async getProductById (req, res) {
        const productid = await req.params
        const product = await data.Products.findAll({
            where:{
                id: Number(productid)
            }
        })
        return res.status(200).json(product)
    }

    static async createProduct (req, res) {
        const {name, flavor, complement, price, image, type, subtype} = await req.body;
        const productNew = await data.Products.create({
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
        const productid = await req.params
        const product = await data.Products.update({
            where:{
                id: Number(productid)
            }
        })
        return res.status(200).json(product)
    }

    static async deleteProduct (req, res) {
        const productid = await req.params
        const product = await data.Products.destroy({
            where:{
                id: Number(productid)
            }
        })
        return res.status(200).json(product)
    }
}

module.exports = ProductsController