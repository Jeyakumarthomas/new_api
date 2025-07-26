import express from 'express'
import router from './routs/movies.route.js'
import connectDB from './libs/db.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = 6969;
connectDB();


app.use(bodyParser.json());
app.use('/movies',router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT,()=>{
    try {
        console.log(`Server is running at http://localhost:${PORT}`)        
    } catch (error) {
        console.log(`Error occured : `, error.message);        
    }
})
