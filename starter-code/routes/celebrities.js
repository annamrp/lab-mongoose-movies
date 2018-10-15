const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');


/* GET items listing. */
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities/index', {celebrities})
  })
  .catch(error => {
    console.log(error)
  })
});

//add items
router.get('/new', (req, res, next) => {
    res.render('celebrities/new')
});
router.post('/', (req, res, next) => {
  const celebrity = req.body;
  Celebrity.create(celebrity)
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch(error => {
    console.log(error);
  })
})

//edit items
router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id
  Celebrity.findById(id)
  .then((celebrity) => {
    res.render('celebrities/edit', {celebrity})
  })
  .catch(error => {
    console.log(error);
  })
})
router.post('/:id', (req, res, next) => {
  const id = req.params.id
  const celebrity = req.body;
  Celebrity.findByIdAndUpdate(id, celebrity)
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch(error => {
    console.log(error);
  })
})

//delete items
router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id
  Celebrity.findByIdAndDelete(id)
  .then(celebrity => {
    res.redirect('/celebrities')
  })
  .catch(error => {
    console.log(error)
  })
});

//show item by id
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Celebrity.findById(id)
  .then(celebrity => {
    res.render('celebrities/show', {celebrity})
  })
  .catch(error => {
    console.log(error)
  })
});

module.exports = router;
