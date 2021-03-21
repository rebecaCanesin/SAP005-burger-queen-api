const users = require ("../db/models/users")

module.exports = { 
all (req, res) {
    users.findAll().
    then((result) => {
        res.json(result);
    })
    
},

// const GetUserIdRouter = (req, res) => {
//     res.send("User Id")
// };

create(req, res){
    const {name, email, role, restaurant} = req.body;

    users.create({
        name,
        email,
        role,
        restaurant,
    })
    .then((result) => {
        res.status(201).json(result);
    })
    
},

// const PutUserIdRouter = (req, res) => {
//     res.send("Update Users")
// };

// const DeleteUserIdRouter = (req, res) => {
//     res.send("Delete Users")
// };


    // GetUsersRouter, 
    // GetUserIdRouter, 
    // PostUsersRouter, 
    // PutUserIdRouter, 
    // DeleteUserIdRouter 
}