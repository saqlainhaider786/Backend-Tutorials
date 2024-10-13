const {v4:uuidv4}=require("uuid")
const usersData = require("../Model/users");

const handleSignUp = async (req, res) => {
    const { name, email, password } = req.body;

    usersData.create({
        name,
        email,
        password
    });

    res.redirect("home");
}

const handleLogIn = async (req, res) => {
    const {email, password } = req.body;

    const user=await usersData.findOne({email,password});
    if(!user){
        res.render("login",{
            err:"Invalid email or password!..."
        });
    }
    else{
        const sessionId=uuidv4();
        res.redirect("/");
    }
}

module.exports = { handleSignUp,handleLogIn }