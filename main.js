import express from 'express'
import router from './routs/movies.route.js'
const app = express();
const PORT = 6969;

app.use('/movies',router)

app.listen(PORT,()=>{
    try {
        console.log(`Server is running at http://localhost:${PORT}`)        
    } catch (error) {
        console.log(`Error occured : `, error.message);        
    }
})
