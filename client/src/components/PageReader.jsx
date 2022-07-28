import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom' 



const PageReader = (props) => {


    let {id, index} = useParams()

    let pageImage = props.mangas[index].chapters
    // const nextBtn = () =>{
    //     let chapterArr = pageImage[i]
    //     let currentPage = 0
    //     while (i < pageImage.length){

    //     }
    // }


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
    //   pageImage[currentIndex]
    }
    // const nextButton=<img src= {props.mangas[index].chapters[0]}/>
    // const backBtn = () =>{
    //     let currentPage = 0
    //     if ()
    // }

    return (
      <div className='pageCard'>
        <div className='backButton'>
            <Link to="/mangas">Back to Manga list</Link>
            </div>
            <div>
                <h2>{props.mangas[index].title}</h2>
            <img className='fit' src= {pageImage[props.currentIndex]}/>
                {/* {props.mangas[index].chapters.map((pages, index) => (
                      <img src={pages[index]} />
                    ))} */}
                
            </div>
       
        <button onClick={previous}>Back</button>
        <button onClick={next}>Next</button>
        </div>
      )
    }

    export default PageReader