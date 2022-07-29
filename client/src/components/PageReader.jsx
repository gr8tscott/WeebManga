import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom' 



const PageReader = (props) => {


    let {id, index} = useParams()

    let pageImage = props.mangas[index].chapters
   


    function next(){
    move();
    console.log("next button hit")
    }

    function previous(){
    move(false);
    }

    function move(advance = true){
    let tempIndex = (props.currentIndex + (advance ? 1 : -1) + pageImage.length) % pageImage.length;
    console.log(pageImage[props.currentIndex])
    props.setCurrentIndex(tempIndex)
    
    }
    

    return (
      <div className='pageCard'>
        <div className='backButton'>
            <Link to="/mangas">Back to Manga list</Link>
            </div>
            <div>
                <h2>{props.mangas[index].title}</h2>
            <img className='fit' src= {pageImage[props.currentIndex]}/>
                
                
            </div>
            <div className='nextBack'>
       <button onClick={next}>Next</button>
        <button onClick={previous}>Back</button>
        </div>
        </div>
      )
    }

    export default PageReader