


const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
require('dotenv').config()

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY)
}

const register = async (req, res) => {
    try {
      const { email, password} = req.body;
  
      if (!email || !password ) {
        return res.status(400).json({ status: 0, message: "All fields are required (email, password, name, picture)" });
      }
  
      let user = await User.findOne({ email }).lean().exec();
      if (user) {
        return res.json({ status: 0, message: "User already exists" });
      }
  
      user = await User.create({ email, password});
      const token = newToken(user);
  
      return res.status(201).json({ token, status: 1, message: "User registered successfully" });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ status: 0, message: "Internal Server Error", error: error.message });
    }
  };
  


const login = async (req, res) => {
    try {

        console.log({user :  req.body})
        let user = await User.findOne({ email: req.body.email })
        if (!user)
            return res
            .send({ status : 0 })


        const isRightFlag = user.checkPassword(req.body.password)
        if (isRightFlag == false)
            return res
            .send({ status : 0 })


        const token = newToken(user)
        res.send({token ,status : 1})
    } catch (error) {
        res.status(500).send({register : error.message})
    }
}

module.exports = { register, login, newToken }