const user = require("../Model/users");

const handleGetAll = async (req, res) => {
    const allUsers = await user.find({})// retrieves all DB collections
    const html = `
    <ol>
    ${allUsers.map((user) => `<li>${user.last_name} - ${user.gender} - ${user._id}</li>`).join("")}
    </ol>
    `;

    res.send(html)
}

const handleGetById = async (req, res) => {

    const seachingUser = await user.findById(req.params.id)
    if (!seachingUser) {
        res.status(404).json({ msg: "Not Found the User!.." });
    }
    res.status(201).json(seachingUser);
}

const handlePostUser = async (req, res) => {
    // I have to create new user.
    const newUser = req.body;
    if (
        !newUser ||
        !newUser.firstName ||
        !newUser.lastName ||
        !newUser.email
    ) {
        return res.status(400).json({ msg: "All fields are required!..." });
    }

    const result = await user.create({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email
    });
    console.log("Result ", result);
    res.status(201).render("home",{user:newUser.firstName});
}

const patchById = async (req, res) => {
    const updatedData = req.body;
    (!updatedData) && res.json({ msg: "Required Data is not given!..." });
    await user.findByIdAndUpdate(req.params.id, {
        firstName: updatedData.firstName,
        lastName: updatedData.lastName,
        email: updatedData.email

    });
    res.json({ msg: "Updated Data Successfully!...", id: req.params.id });

}

const deleteById = async (req, res) => {
    await user.findByIdAndDelete(req.params.id);
    res.json({ msg: "Successfully, Deleted Data!...", id: req.params.id });
}

module.exports = {
    handleGetAll,
    handleGetById,
    handlePostUser,
    patchById,
    deleteById
}