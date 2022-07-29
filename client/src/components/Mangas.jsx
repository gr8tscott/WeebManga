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
                
                  <h4>Want to read the first Chapter? Click <Link to={`/pagereader/${manga._id}/${index}`}>
                    HERE</Link></h4>
                
               
            </div>
          ))
        }
      </div>
    )
  }

export default Mangas
