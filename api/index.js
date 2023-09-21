const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const cors = require('cors');
const User = require("models/User");
const Post = require("models/Post");

dotenv.config();
app.use(cors(
  {
    origin: ["https://lifeofpen-client.vercel.app/"],
    methods:["POST","GET","PATCH","DELETE"],
    credentials: true
  }
));
app.use(express.json());
app.get("/", (req,res)=>{
    res.json("Hello nè");
});
app.get("/posts", async(req, res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await Post.find({username:username})
        } else if(catName){
            posts = await Post.find({categories:{
                $in:[catName]
            }})
        } else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err)
    }
  })
app.use("/images", express.static(path.join(__dirname,"/images")));

mongoose
.connect(process.env.MONG0_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

const storage = multer.diskStorage({
    destination:(req, file,cb)=>{
        cb(null,"images");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
});
const upload = multer({storage:storage});
app.post("/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
})

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

app.listen("5000",()=>{
    console.log("Backend is running.")
})
