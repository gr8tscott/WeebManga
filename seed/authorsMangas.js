const db = require('../db')
const { Author, Manga } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  //   Author.collection.drop()
  //   Manga.collection.drop()
  const author1 = await new Author({
    name: 'Apple',
    works_created: ['Naruto', 'One Punch Man']
  })
  author1.save()

  const author2 = await new Author({
    name: 'Vespa',
    works_created: ['One Piece', 'HunterXHunter']
  })
  author2.save()

  const manga = [
    {
      title: 'Naruto',
      title_img: 'https://i.imgur.com/r1VCgPQ.jpg',
      description: 'Naruto run lol',
      chapters: [
        'https://i.imgur.com/tHYmXHk.png',
        'https://i.imgur.com/uzXt0vS.png',
        'https://i.imgur.com/sTZKLqd.png',
        'https://i.imgur.com/9iJH3Ih.png',
        'https://i.imgur.com/buODa5i.png'
      ],
      author: author1._id
    },
    {
      title: 'One-Punch Man',
      title_img: 'https://i.imgur.com/QIl9ACg.jpg',
      description: 'He hits you and you die right away',
      chapters: [],
      author: author1._id
    },
    {
      title: 'One Piece',
      title_img: 'https://i.imgur.com/kb9oxAn.jpg',
      description: 'Gonna be king of the Pirates',
      chapters: [
        'https://i.imgur.com/TCx3LRA.png',
        'https://i.imgur.com/o0PetPL.png',
        'https://i.imgur.com/g7TTqBB.png',
        'https://i.imgur.com/GkJcvGB.png',
        'https://i.imgur.com/G8S0gYS.png'
      ],
      author: author2._id
    },
    {
      title: 'Hunter X Hunter',
      title_img: 'https://i.imgur.com/tX5E4cE.jpg',
      description: 'Looking for my Dad',
      chapters: [
        'https://i.imgur.com/6tkFXSJ.png',
        'https://i.imgur.com/rvVZclh.png',
        'https://i.imgur.com/nHjreAh.png',
        'https://i.imgur.com/XgRHykH.png',
        'https://i.imgur.com/LIaqmUh.png',
        'https://i.imgur.com/Od1YmgH.png'
      ],
      author: author2._id
    }
  ]

  await Manga.insertMany(manga)
  console.log('Created manga!')
}

const run = async () => {
  db.dropDatabase()
  await main()
  db.close()
}

run()

// const axios = require('axios')

// const options = {
//   method: 'GET',
//   url: 'https://manga11.p.rapidapi.com/news/It_Starts_With_A_Kingpin_Account',
//   headers: {
//     'X-RapidAPI-Key': '129c79f9a9mshcbd82d1c0fc7d7ap1f7b6bjsnaeadb388e4eb',
//     'X-RapidAPI-Host': 'manga11.p.rapidapi.com'
//   }
// }

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data)
//   })
//   .catch(function (error) {
//     console.error(error)
//   })
