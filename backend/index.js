import app from "./app.js";
import connectDatabase from "./config/dataBase.js";



connectDatabase()

app.listen(8000,() =>{
    console.log("Server is running...")
})


