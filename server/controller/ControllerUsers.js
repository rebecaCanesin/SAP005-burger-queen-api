const data = require ("../db/models")

class UserController{
    static async getAllUsers (req, res) {
        const users = await data.Users.findAll()
        return res.status(200).json(users)
    }

    static async getUserById (req, res) {
        const { uid } = req.params
        const user = await data.Users.findAll({
            where:{
                id: Number(uid)
            }
        })
        return res.status(200).json(user)
    }

    static async createUser (req, res) {
        const { name, password, email, role, restaurant } = req.body;
        const userNew = await data.Users.create(
            { name, password, email, role, restaurant }
        )
        return res.status(201).json(userNew)
    }

    static async updateUser (req, res) {
        const {uid} = req.params
        const User = await data.Users.update({
            where:{
                id: Number(uid)
            }
        })
        return res.status(200).json(User)
    }

    static async deleteUser (req, res) {
        const {uid} = req.params
        const user = await data.Users.destroy({
            where:{
                id: Number(uid)
            }
        })
        return res.status(200).json(user)
    }
}

module.exports = UserController