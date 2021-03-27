const data = require ("../db/models")

class OrdersController{
    static async getOrders (req, res) {
        const orders = await data.Orders.findAll()
        return res.status(200).json(orders)
    }

    static async getOrderById (req, res) {
        const { orderId } = req.params
        const order = await data.Orders.findAll({
            where:{
                id: Number(orderId)
            }
        })
        return res.status(200).json(order)
    }

    static async createOrder (req, res) {
        const {client_name, table, status} = req.body;
        const orderNew = await data.Orders.create({
            client_name,
            table,
            status
        })
        return res.status(201).json(orderNew)
    }

    static async updateOrder (req, res) {
        const {orderId} = req.params
        const order = await data.Orders.update({
            where:{
                id: Number(orderId)
            }
        })
        return res.status(200).json(order)
    }

    static async deleteOrder (req, res) {
        const {orderId} = req.params
        const order = await data.Orders.destroy({
            where:{
                id: Number(orderId)
            }
        })
        return res.status(200).json(order)
    }
}
module.exports = OrdersController