import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom' 



const PageReader = (props) => {

    let {id, index} = useParams()

    return (
      <div className='pageCard'>
        <div className='backButton'>
            <Link to="/mangas">Back to Manga list</Link>
            <div>
                {props.mangas[index].chapters.map((pages) => (
                      <img src={pages} />
                    ))}
                    </div>
        </div>
          {
            // const chapter= ()=> {

            // }
            // <h3>{props.mangas.chapters}</h3>
            // props.mangas.map((manga, index) => (
            //   <div className='page-card' key={manga._id}>
            //         <h3>{manga.title}</h3>
                    
            //         {/* <img src={mangas.chapters} /> */}
            //         {manga.chapters.map((pages) => (
            //           <img src={pages} />
            //         ))}
            //         {/* {console.log(mangas.chapters)} */}
                
                 
            //   </div>
            // ))
          }
        </div>
      )
    }

    export default PageReader