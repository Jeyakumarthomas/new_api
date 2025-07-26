import Movie from "../models/movie.models.js"

export const MovieDetail = async (req,res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if(movie == null){
            return res.status(404).json({msg:"cannot find movie"})
        }else{
            res.json(movie)
        }
    } catch (error) {
            return res.status(500).json({msg:error.message})
    }
};

export const MovieIndex = async(req,res) => {
    try {
        const movies = await Movie.find()
        return res.json(movies)
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
};
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
};
export const MovieUpdate = async(req,res) => {
    try{
    const result = await Movie.findOneAndUpdate({_id:req.params.id},
    { 
        title : req.body.title,
        desc : req.body.desc
    },{
        new : true 
    }
);
    return res.status(200).json(result)
}catch(err){
    return res.status(400).json({msg:err.message})
}
    // if(req.body.title != null){
    //     res.movie.title = req.body.title
    // }
    // if(req.body.desc != null){
    //     res.movie.desc = req.body.desc
    // }
    // try {
    //     const updatedMovie = await res.movie.save();
    //     res.json(updatedMovie)
    // } catch (error) {
    //     res.status(400).json({msg:error.message})
    // }
} 
export const MovieDelete = (req,res) => {
    res.send('Delete a Movie');
} 