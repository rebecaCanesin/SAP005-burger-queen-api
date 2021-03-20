const GetUsersRouter = (req, res) => {
    res.send("All Users")
};

const GetUserIdRouter = (req, res) => {
    res.send("User Id")
};

const PostUsersRouter = (req, res) => {
    res.send("New User")
};

const PutUserIdRouter = (req, res) => {
    res.send("Update Users")
};

const DeleteUserIdRouter = (req, res) => {
    res.send("Delete Users")
};

module.exports = { 
    GetUsersRouter, 
    GetUserIdRouter, 
    PostUsersRouter, 
    PutUserIdRouter, 
    DeleteUserIdRouter 
}