const db = require('../db')
const { Author, Manga, Review } = require('../models')

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
        'https://i.imgur.com/buODa5i.png',
        'https://i.imgur.com/pCvVzXM.png',
        'https://i.imgur.com/DU7VWNZ.png',
        'https://i.imgur.com/Ud7K7Uv.png',
        'https://i.imgur.com/H7k5mim.png',
        'https://i.imgur.com/g5mjT2V.png',
        'https://i.imgur.com/XBjdT2F.png',
        'https://i.imgur.com/yYUWPUl.png',
        'https://i.imgur.com/PuqNnUR.png',
        'https://i.imgur.com/Vld76VZ.png',
        'https://i.imgur.com/BzFlXCI.png',
        'https://i.imgur.com/LvPdveF.png',
        'https://i.imgur.com/65F8m6i.png',
        'https://i.imgur.com/0PTiCv1.png',
        'https://i.imgur.com/5uqqMwT.png',
        'https://i.imgur.com/TtWmY1z.png',
        'https://i.imgur.com/D3OKDzF.png',
        'https://i.imgur.com/5qVneH1.png',
        'https://i.imgur.com/tYRu6eF.png',
        'https://i.imgur.com/X3iCqI4.png',
        'https://i.imgur.com/wuVZYqV.png',
        'https://i.imgur.com/YITi9YA.png',
        'https://i.imgur.com/gJYDVvw.png'
      ],
      author: author1._id
    },
    {
      title: 'One-Punch Man',
      title_img: 'https://i.imgur.com/QIl9ACg.jpg',
      description: 'He hits you and you die right away',
      chapters: [
        'https://i.imgur.com/fiOvFZw.png',
        'https://i.imgur.com/6qr7GOs.png',
        'https://i.imgur.com/QRi3a77.png',
        'https://i.imgur.com/3EpPmVT.png',
        'https://i.imgur.com/4gwyejh.png',
        'https://i.imgur.com/oRHGIiu.png',
        'https://i.imgur.com/tfXocZk.png',
        'https://i.imgur.com/IcJqNWh.png',
        'https://i.imgur.com/Z2yK2xM.png',
        'https://i.imgur.com/oRoDBhp.png',
        'https://i.imgur.com/e8OcJT5.png',
        'https://i.imgur.com/fdcniaK.png',
        'https://i.imgur.com/3ragVe1.png',
        'https://i.imgur.com/pcvjxPC.png'
      ],
      author: author1._id
    },
    {
      title: 'One Piece',
      title_img: 'https://i.imgur.com/kb9oxAn.jpg',
      description: 'Gonna be king of the Pirates',
      chapters: [
        'https://i.imgur.com/MZqJIcG.png',
        'https://i.imgur.com/gZecD9y.png',
        'https://i.imgur.com/gGLj1FF.png',
        'https://i.imgur.com/6TxKu17.png',
        'https://i.imgur.com/ySfrixa.png',
        'https://i.imgur.com/QxdHzFt.png',
        'https://i.imgur.com/ULBjAba.png',
        'https://i.imgur.com/kLlegxI.png',
        'https://i.imgur.com/VHUvUYP.png',
        'https://i.imgur.com/FwcJGmI.png',
        'https://i.imgur.com/ibKIo2i.png',
        'https://i.imgur.com/h0h7Vlb.png',
        'https://i.imgur.com/cwdyn4V.png',
        'https://i.imgur.com/vQ3A6U8.png',
        'https://i.imgur.com/E8kl0LH.png',
        'https://i.imgur.com/uY5qoFt.png',
        'https://i.imgur.com/R34txPZ.png',
        'https://i.imgur.com/hR2YD5H.png',
        'https://i.imgur.com/TWmvtwZ.png',
        'https://i.imgur.com/kNhBk33.png',
        'https://i.imgur.com/PPAeS6n.png',
        'https://i.imgur.com/DNHVBjj.png',
        'https://i.imgur.com/8mAT5y9.png',
        'https://i.imgur.com/St8xcL5.png',
        'https://i.imgur.com/rFniKpA.png',
        'https://i.imgur.com/HzOSQhv.png',
        'https://i.imgur.com/jGhppXa.png',
        'https://i.imgur.com/AiMFJld.png',
        'https://i.imgur.com/2VFTbeO.png'
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
        'https://i.imgur.com/Od1YmgH.png',
        'https://i.imgur.com/4vX2UBZ.png',
        'https://i.imgur.com/GaqtL69.png',
        'https://i.imgur.com/g6Vyenk.png',
        'https://i.imgur.com/NKuKvSk.png',
        'https://i.imgur.com/vVjzLgJ.png',
        'https://i.imgur.com/bUBHiac.png',
        'https://i.imgur.com/lZfkzCU.png',
        'https://i.imgur.com/8UF4jBk.png',
        'https://i.imgur.com/Gzsq7Xc.png',
        'https://i.imgur.com/PKGmLdq.png',
        'https://i.imgur.com/FMVzxlE.png',
        'https://i.imgur.com/mrZL804.png',
        'https://i.imgur.com/7yLxcPp.png'
      ],
      author: author2._id
    },
    {
      title: 'Jujutsu-Kaisen',
      title_img: 'https://i.imgur.com/tnHCUrl.jpg',
      description: 'Fighting spirit monsters yo',
      chapters: [
        'https://i.imgur.com/LYM5sBS.png',
        'https://i.imgur.com/iwyS1hN.png',
        'https://i.imgur.com/eNoWC8K.png',
        'https://i.imgur.com/uk9iOih.png',
        'https://i.imgur.com/ExHRm7I.png',
        'https://i.imgur.com/rOi4W0Y.png',
        'https://i.imgur.com/EIrTtOx.png',
        'https://i.imgur.com/wETTcyK.png',
        'https://i.imgur.com/1JWKddl.png',
        'https://i.imgur.com/7NzmDbU.png',
        'https://i.imgur.com/nB4H2lo.png',
        'https://i.imgur.com/0OSZ64i.png',
        'https://i.imgur.com/1strckj.png',
        'https://i.imgur.com/ymVoCL1.png',
        'https://i.imgur.com/9u5S5mR.png',
        'https://i.imgur.com/zK80ccO.png',
        'https://i.imgur.com/gYipC9V.png',
        'https://i.imgur.com/0m6oyJm.png',
        'https://i.imgur.com/AGWYwwN.png',
        'https://i.imgur.com/KQaSuZQ.png',
        'https://i.imgur.com/IZIJjKI.png',
        'https://i.imgur.com/XvIp5lw.png',
        'https://i.imgur.com/3q8SftU.png',
        'https://i.imgur.com/V8a8lex.png',
        'https://i.imgur.com/Q7TIrAv.png',
        'https://i.imgur.com/q0Aex67.png',
        'https://i.imgur.com/08cgtJc.png',
        'https://i.imgur.com/yC4IuEZ.png'
      ],
      author: author2._id
    },
    {
      title: 'My Hero Academia',
      title_img: 'https://i.imgur.com/VgSf1pa.jpg',
      description: 'Have no fear, I am here',
      chapters: [
        'https://i.imgur.com/zthFyoR.png',
        'https://i.imgur.com/MRTqnbU.png',
        'https://i.imgur.com/ueKvCZT.png',
        'https://i.imgur.com/eM3sl6p.png',
        'https://i.imgur.com/2ywOZRI.png',
        'https://i.imgur.com/9FhZCCB.png',
        'https://i.imgur.com/z0nQzyY.png',
        'https://i.imgur.com/vS8o6bU.png',
        'https://i.imgur.com/iEbmg3L.png',
        'https://i.imgur.com/5YE99Wx.png',
        'https://i.imgur.com/NGq6PEn.png',
        'https://i.imgur.com/Ikf7cIj.png',
        'https://i.imgur.com/CBHI6FX.png',
        'https://i.imgur.com/M9bpSNX.png',
        'https://i.imgur.com/GRMCQVT.png',
        'https://i.imgur.com/IrugbA9.png',
        'https://i.imgur.com/yEKFZMA.png',
        'https://i.imgur.com/2lKwxgE.png',
        'https://i.imgur.com/AgVEGrO.png',
        'https://i.imgur.com/upH1i3M.png',
        'https://i.imgur.com/gMLqt3j.png',
        'https://i.imgur.com/5SmcjcL.png',
        'https://i.imgur.com/EoEaCj6.png',
        'https://i.imgur.com/Se4RKnE.png'
      ],
      author: author2._id
    }
  ]

  await Manga.insertMany(manga)
  console.log('Created manga!')

  const review = [
    {
      name: 'test',
      manga: 'test',
      text: 'test',
      review: 'test'
    }
  ]

  await Review.insertMany(review)
  console.log('Created review!')
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
