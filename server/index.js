const express = require('express');
const ConnectDB = require("./db")
const ad = require("./model/adsSchema")
const serach = require("./routes/search")
require('dotenv').config()
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 5000;


app.use("/api/search",serach)
const start =async()=>{
    try {
        await ConnectDB(env.process.MONGO_DB_URI)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
        
    } catch (error) {
        console.log({msg:error})
    }
}
start()
