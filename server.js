const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 6969;


app.get("/ping",(req,res)=>{
    res.send({ "message": "pong" })
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`server running on PORT: ${port}`);
  });
}

module.exports = app;
