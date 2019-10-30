var mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
let CityModel = require('./Cities.js');
const dbName = "appDatabase"
db = `mongodb+srv://Davido2094:espinoza2094@cluster0-lndmc.mongodb.net/${dbName}?retryWrites=true&w=majority`

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/cities/all', (req, res) => {
    CityModel.find({}, (err, users) => {
        res.json(users)
    })
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

allCities = CityModel.find({})
    .then(doc => {
        console.log(doc)
    }).catch(err => {
        console.error(err)
    })

//////////////////////////////////////////////////////////////////

mongoose
    .connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(`DB Connection Error: ${ err.message }`);
    });


// const cities = [
//     {name: 'London', country: 'UK'}, 
//     {name: 'Berlin', country: 'Germany'}, 
//     {name: 'Madrid', country: 'Spain'}, 
//     {name: 'Rome', country: 'Italy'}, 
//     {name: 'Paris', country: 'France'}, 
//     {name: 'Bucharest', country: 'Romania'}, 
//     {name: 'Budapest', country: 'Hungary'}, 
//     {name: 'Hamburg', country: 'Germany'},
//     {name: 'Warsaw', country: 'Poland'}, 
//     {name: 'Belgrade', country: 'Serbia'}, 
//     {name: 'Vienna', country: 'Austria'}, 
//     {name: 'Milan', country: 'Italy'}, 
//     {name: 'Munich', country: 'Germany'}, 
//     {name: 'Prague', country: 'Czech Republic'}, 
//     {name: 'Sofia', country: 'Bulgaria'}, 
//     {name: 'Napoli (Naples)', country: 'Italy'}, 
//     {name: 'Stockholm', country: 'Sweden'}, 
//     {name: 'Helsinki', country: 'Finland'}, 
//     {name: 'Copenhagen', country: 'Denmark'},
//     {name: 'Oslo', country: 'Norway'}
//     ]

// cities.forEach(city => {
//     const msg = new CityModel({
//         name: city.name,
//         country: city.country
//     }) 

//     msg.save()
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// });





// CityModel.findOneAndUpdate({
//     name: 'Barccelona'
// }, {
//     name: 'Madrid'
// }, {
//     new: true,
// }).then(doc => {
//     console.log(`Updated documents to: ${doc.name}`)
// }).catch(err => {
//     console.log(err)
// })