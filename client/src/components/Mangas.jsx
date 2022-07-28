import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Mangas = (props) => {
  return (
    <div className='manga-grid'>
        {
          props.mangas.map((manga, index) => (
            <div className='manga-card' key={manga._id}>
                  <h3>{manga.title}</h3>
                  <img src={manga.title_img}/>
                  {/* <p>{manga.description}</p> */}
                  {/* <img src={mangas.chapters} /> */}
                  <h4>Want to read the first Chapter? Click <Link to={`/pagereader/${manga._id}/${index}`}>
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