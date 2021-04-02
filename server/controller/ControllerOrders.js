const dataBase = require ("../db/models")

class OrdersController{
    static async getOrders (req, res) {
        const orders = await dataBase.Orders.findAll()
        return res.status(200).json(orders)
    }

    static async getOrderById (req, res) {
        const { orderId } = req.params
        const order = await dataBase.Orders.findAll({
            where:{
                id: Number(orderId)
            }
        })
        return res.status(200).json(order)
    }

    static async createOrder (req, res) {
        const {client_name, table, status, user_id} = req.body;
        const orderNew = await dataBase.Orders.create({
            client_name,
            table,
            status,
            user_id
        })
        return res.status(201).json(orderNew)
    }

    static async updateOrder (req, res) {
        const {client_name, table, status} = req.body;
        const {orderId} = req.params
        const order = await dataBase.Orders.update(
            {
                client_name, 
                table, 
                status
            },
            {
            where:{
                id: Number(orderId)
            }
        })
        return res.status(200).json(order)
    }

    static async deleteOrder (req, res) {
        const {orderId} = req.params
        const order = await dataBase.Orders.destroy({
            where:{
                id: Number(orderId)
            }
        })
        return res.status(200).json(order)
    }
}
module.exports = OrdersController