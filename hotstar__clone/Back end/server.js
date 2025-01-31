const express = require('express')
require("dotenv").config();
const morgan = require("morgan");
const cors = require('cors')
const mongodbConnect = require('./config/db')
const movieController = require('./controllers/movie.controller')
const { register, login } = require('./controllers/signinsignup.controller')
const wishlistController = require('./controllers/wishlist.controller')
const googleController = require('./controllers/google.controller')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.json()); // Enables JSON body parsing
app.use(express.urlencoded({ extended: true })); // Enables form data parsing

app.use(morgan("dev"));
console.log(process.env.MONGO_URI);
mongodbConnect();


app.use('/', movieController)
app.use('/signup',register)
app.use('/signin',login)
app.use('/watchlist',wishlistController)
app.use('/google', googleController)


const port = process.env.PORT || 7000
app.listen(port, () =>
	console.log(`Server running on port ${port}`),
);
