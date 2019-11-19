var mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const CityModel = require('./Cities.js');
const ItineraryModel = require('./Itinerary')
const dbName = "appDatabase"
db = `mongodb+srv://Davido2094:espinoza2094@cluster0-lndmc.mongodb.net/${dbName}?retryWrites=true&w=majority`

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// RUTAS

app.get('/cities/all', (req, res, next) => {
  CityModel.find({}, (err, cities) => {
    res.json(cities)
  })
});

app.get('/cities/:cityId', (req, res, next) => {
  ItineraryModel.findOne({ _cityId: req.params.cityId }, (err, itinerary) => {
    res.json(itinerary)
  })
});

//////////////////////////////////////////////////////////////////

app.listen(port, () => console.log(`Listening on port ${port}`));

allCities = CityModel.find({})
  .then(doc => {
    console.log('All cities reached')    
    doc.forEach(city => {
      const itinerary = new ItineraryModel(
        {
          title: `Itinerario de ${city.name}`,
          profilePic: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwja3JXxnvflAhXpHbkGHd_jDK8QjRx6BAgBEAQ&url=https%3A%2F%2Fes-la.facebook.com%2FProfilePictures%2Fposts%2F&psig=AOvVaw2IlhwCG3MisWLUrUqKX5vY&ust=1574286101640468',
          rating: 5,
          duration: 5000,
          price: 1000,
          hashtag: `#${city.name}BestCity`,
          _cityId: city._id
        }
      )        
      itinerary.save()
      .then(doc => {
        console.log('Itinerary created')
      })
      .catch(err => {
        console.log(err);
        
      })            
    });
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
    console.log(`DB Connection Error: ${err.message}`);
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