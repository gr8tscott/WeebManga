import React from 'react'

const Authors = (props) => {
  return (
    <div className='author-grid'>
        {
          props.authors.map((author) => (
            <div className='manga-card' key={author.id}>
                  <h3>{author.name}</h3>
                  <img className='authorImage' src={author.image}/>

                  <p style={{display:'block'}}>{author.works_created[0]}</p>
              
            </div>
          ))
        }
      </div>
    )
  }

export default Authors