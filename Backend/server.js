const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 7000;
const {ConnectToDB,stopDatabase,isConnected} = require('./db')
const route=require('./routes');
const cors=require("cors")
app.use(express.json())
app.use(cors());
ConnectToDB().then((mongoConnection)=>{
  app.get("/",(req,res)=>{
      res.json({message : mongoConnection ? "connected" : "disconnected"})
  })
})

app.use("/data",route)


app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
})





// app.get("/ping",(req,res)=>{
//     res.send({ "message": "pong" })
// })
// const startserver=async ()=>{
//   await ConnectToDB();
//   try {
//     app.get("/",(req,res)=>{
//       res.send(`database connection status: ${isConnected()? "connected": "not connected"}`)
//     })
//     app.listen(port, () => {
//       // ConnectToDB()
//       console.log(`server running on PORT: ${port}`);
//     });
//   } catch (error) {
//     console.log("error", error)
//   }
  
// }
// startserver()

// if (require.main === module) {
//   app.listen(port, () => {
//     // ConnectToDB()
//     console.log(`server running on PORT: ${port}`);
//   });
// }


