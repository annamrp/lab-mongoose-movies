const data = [
  {
    name: 'Arnold Schwarzenegger',
    occupation: 'Actor',
    catchPhrase: 'Sayonara, baby'
  },
  {
    name: 'Buzz Lightyear',
    occupation: 'Juguete',
    catchPhrase: 'Hasta el infinito y más allá'
  },
  {
    name: 'Dora la exploradora',
    occupation: 'Tocapelotas',
    catchPhrase: 'Mochila, mochila!'
  }
];

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect('mongodb://localhost/celebrities', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

Celebrity.create(data)
.then(celebrities => {
  console.log(celebrities);
  mongoose.connection.close();
})
.catch(error => {
  console.log(error)
})