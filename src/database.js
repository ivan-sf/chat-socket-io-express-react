import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://majortom:root1234@cluster0.wwgvtkb.mongodb.net/?retryWrites=true&w=majority')
    .then((db)=>console.log("connect to database"))
    .catch((err)=>console.log(err))