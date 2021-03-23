const data = require ("../db/models")

class UserController{
    static async getAllUsers (req, res) {
        const usersAll = await data.users.findAll()
        return res.status(200).json(usersAll)
    }

    static async getUserById (req, res) {
        const userId = await req.params
        const User = await data.users.findAll({
            where:{
                id: userId
            }
        })
        return res.status(200).json(User)
    }

    static async createUser (req, res) {
        const {name, email, role, restaurant} = await req.body;
        const userNew = await data.users.create({
            name,
            email,
            role,
            restaurant,
        })
        return res.status(201).json(userNew)
    }

    static async updateUser (req, res) {
        const userId = await req.params
        const User = await data.users.update({
            where:{
                id: userId
            }
        })
        return res.status(200).json(User)
    }

    static async deleteUser (req, res) {
        const userId = await req.params
        const User = await data.users.destroy({
            where:{
                id: userId
            }
        })
        return res.status(200).json(User)
    }
}

module.exports = UserController