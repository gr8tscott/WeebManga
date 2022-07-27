import React from 'react'
import { useParams, Link } from 'react-router-dom'

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
                  <h4>Want to read the first Chapter? Click <Link to={`/pagereader`}>
                    HERE</Link></h4>
                  {/* {mangas.chapters.map((pages) => (
                    <img src={pages} />
                  ))} */}
                  {/* {console.log(mangas.chapters)} */}
                
               
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