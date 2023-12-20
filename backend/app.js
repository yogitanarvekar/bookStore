import  express  from "express";
import bookRouter from "./routers/bookRouter.js"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1',bookRouter)

export default app