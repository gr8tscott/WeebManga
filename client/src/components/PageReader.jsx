import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom' 


const PageReader = (props) => {
    return (
      <div className='pageCard'>
          {
            props.manga.map((mangas) => (
              <div className='page-card' key={mangas._id}>
                    <h3>{mangas.title}</h3>
                    
                    {/* <img src={mangas.chapters} /> */}
                    {mangas.chapters.map((pages) => (
                      <img src={pages} />
                    ))}
                    {/* {console.log(mangas.chapters)} */}
                
                 
              </div>
            ))
          }
        </div>
      )
    }

    export default PageReader