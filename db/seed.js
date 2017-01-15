const db = require('APP/db')

const seedNotes = () => db.Promise.map([
  {
    title: 'Meeting with Anita',
    message: 'Budget meeting with Anita at 10:30AM Friday. Make sure to complete budget worksheet for meeting.',
    tags: ['personal', 'finance']
  },
  {
    title: 'Pick Up Prescription',
    message: 'New dosage should be 220mcg of Synthroid, not 175mcg Levothyroxine',
    tags: ['personal', 'medical']
  },
  {
    title: 'App Idea',
    message: 'Picture sharing social media app that allows for you to follow other users and like/comment on their pictures',
    tags: ['apps', 'programming', 'ideas']
  },
  {
    title: "Mom's Birthday",
    message: 'Surprise Party? Spa Day? Call Janelle to coordinate',
    tags: ['personal', 'family', 'events']
  }
], note => db.model('notes').create(note))

db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedNotes)
  .then(notes => console.log(`Seeded ${notes.length} notes OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
