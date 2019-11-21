var mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const CityModel = require('./models/Cities.js');
const ItineraryModel = require('./models/Itineraries')
const ActivityModel = require('./models/Activities')
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
  ItineraryModel.find({ _cityId: req.params.cityId }, (err, itinerary) => {
    res.json(itinerary)
  })
});

//////////////////////////////////////////////////////////////////

app.listen(port, () => console.log(`Listening on port ${port}`));

// allCities = CityModel.find({})
//   .then(doc => {
//     console.log('All cities reached')    
//     doc.forEach(city => {
//       const itinerary = new ItineraryModel(
//         {
//           title: `Itinerario de ${city.name}`,
//           profilePic: 'https://cdn130.picsart.com/289335079032211.png?r1024x1024',
//           rating: 5,
//           duration: 5000,
//           price: 1000,
//           hashtag: `#${city.name}BestCity`,
//           _cityId: city._id
//         }
//       )        
//       itinerary.save()
//       .then(doc => {
//         console.log('Itinerary created')
//       })
//       .catch(err => {
//         console.log(err);
        
//       })            
//     });
//   }).catch(err => {
//     console.error(err)
//   })


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


  
  const activities = [
    {title: 'Walk for center city', info: 'Join to a group to walk by city', _cityId: ''}, 
    {title: 'Explore the central market', info: 'Explore the famous central Market', _cityId: ''}, 
    {title: 'Lourve museum', info: 'Visit the famous Lourve with us', _cityId: ''}, 
    {title: 'Rome Coliseum', info: 'Know the great Roman Coliseum', _cityId: ''}, 
    {title: 'Eiffel Tower', info: 'If you come to Paris you have to visit the Eiffel Tower', _cityId: ''}, 
    {title: 'Bear fest', info: 'Famous bear fest', _cityId:'' }, 
    {title: 'Restaurant', info: 'Visit this famous Restaurant', _cityId: ''},
    {title: 'Walk for center city', info: 'Join to a group to walk by city', _cityId: ''}, 
    {title: 'Explore the central market', info: 'Explore the famous central Market', _cityId: ''}, 
    {title: 'Lourve museum', info: 'Visit the famous Lourve with us', _cityId: ''}, 
    {title: 'Rome Coliseum', info: 'Know the great Roman Coliseum', _cityId: ''}, 
    {title: 'Eiffel Tower', info: 'If you come to Paris you have to visit the Eiffel Tower', _cityId: ''}, 
    {title: 'Bear fest', info: 'Famous bear fest', _cityId: ''}, 
    {title: 'Restaurant', info: 'Visit this famous Restaurant', _cityId: ''},
    {title: 'Walk for center city', info: 'Join to a group to walk by city', _cityId: ''}, 
    {title: 'Explore the central market', info: 'Explore the famous central Market', _cityId: ''}, 
    {title: 'Lourve museum', info: 'Visit the famous Lourve with us', _cityId: ''}, 
    {title: 'Rome Coliseum', info: 'Know the great Roman Coliseum', _cityId: ''}, 
    {title: 'Eiffel Tower', info: 'If you come to Paris you have to visit the Eiffel Tower', _cityId:'' }, 
    {title: 'Bear fest', info: 'Famous bear fest', _cityId:'' }
    ]

    
    ///////////////////////////////////////
    
    // CityModel.find({})
    // .then(cities =>{
    //   cities.forEach((city, index) => {
    //     const activity = new ActivityModel({
    //       ...activities[index],
    //       _cityId: city._id
    //     })
    //     activity.save()
    //     .then(() => {
    //       console.log('Activity Created!')
    //     })        
    //   });
    // }) 
    
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