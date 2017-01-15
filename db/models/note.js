'use-strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Note = db.define('notes', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  }
})

module.exports = Note
