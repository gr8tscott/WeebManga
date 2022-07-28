import React from 'react'

const Authors = (props) => {
  return (
    <div className='author-grid'>
        {
          props.authors.map((author) => (
            <div className='manga-card' key={author.id}>
                  <h3>{author.name}</h3>
                  {/* <img src={author.title_img}/> */}
                  <p>{author.works_created}</p>
                
              {/* {food.meals.map((meal)=> (
                <h4>{meal}</h4>
                ))} */}
            </div>
          ))
        }
      </div>
    )
  }

export default Authors