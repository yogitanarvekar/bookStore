import  express  from "express";
import { addNewBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controller/bookController.js";


const router = express.Router()

router.post('/addbook', addNewBook)
router.get('/allbooks', getAllBooks)
router.get('/getbook/:id', getBookById)
router.put('/updatebook/:id', updateBook)
router.delete('/deletebook/:id', deleteBook)

export default router
