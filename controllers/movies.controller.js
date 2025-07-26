import Movie from "../models/movie.models.js"

export const MovieIndex = (req,res) => {
    res.send('Get all Movie list');
} 
export const MovieCreate = async(req,res) => {
    const newMovie = new Movie({
        title : req.body.title,
        desc : req.body.desc
    })
    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    } catch (error) {
        return res.status(400).json({msg:error.message});
    }
} 
export const MovieUpdate = (req,res) => {
    res.send('Update a Movie');
} 
export const MovieDelete = (req,res) => {
    res.send('Delete a Movie');
} 