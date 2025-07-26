import express from 'express'

const app = express();
const PORT = 6969;

app.get('/',(req,res)=>{
        res.json({msg :'Hello Msg'})
})

app.listen(PORT,()=>{
    try {
        console.log(`Server is running at http://localhost:${PORT}`)        
    } catch (error) {
        console.log(`Error occured : `, error.message);        
    }
})
