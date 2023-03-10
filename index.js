const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

const GoodModel = require("./models/Good");

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO,
  {
    useNewUrlParser: true,
  }
);

app.post('/send', async (req,res)=>{

  const {name, img, price}=req.body;
  const good = new GoodModel({name: name, img: img, price: price});

  try{
    await good.save();
    res.send("inserted data");
  } catch (error){
    console.log(error);
  } 
});

app.get('/read', async (req, res) => {
  GoodModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  })
});

app.listen(process.env.PORT || 3600, () => console.log("Server is listening on port 3600"));