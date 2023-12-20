import { Book } from '../model/bookmodule.js'

export const addNewBook = (async(req,res)=>{
    try {


        if(!req.body.title || !req.body.author || !req.body.year){
            return res.status(400).send({message:err.message})
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year,
            page: req.body.page
        }

        const book = await Book.create(newBook)

        return res.status(201).send(book)


        
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
        
    }
} )



export const getAllBooks = (async(req,res)=>{
    try {

        const allbooks = await Book.find({})

        return res.status(200).send({
            books:allbooks
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
        
    }
})

export const getBookById = (async(req,res)=>{
    try {

        const {id} = req.params
        const book = await Book.findById(id)
        
        if(!book){
            return res.status(404).json({message:"Book not found"})
        }

        return res.status(200).json(book)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
        
    }
})

export const updateBook = (async(req,res)=>{
    try {

        const {id} = req.params

        if(!req.body.title || !req.body.author || !req.body.year ){
            return res.status(400).send({message:err.message})
        }

       const result = await Book.findByIdAndUpdate(id,req.body)

       if(!result){
        return res.status(404).json({message:"Book not found"})
    }

    return res.status(200).json({message:"Book Updated Successfully"})

        
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
        
    }
})




export const deleteBook =(async(req,res)=>{
    try {

        const {id} = req.params

        

       const result = await Book.findByIdAndDelete(id)

       if(!result){
        return res.status(404).json({message:"Book not found"})
    }

    return res.status(200).json({message:"Book Deleted Successfully"})

        
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
        
    }
})
