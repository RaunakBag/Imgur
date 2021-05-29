import express from 'express';//using express
import bodyParser from 'body-parser';//using bodyparser
import mongoose from 'mongoose';//using mongoose
import cors from 'cors';//using cors
const path = require('path');//using path
//import dotenv from "dotenv";

// importing routes
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

//initialising express
const app = express();
//dotenv.config();

//setting limit for uploaded files
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//using routes imported above
app.use('/posts', postRoutes);
app.use("/user", userRouter);

// Serve static assets if in production
if(process.env.NODE_ENV !== 'production') {
  // Set static folder 
  app.use(express.static('client/build'));

  app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//mongodb atlas connection url
const CONNECTION_URL = "mongodb+srv://RaunakBag:Raunak12@cluster0.jlxok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//initialising port
const PORT = process.env.PORT|| 5000;

//connecting to mongodb using mongoose
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);