var mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const CityModel = require('./models/Cities.js');
const ItineraryModel = require('./models/Itineraries')
const ActivityModel = require('./models/Activities')
const UserModel = require('./models/Users.js')
const bcrypt=require('bcryptjs');
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

app.post('/user', (req, res)=> {
  const userData = req.body;
  var salt = bcrypt.genSaltSync(10);
  var hashPassword = bcrypt.hashSync(userData.password, salt);
  NewUser = new UserModel({
    ...userData,
    password: hashPassword
  })
  NewUser.save()
  .then(()=> console.log('User created successfully'))
})

app.post('/userLogin', (req, res)=> {
  res.json(req.body)
}) 

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

app.get('/Itineraries', (req, res, next) => {
  ItineraryModel.find({}, (err, itineraries) => {
    res.json(itineraries)
  })
});

app.get('/Itineraries/:itineraryId', (req, res, next) => {
  ItineraryModel.findOne({ _id: req.params.itineraryId }, (err, itinerary) => {
    res.json(itinerary)
  })
});

app.get('/:itineraryId/activities', (req, res, next) => {
  ItineraryModel.findOne({ _id: req.params.itineraryId })
  .populate('activities')
  .exec((err, itineraryWithActivities) => {
    res.json(itineraryWithActivities)
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));


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


//SeedActivitiesInItineraries()
//SeedActivities()
//SeedItineraries()

function SeedActivitiesInItineraries(){
  ItineraryModel.find({})
    .then(itineraries => {
      console.log("Itineraries Reached")
      itineraries.forEach((itinerary, itIndex) => {
        activitiesForItinerary = ActivityModel.find({ _cityId: itinerary._cityId})
        .then(activities => {
          console.log('Activities Reached')
          activities.forEach((activity, actIndex) => {
            const random = Math.floor(Math.random() * 5)
            if (random != 0) {
              itinerary.activities.push(activity._id)
              console.log(`Se añadio al itinerario #${itIndex} la actividad #${actIndex}`)
            }
          })
        })
        itinerary.save()
      })
    })
}

function SeedActivities() {
  const minActivities = 3
  const maxActivities = 6
  CityModel.find({})
    .then(cities => {
      cities.forEach(city => {
        initActivities.forEach(activity => {
          const newActivity = new ActivityModel({
            ...activity,
            title: activity.title + ` of ${city.name}`,
            _cityId: city._id,
            itineraries: []
          })
          newActivity.save()
            .then(res => {
              console.log('Activity Created!')
            })
        })
      })
    })
}

function SeedItineraries() {
  allCities = CityModel.find({})
    .then(doc => {
      console.log('All cities reached')
      doc.forEach(city => {
        const itinerary = new ItineraryModel(
          {
            title: `Itinerario de ${city.name}`,
            profilePic: 'https://cdn130.picsart.com/289335079032211.png?r1024x1024',
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
}

function SeedCities() {
  cityModel.insertMany(cities, (err, docs) => {

  })
  .then(() => {console.log("All cities have been inserted")})
}





const initActivities = [
  { title: 'Walk for center town', info: 'Join to a group to walk by city', _cityId: '' },
  { title: 'Explore the central market', info: 'Explore the famous central Market', _cityId: '' },
  { title: 'Museum viit', info: 'Visit the famous museum', _cityId: '' },
  { title: 'Park', info: 'Know the great Park', _cityId: '' },
  { title: 'Mountains', info: 'Join the adventure of claim a mountain', _cityId: '' },
  { title: 'Bear fest', info: 'Famous bear fest', _cityId: '' },
  { title: 'Restaurant', info: 'Visit this famous Restaurant', _cityId: '' },
]

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