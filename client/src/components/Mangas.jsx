import React from 'react'

const Mangas = (props) => {
  return (
    <div className='mangaCard'>
        {
          props.manga.map((mangas) => (
            <div className='manga-card' key={mangas._id}>
                  <h3>{mangas.title}</h3>
                  <img src={mangas.title_img}/>
                  <p>{mangas.description}</p>
                  {/* <img src={mangas.chapters} /> */}
                  {mangas.chapters.map((pages) => (
                    <img src={pages} />
                  ))}
                  {/* {console.log(mangas.chapters)} */}
                <h4>Want to read the first Chapter? Click <button>here</button></h4>
               
            </div>
          ))
        }
      </div>
    )
  }

export default Mangas

// title: 'Naruto',
//       title_img: 'images/titles/NarutoCoverTankobon1.jpeg',
//       description: 'Naruto run lol',
//       chapters: '250',
//       author: author1._id