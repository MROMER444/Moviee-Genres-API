const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

const genres = [
    { id: 1, name: 'Action' },  
    { id: 2, name: 'Horror' },  
    { id: 3, name: 'Romance' },  
];

//get all genres
app.get('/api/genres/' , (req , res) => {
    res.send(genres);
});

//get film by it's ID
app.get('/api/genres/:id' , (req , res) => {
    const film = genres.find(current_film => current_film.id === parseInt(req.params.id));
    if(!film){
        res.status(404).send(`there is no film with the given ID -> (${req.params.id})`);
    }else{
        res.send(film);
    }
});

//create film
app.post('/api/genres' , (req , res) => {
    const { error } = validation(req.body);
    if(error){
        res.status(404).send(error.details[0].message);
        return;
    };

    const film = {
        id: genres.length + 1,
        name: req.body.name
    };

    genres.push(film);
    res.send(film);
});

//update film
app.put('/api/genres/:id' , (req , res) => {
    const film = genres.find(current_film => current_film.id === parseInt(req.params.id));
    if(!film){
        res.status(404).send(`there is no film with the given ID -> (${req.params.id})`);
        return;
    }else{
        const { error } = validation(req.body);
        if(error){
            res.status(404).send(error.details[0].message);
            return;
        }
        film.name = req.body.name;
        res.send(film);
    }
});

//delete film
app.delete('/api/genres/:id' , (req , res) => {
    const film = genres.find(current_film => current_film.id === parseInt(req.params.id));
    if(!film){
        res.status(404).send(`there is no film with the given ID -> (${req.params.id})`);
        return;
    }else{
        const index_of_film = genres.indexOf(film);
        genres.splice(index_of_film , 1);
        res.send(film);
    }
});







function validation(film){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(film , schema);
}


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));




//TODO (GET ALL FILM) DONE
//TODO (GET FILM BY IT'S ID) DONE
//TODO (CREATE FILM) with validation DONE
//TODO (UPDATE THE NAME OF THE FILM) with validation DONE
//TODO (DELETE THE FILM) DONE