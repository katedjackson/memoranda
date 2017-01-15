'use strict'

const db = require('APP/db')
const Note = db.model('notes')

module.exports = require('express').Router()
  .post('/', (req, res, next) => {
    Note.create(req.body)
    .then(createdNote => res.status(201).json(createdNote))
    .catch(next)
  })
  .put('/', (req, res, next) => {
    Note.update(req.body)
      .then(updatedNote => res.status(204).json(updatedNote))
      .catch(next)
  })
  .delete('/', (req, res, next) => {
    Note.destroy({ where: { id: req.params.id } })
      .then(deletedNote => res.status(202).json(deletedNote))
      .catch(next)
  })
