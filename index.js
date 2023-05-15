const express = require('express');
const app = express();
const Joi = require('joi');
const genres = require('./routes/genres'); 

app.use(express.json());
app.use('/api/genres' , genres);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));




//TODO (GET ALL FILM) DONE
//TODO (GET FILM BY IT'S ID) DONE
//TODO (CREATE FILM) with validation DONE
//TODO (UPDATE THE NAME OF THE FILM) with validation DONE
//TODO (DELETE THE FILM) DONE